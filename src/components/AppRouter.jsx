import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Accueil from '../pages/accueil.jsx';
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';
import Erreur from '../pages/erreur.jsx';
import APropos from '../pages/a-propos.jsx';
import FicheLogement from '../pages/fiche-logement.jsx';

function AppRouter() {
    return (
<Router>
      <Header/>
        <Routes>
            <Route path="/" element={<Accueil />} />
            <Route path="/a-propos" element={<APropos />} />
            <Route path="*" element={<Erreur />}></Route>
        </Routes>
      <Footer/>
</Router>
    )
}

export default AppRouter