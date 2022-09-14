import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    gridRow: 1,
  }
})

const MessageList = () => {
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