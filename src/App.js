import React from "react";
import ReactDOM from 'react-dom';
import './App.css';
import Table from './Table.js';
import Form from './Form.js';

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
  
  //handle submit
  handleSubmit = (character) => {
     this.setState( {characters: [ ...this.state.characters, character]})
  }


  
 render() { 
  const {characters} = this.state;
  
    return (
    <div className="App">
       <h1>Details you have Entered</h1>
      
       <Table CharacterData={characters} removeCharacter = {this.removeCharacter}/>

       <Form handleSubmit={this.handleSubmit}/>
    </div>
  )
}


}


export default App;
