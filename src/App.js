import React from "react";
import ReactDOM from 'react-dom';
import './App.css';
import Table from './Table.js';

class App extends React.Component() {
  render(){
  
    return (
    <div className="App">
       <h1>Details you have Entered</h1>
       <Table />
    </div>
  )
}
}

export default App;
