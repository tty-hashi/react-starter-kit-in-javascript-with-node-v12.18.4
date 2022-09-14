import { TextField } from '@material-ui/core'
import React from 'react'

import { pushMessage } from '../firebase';

const MessageField = ({ text, setText, name, inputEl }) => {
  const formSubmitHandler = (e) => {
    e.preventDefault();
    if (text === '') return;
    pushMessage({ text, name });
    setText('');
  }
  return (
    <form onSubmit={formSubmitHandler}>
      <TextField inputRef={inputEl} fullWidth={true} value={text} onChange={e => setText(e.target.value)} autoFocus />
    </form>
  )
}

export default MessageField