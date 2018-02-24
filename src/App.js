import React, { Component } from 'react';
import './App.css';
import Headers from './views/Headers'
import Game from './views/Game'
//import SubNav from './views/SubNav'
import {Provider} from 'react-redux';
import store from './store';
//import SubNav from './components/SubNav/SubNav';
class App extends Component {
  render() {
    return (
      <Provider store={store}>
      <div className="App">
          <Headers/>
          <Game/>
       
      </div>
      </Provider>
    );
  }
}

export default App;
