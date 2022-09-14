import { Avatar, Divider, ListItem, ListItemAvatar, ListItemText, Typography } from '@material-ui/core'
import React from 'react'
import { useEffect } from 'react';
import { useRef } from 'react';

import { gravatar } from '../gravatar'

const MessageItem = ({ name, text, isLastItem }) => {
  const avaterPath = gravatar(name);
  const ref = useRef(null);

  useEffect(() => {
    if (isLastItem) {
      ref.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [isLastItem])

  return (
    <>
      <ListItem ref={ref} >
        <ListItemAvatar>
          <Avatar src={avaterPath} />
        </ListItemAvatar>
        <ListItemText
          primary={name}
          secondary={
            <Typography
              sx={{ display: 'inline' }}
              component="span"
              variant="body2"
              color="primary"
            >
              {text}
            </Typography>
          }
        />
      </ListItem>
    </>
  )
}

export default MessageItem