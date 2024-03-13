import React from 'react';
import logo from './logo.svg';
import './App.css';
import Child from './child'
import YmlBase from './ymlBase'

function App() {
  return (
    <div className="App">
      <h1>見出し</h1>
      <Child sendChild={'hoge'} />
      <h1>YML</h1>
      <YmlBase />
    </div>
  );
}

export default App;
