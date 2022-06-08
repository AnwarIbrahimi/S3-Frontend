import React from 'react'

import { Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import Home from '../pages/Home';
import Catalog from '../pages/Catalog';
import Detail from '../pages/detail/Detail';
import AccountOverview from '../components/account/AccountOverview';
import CreateAccount from '../components/account/CreateAccount';
import UpdateAccount from '../components/account/UpdateAccount';
import ChatRoom from '../components/ChatRoom';
import Login from '../components/account/Login';

export const PopcornRoutes = () => {

    const [logged, setLogged] = useState(false);

    const [userId, setUserId] = useState(-1);
  
    const loginData = (loginValue) => {
  
      if (loginValue !== '') {
  
        localStorage.setItem('logged', true)
  
        localStorage.setItem('userId', loginValue.userId)
  
        setLogged(true)
  
        setUserId(loginValue.userId)
  
      }
  
    }
  return (
    <Routes>
            <Route
                path='/:category/search/:keyword'
                element={<Catalog/>}
            />
            <Route
                path='/:category/:id'
                element={<Detail/>}
            />
            <Route
                path='/:category'
                element={<Catalog/>}
            />
            <Route
                path='/'
                exact
                element={<Home/>}
            />
            <Route
                path='/AccountOverview'
                exact
                element={<AccountOverview/>}
            />
            <Route
                path='/CreateAccount'
                exact
                element={<CreateAccount/>}
            />
            <Route
                path='/ChatRoom'
                exact
                element={<ChatRoom/>}
            />
            <Route
                path='/UpdateAccount/:id'
                exact
                element={<UpdateAccount/>}
            />
            <Route
                path='/Login'
                exact
                element={<Login loginData={loginData}/>}
            />
        </Routes>
  );
}
