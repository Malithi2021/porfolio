import React from 'react';
import Header from './components/header/Header';
import Nav from './components/nav/Nav';
import About from './components/about/About';
import Exp from './components/experience/Exp';
import Skills from './components/skills/Skills';
import Education from './components/education/Education'
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import Port from './components/portfolio/Portfolio';


const App = () => {
  return (
   <>
 
 
<Header />
   <Nav />
<About />
<Exp />
<Skills />
<Port />
<Education />
<Contact />
<Footer /> 
   </>
    
  
  )
}

export default App;

