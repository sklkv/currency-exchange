import React, { Component } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Table from './components/Table/Table';
import Calculator from './components/Calculator/Calculator';

class App extends Component {
  state = {
    appMode: true,
  };

  changeState = value => {
    this.setState({
      appMode: !!value,
    });
  };

  render() {
    const { appMode } = this.state;
    return (
      <div className='App'>
        <Header />
        {appMode ? <Table /> : <Calculator />}
        <Footer state={this.changeState} />
      </div>
    );
  }
}

export default App;
