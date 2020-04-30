import React from 'react';
import './App.css';
import MainCom from './page/Main'
import "./store/store"
import ProjectShow from './components/ProjectShow'
import IntroductionShow from './components/IntroductionShow'
import {Provider} from 'react-redux'
import {store} from './store/store'
import CommentsShow from './components/CommentsShow'
import EditorCom from './components/EditorCom'

function App() {
  return (
    <Provider store = {store}>
    <div className="App">
        <MainCom/>
        <CommentsShow/>
        <ProjectShow/>
        <IntroductionShow/>
    </div>
    </Provider>
  );
}

export default App;
