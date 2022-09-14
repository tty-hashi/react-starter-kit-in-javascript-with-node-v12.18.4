import { IconButton } from '@material-ui/core'
import React from 'react'
import Send from '@material-ui/icons/Send';

import { pushMessage } from '../firebase'

const MessageSubmitButton = ({ name, text, setText }) => {
  const onClickHandler = () => {
    pushMessage({ text, name: 'hamu' });
    setText('');
  }
  return (
    <IconButton color="primary" onClick={onClickHandler} disabled={text === '' ? true : false}>
      <Send />
    </IconButton>
  )
}

export default MessageSubmitButton