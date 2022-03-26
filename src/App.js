import { Routes, Route } from 'react-router-dom';

import './styles/main.styles.scss';

import Home from './pages/home.page';
import About from './pages/about.page';
import Contact from './pages/contact.page';
import Genetics from './pages/genetics.page';
import Consultation from './pages/consultation.page';
import Footer from './components/footer.component';
import Navigation from './components/navigation.component';
import Header from './components/header.component';

function App() {
  return (
    <div className="App container">
      <Navigation />
      <Header />
      <main>
        <Routes>
          <Route path='/' element={<Home/>} exact />
          <Route path='/about' element={<About/>} />
          <Route path='/contact' element={<Contact/>} />
          <Route path='/genetics' element={<Genetics/>} />
          <Route path='/consultation' element={<Consultation/>} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
