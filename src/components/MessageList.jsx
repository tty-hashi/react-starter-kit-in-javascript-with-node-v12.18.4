import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { List } from '@material-ui/core';
import { messagesRef } from '../firebase';
import { useState } from 'react';
import { useEffect } from 'react';
import MessageItem from './MessageItem';

const useStyles = makeStyles({
  root: {
    gridRow: 1,
    overflow: 'auto',
    width: '100%'
  }
})

const MessageList = () => {
  const [messages, setMessages] = useState([])

  useEffect(() => {
    messagesRef.orderByKey().limitToLast(10).on('value', (snapshot) => {
      const messages = snapshot.val();
      if (messages === null) return;
      const entries = Object.entries(messages)
      const newMessages = entries.map(entry => {
        const [key, nameAndText] = entry;
        return { key, ...nameAndText };
      });
      setMessages(newMessages);
    });
  }, []);

  const classes = useStyles();
  const length = messages.length;
  console.log(length)
  return (
    <List className={classes.root} >
      {messages.map(({ key, name, text }, index) => {
        const isLastItem = length === index + 1;
        return <MessageItem key={key} name={name} text={text} isLastItem={isLastItem} />
      })}
    </List>
  )
}

export default MessageList