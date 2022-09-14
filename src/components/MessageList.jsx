import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import { messagesRef } from '../firebase';
import { useState } from 'react';
import { useEffect } from 'react';

const useStyles = makeStyles({
  root: {
    gridRow: 1,
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
        const [key, ...nameAndText] = entry;
        return { key, ...nameAndText };
      });
      setMessages(newMessages);
    });
  }, []);

  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={8}>
        </Grid>
      </Grid>
    </div>
  )
}

export default MessageList