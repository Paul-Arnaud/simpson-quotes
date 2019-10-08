import React, {Component} from 'react';
import Navbar from './components/Navbar';
import QuoteCards from './components/QuoteCards';
import Logo from './logo.svg';
import './App.css';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      working: false
    };
  }
  handleClick = () => {
    this.setState({working: !this.state.working });
  };
  render(){
    const working = this.state.working ? 'App-logo App-logo-working' : 'App-logo';
    return (
      <div className="App">
       <Navbar />
       <button onClick={this.handleClick}>Rotate logo (with setState)</button>
       <img src={Logo} alt="logo" className={working} />
       <QuoteCards character="Homer Simpson" image="https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FHomerSimpson.png?1497567511939" quote="In theory, Communism works! In theory."/>
       <QuoteCards character="Otto" image="https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FOttoMann.png?1497567511803cd" quote="Oh, wow, windows. I don't think I could afford this place."/>
      </div>
    )
  };
} 

export default App;
