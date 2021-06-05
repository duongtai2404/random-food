import React from 'react';
import { useHistory, Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';

//actions
import { logOut } from '../../redux/slices/UserSlice';

import './Header.css';

const Header = () => {
  const dispatch = useDispatch();

  const clearStorageAndStore = () => {
    localStorage.clear();
    dispatch(logOut({}));
  };

  return (
    <div className='main-header'>
      <div className='d-flex float-start'>
        <button className='btn-hambuger btn '>
          <span>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='24'
              height='24'
              fill='currentColor'
              className='bi bi-list'
              viewBox='0 0 16 16'
            >
              <path
                fillRule='evenodd'
                d='M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z'
              />
            </svg>
          </span>
        </button>
        <div className='title-header'>Ăn gì đây</div>
      </div>
      <div className='float-end mt-3 me-4'>
        <Link
          className='btn btn-outline-primary'
          onClick={clearStorageAndStore}
          to='/signup'
        >
          Logout
        </Link>
      </div>
    </div>
  );
};

export default Header;
