import React from 'react';
import ReactDOM from 'react-dom';
import Footer from './components/layout/footer';
import Header from './components/layout/header';
import Login from './pages/login';


ReactDOM.render(
  <React.StrictMode>
    <Header />
    <Login />
    <Footer />
  </React.StrictMode>,
  document.getElementById('root')
);

