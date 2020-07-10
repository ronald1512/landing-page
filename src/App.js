import React, {Component} from 'react';
import Navbar from './Components/Navbar';
import Masthead from './Components/Masthead';
import About from './Components/About';

class App extends Component{
  constructor(props){
    super(props);

  }
  render(){
    return (
      <div className="App">
        <Navbar />
        <Masthead />
        <About />
      </div>
    );
  }
}


export default App;
