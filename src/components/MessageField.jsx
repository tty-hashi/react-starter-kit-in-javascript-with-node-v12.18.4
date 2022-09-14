import { TextField } from '@material-ui/core'
import React from 'react'

import { pushMessage } from '../firebase';

const MessageField = ({ text, setText, name }) => {
  const formSubmitHandler = (e) => {
    e.preventDefault();
    if (text === '') return;
    pushMessage({ text, name: 'hamu' });
    setText('');
  }
  return (
    <form onSubmit={formSubmitHandler}>
      <TextField fullWidth={true} value={text} onChange={e => setText(e.target.value)} autoFocus />
    </form>
  )
}

export default MessageField