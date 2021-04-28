import React from "react";
//import ReactDOM from 'react-dom';
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
    <div className="container">
       <h1>Details you have Entered</h1>
      <h2>Add Name and Job</h2>
       <Table CharacterData={characters} removeCharacter = {this.removeCharacter}/> <hr></hr>
        <h3>Add New</h3>
       <Form handleSubmit={this.handleSubmit}/>
    </div>
  )
}


}


export default App;
