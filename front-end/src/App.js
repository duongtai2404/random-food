import React, { useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import './App.css';

//components
import Header from './components/header/Header';
import NavBar from './components/navigation-bar/NavBar';

//pages
import Login from './pages/auth-pages/Login';
import Signup from './pages/auth-pages/SignUp';
import Introduce from './pages/Introduce';
import Foods from './pages/Foods';
import AddFood from './pages/AddFood';
import GetFood from './pages/GetFood';

//actions
import { loadFromStorage } from './redux/slices/UserSlice';
import { getAllFoods } from './redux/slices/FoodSlice';

function App() {
  const dispatch = useDispatch();
  const token = useSelector(state => state.user.token);

  const tokenFromLocal = localStorage.getItem('token');

  useEffect(() => {
    if (tokenFromLocal && token === '') {
      dispatch(loadFromStorage({ token: tokenFromLocal }));
    }
    if (tokenFromLocal && token !== '') {
      dispatch(getAllFoods());
    }
  }, [token, dispatch, tokenFromLocal]);

  return (
    <div className='App'>
      <Router>
        <React.Fragment>
          {token !== '' ? (
            <div className='row'>
              <div className='col-3 p-0 col-navbar'>
                <NavBar />
              </div>
              <div className='col-9 p-0'>
                <Header />
                <main className='main-content'>
                  <Switch>
                    <Route path='/introduce' component={Introduce} />
                    <Route path='/new' component={AddFood} />
                    <Route path='/foods' component={Foods} />
                    <Route path='/random' component={GetFood} />
                    <Redirect from='/*' to='/introduce' exact />
                  </Switch>
                </main>
              </div>
            </div>
          ) : (
            <Switch>
              <Route path='/login' component={Login} />
              <Route path='/signup' component={Signup} />
              <Redirect from='/' to='/login' />
            </Switch>
          )}
        </React.Fragment>
      </Router>
    </div>
  );
}

export default App;
