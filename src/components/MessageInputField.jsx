import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Avatar, Grid } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    gridRow: 2,
    margin: '26px'
  }
})

export const MessageInputField = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container spacing={2}>
        <Grid item xs={1} md={8}>
          <Avatar />
        </Grid>
        <Grid item xs={10} md={8}>
          入力
        </Grid>
        <Grid item xs={1} md={8}>
          ボタン
        </Grid>
      </Grid>

    </div>
  )
}
