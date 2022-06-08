import 'swiper/swiper.min.css';
import './assets/boxicons-2.0.7/css/boxicons.min.css';
import './App.scss';
import { useState } from 'react';


import { BrowserRouter as Router } from 'react-router-dom';

import Header from './components/header/Header';
import Footer from './components/footer/Footer';

import { PopcornRoutes } from './config/routes';
import { render } from '@testing-library/react';

function App() {
  render()

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
    <Router>
      <Header logged={localStorage.getItem('logged')}/>
      <PopcornRoutes/>
      <Footer/>
    </Router>
  );
}

export default App;
