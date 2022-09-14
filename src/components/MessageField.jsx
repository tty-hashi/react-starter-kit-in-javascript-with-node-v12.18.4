import { formatMs, TextField } from '@material-ui/core'
import React from 'react'

const MessageField = ({ text, setText, name }) => {
  const formSubmitHandler = (e) => {
    e.preventDefault();
    if (text === '') return;
    console.log('push message')

    setText('')
  }
  return (
    <form onSubmit={formSubmitHandler}>
      <TextField fullWidth={true} value={text} onChange={e => setText(e.target.value)} />
    </form>
  )
}

export default MessageField