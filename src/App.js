import React from "react";
import ReactDOM from 'react-dom';
import './App.css';
import Table from './Table.js';

class App extends React.Component() {
  render(){
    const characters = [
      {
        name:"Sarah",
        job: "DevOps Engineer"
      },
      {
        name:"Rob",
        job: "Cloud Engineer"
      },
      {
        name: "John",
        job: "Architect"
      }
    ]
  
    return (
    <div className="App">
       <h1>Details you have Entered</h1>
       <Table characterData={characters}/>
    </div>
  )
}
}

export default App;
