import React from 'react';
import ReactDOM from 'react-dom/client';
import Accueil from './pages/accueil.jsx';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header />
    <Accueil/>
    <Footer />
  </React.StrictMode>,
)
