import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Avatar, Grid } from '@material-ui/core';

import { gravatar } from '../gravatar';
import MessageField from './MessageField';
import MessageSubmitButton from './MessageSubmitButton';

const useStyles = makeStyles({
  root: {
    gridRow: 2,
    margin: '26px'
  }
})

export const MessageInputField = ({ name }) => {
  const [text, setText] = useState('');
  const classes = useStyles();
  const avatarPath = gravatar('gipcompany@gmail.com');

  return (
    <div className={classes.root}>
      <Grid container spacing={2}>
        <Grid item xs={1} md={8}>
          <Avatar src={avatarPath} />
        </Grid>
        <Grid item xs={10} md={8}>
          <MessageField text={text} setText={setText} name={name} />
        </Grid>
        <Grid item xs={1} md={8}>
          <MessageSubmitButton text={text} setText={setText} name={name} />
        </Grid>
      </Grid>

    </div>
  )
}
