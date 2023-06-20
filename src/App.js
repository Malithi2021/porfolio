import React from 'react';
import Header from './components/header/Header';
import Nav from './components/nav/Nav';
import About from './components/about/About';
import Exp from './components/experience/Exp';
import Skills from './components/skills/Skills';
import Education from './components/education/Education'
import Article from './components/Articles/Article';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import Port from './components/portfolio/Portfolio';
import Land from './components/landing/Landing'
import ReactSwitch from 'react-switch';
import {BsFillMoonStarsFill} from 'react-icons/bs'
import {GiSun} from 'react-icons/gi'
import { createContext, useState } from 'react';
export const ThemeContext = createContext(null)

const App = () => {
   const [theme, setTheme] = useState("light")

   const toggleTheme = () => {
      setTheme((curr) => (curr === "dark" ? "light" : "dark"))
   }
   return (

      <ThemeContext.Provider value={{ theme, toggleTheme }}>
         <div className='App' id={theme}>
         <div className='switch'> 
          
          <ReactSwitch onChange={toggleTheme} checked={theme==="dark"} 
          offColor='#fffff' 
          onColor='#00000' 
          offHandleColor='#00000' 
          onHandleColor='#fffff'
          checkedIcon= <BsFillMoonStarsFill />
          uncheckedIcon= <GiSun />
          /></div>
     
<Land />
            {/* <Header /> */}
            <Nav />
            <About />
            <Exp />
            <Skills />
            <Port />
            <Article />
            {/* <Education /> */}
            <Contact />
            <Footer />
 
         </div>


      </ThemeContext.Provider>




   )
}

export default App;

