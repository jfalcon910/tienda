import React from 'react';
import ReactDOM from 'react-dom';
import Footer from './components/layout/footer';
import Header from './components/layout/header';
import AllRoutes from './routes'; 


ReactDOM.render(
  <React.StrictMode>
    <Header />
    <AllRoutes />
    <Footer />
  </React.StrictMode>,
  document.getElementById('root')
);

