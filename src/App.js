import React from 'react';
import './App.css';
import MainCom from './page/Main'
import "./store/store"
import ProjectShow from './components/ProjectShow'
import {Provider} from 'react-redux'
import {store} from './store/store'
function App() {
  return (
    <Provider store = {store}>
    <div className="App">
        <MainCom/>
        <ProjectShow/>
    </div>
    </Provider>
  );
}

export default App;
