import React from 'react'
import './App.css';
import Header from './Header';
import Comment from './Comment';
function App() {
  return (
    <div className="App">
      <div className='App_2'>
        <Header/>
        <Comment weight={5}/>
        <Comment weight={0}/>
      </div>
      
    </div>
  );
}

export default App;
