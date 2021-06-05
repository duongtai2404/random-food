import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { login } from '../../redux/slices/UserSlice';

import './auth.css';

const LoginPage = () => {
  const dispatch = useDispatch();

  const [email, changeEmail] = useState('');
  const [password, changePassword] = useState('');

  const onSubmit = async e => {
    e.preventDefault();
    const res = await dispatch(login({ email, password }));
  };

  return (
    <main>
      <div className='main-form'>
        <div className='container-form'>
          <form className='form-auth' onSubmit={onSubmit}>
            <div className='form-floating form-input'>
              <input
                type='email'
                className='form-control'
                placeholder='name@example.com'
                value={email}
                onChange={e => changeEmail(e.target.value)}
              />
              <label>Email Address</label>
            </div>

            <div className='form-floating form-input'>
              <input
                type='password'
                className='form-control'
                placeholder='Password'
                value={password}
                onChange={e => changePassword(e.target.value)}
              />
              <label>Password</label>
            </div>

            <div className='float-end'>
              <span className='note'>
                Don't have account ? <Link to='/signup'>Signup</Link>
              </span>
              <button
                type='submit'
                disabled={email !== '' && password !== '' ? false : true}
                className='btn btn-primary'
              >
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
};

export default LoginPage;
