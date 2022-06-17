import { Routes, Route } from 'react-router-dom';
import { createContext, useState } from 'react';
import PopupProvider from './context/popupProvider.component';

import './styles/main.styles.scss';

import Home from './pages/home.page';
import About from './pages/about.page';
import Contact from './pages/contact.page';
import Genetics from './pages/genetics.page';
import Consultation from './pages/consultation.page';
import Footer from './components/footer.component';
import Navigation from './components/navigation.component';
import Header from './components/header.component';
import Main from './components/main.component';
import Popup from './components/popup.component';

import TestStoreFetch from './pages/test-store-fetch.page';

function App() {


  return (
    <PopupProvider>
    <div className="App container">
      <Popup />
      <Navigation />
      <Header />
      <Main>
        <Routes>
          <Route path='/' element={<Home/>} exact />
          <Route path='/about' element={<About/>} />
          <Route path='/contact' element={<Contact/>} />
          <Route path='/genetics' element={<Genetics/>} />
          <Route path='/consultation' element={<Consultation/>} />
          <Route path='/test' element={<TestStoreFetch />} />
        </Routes>
      </Main>
      <Footer />
    </div>
    </PopupProvider>
  );
}

export default App;
