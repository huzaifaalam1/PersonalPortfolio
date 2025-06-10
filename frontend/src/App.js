import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer'
import Home from './pages/Home';
import Experiences from './components/Experiences';
import Resume from './components/Resume'
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <>
      <Header />
      <main>
        <Home />
        <Experiences />
        <Resume />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
