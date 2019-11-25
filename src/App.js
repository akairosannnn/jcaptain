import React from 'react';
import logo from './logo.svg';
import DropDown from './components/dropdown/DropDown'
import Particles from 'react-particles-js'
import ParticleParams from './background-particle/ParticlesParams'
import Logo from './components/logo/Logo'
import './App.css';

function App() {

  return (
    <div className="App">
      <div>
        {console.log(ParticleParams)}
      </div>
      <div>
        <Particles params={ParticleParams} className='particles' /> 
        <Logo />
      </div>
    </div>
  );
}

export default App;
