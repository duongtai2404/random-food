import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import './auth.css';

const SignupPage = () => {
  const [email, changeEmail] = useState('');
  const [password, changePassword] = useState('');
  const [retypePassword, changeRetypePassword] = useState('');

  const [errorRetypePassword, changeErrorRetypePassword] = useState('default');

  const onChangeRetypePassword = e => {
    changeRetypePassword(e.target.value);
    if (e.target.value !== password) {
      changeErrorRetypePassword('true');
    } else {
      changeErrorRetypePassword('false');
    }
  };

  const onSubmit = e => {
    e.preventDefault();
    console.log(email, password, retypePassword);
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

            <div className='form-floating form-input'>
              <input
                type='password'
                className={
                  `form-control` +
                  (errorRetypePassword === 'true'
                    ? ' is-invalid'
                    : errorRetypePassword === 'false'
                    ? ' valid'
                    : '')
                }
                placeholder='Retype Password'
                value={retypePassword}
                onChange={onChangeRetypePassword}
              />
              <label>Retype Password</label>
            </div>

            <div className='float-end'>
              <span className='note'>
                Have a account ? <Link to='/login'>Login</Link>
              </span>
              <button
                type='submit'
                disabled={
                  errorRetypePassword === 'false' && email !== '' ? false : true
                }
                className='btn btn-primary'
              >
                SignUp
              </button>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
};

export default SignupPage;
