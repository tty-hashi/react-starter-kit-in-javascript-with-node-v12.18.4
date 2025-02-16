import React from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { useState } from 'react';
import { useEffect } from 'react';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="" target='_blank' rel='noopener'>
        Tetsuya Hashi
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignIn(props) {
  const classes = useStyles();
  const { name, setName } = props;
  const [disabled, setDisabled] = useState(true)
  const [string, setString] = useState('');

  useEffect(() => {
    string ? setDisabled(false) : setDisabled(true)
  }, [string])
  const setNameHandler = () => {
    setName(string);
    setString('');
  }
  const onSubmitHandle = (e) => {
    e.preventDefault();
    setNameHandler();
  }
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Typography component="h1" variant="h5">
          ようこそ
        </Typography>
        <form className={classes.form} noValidate onSubmit={onSubmitHandle}>
          <TextField variant="outlined" margin="normal" required fullWidth id="name" label="ニックネーム" name="name" autoFocus value={string} onChange={e => setString(e.target.value)} />
          <Button type="button" fullWidth variant="contained" color="primary" className={classes.submit} disabled={disabled} onClick={setNameHandler}>
            はじめる
          </Button>
        </form>
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  );
}