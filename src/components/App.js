import React, { useState } from 'react';
import Main from '../Main';
import SignIn from './SignIn';

import config from '../config.json'

export default () => {
  const [name, setName] = useState('');
  console.log(name);
  return (
    <div>
      {/* {name !== '' ? <Main name={name} /> : <SignIn name={name} setName={setName} />} */}
      {name !== '' ? <Main name={name} /> : <Main name={name} />}
    </div>
  )
};
