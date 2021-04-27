import React from "react";
import ReactDOM from 'react-dom';
import './App.css';
import Table from './Table.js';

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
         characters: [
         
         ]
    }
  }
  

    removeCharacter = (index) => {
      const { characters } = this.state;
      this.setState({
          characters: characters.filter( (character,i) => {
            return i !== index;
      })
    })
  }
  
 render() { 
  const {characters} = this.state;
  
    return (
    <div className="App">
       <h1>Details you have Entered</h1>
      
       <Table CharacterData={characters} removeCharacter = {this.removeCharacter}/>
    </div>
  )
}


}


export default App;
