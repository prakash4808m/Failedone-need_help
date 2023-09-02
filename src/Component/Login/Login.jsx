import React from 'react'
import './Login.css';
import { Button } from '@mui/material';
import { useStateValue } from '../../DataLayer/StateProvider';
import { auth, provider } from '../../firebase';
import { actionType } from '../../DataLayer/reducer';
const Login = () => {
    const [dispatch] = useStateValue();
    const signin = e => {
        e.preventDefult();

         auth
         .signInWithPopup(provider)
         .then(result => {
            dispatch({
                type: actionType.SET_USER,
                user: result.user
            });
         })
    .catch(err => alert(err.message));
};

  return (
    <div className='login'>
        <div className='login__container'>
            <img
            src='https://www.creativefreedom.co.uk/wp-content/uploads/2017/06/Twitter-logo-2012.png'
            alt='logo'
            />
            <div className='login__text'>
                <h1>sign in to Twitter</h1>
            </div>
            <Button type='submit' on onClick={signin}>
                sign in with Google
            </Button>
        </div>
        </div>
  );
};

export default Login;