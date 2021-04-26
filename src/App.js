import React from "react";
import ReactDOM from 'react-dom';
import './App.css';
import Table from './Table.js';

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
         characters: [
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
    }
  
  
  const {characters} = this.state;

   removeCharacter = (index) => {
    this.setState({
      characters: characters.filter( (character,i) => {
          return i !== index;
      })
    })
  }
  }
 render() { 
    
  
    return (
    <div className="App">
       <h1>Details you have Entered</h1>
      
       <Table characterData={characters} removeCharacter = {this.removeCharacter}/>
    </div>
  )
}


}


export default App;
