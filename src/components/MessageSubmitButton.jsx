import { IconButton } from '@material-ui/core'
import React from 'react'
import Send from '@material-ui/icons/Send';

import { pushMessage } from '../firebase'

const MessageSubmitButton = ({ name, text, setText, inputEl }) => {
  const onClickHandler = () => {
    pushMessage({ text, name: 'hamu' });
    setText('');
    inputEl.current.focus();
  }
  return (
    <IconButton color="primary" onClick={onClickHandler} disabled={text === '' ? true : false}>
      <Send />
    </IconButton>
  )
}

export default MessageSubmitButton