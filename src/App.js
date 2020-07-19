import React, {Component} from 'react';
import Navbar from './Components/Navbar';
import Masthead from './Components/Masthead';
import About from './Components/About';
import Services from './Components/Services';
import Portfolio from './Components/Portfolio';
import Contact from './Components/Contact';

class App extends Component{
  render(){
    return (
      <header>
        <Navbar />
        <Masthead />
        <About />
        <Services />
        <Portfolio />
        <Contact />
      </header>
    );
  }
}


export default App;
