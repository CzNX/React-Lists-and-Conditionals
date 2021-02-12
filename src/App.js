import React, {Component} from 'react'; 
import logo from './logo.svg';
import './App.css';
import { render } from '@testing-library/react';
import Validation from './Validation/Validation.js';
import Char from './Char/Char';

class App extends Component {

  state ={
    userInput:''
  };

  onChangeHandler =(event) =>{
    this.setState({userInput:event.target.value});
  }

  deleteCharHandler= (index)=>{
    const text = this.state.userInput.split('');  ///split to single item array
    text.splice(index,1);          // delete and returns clicked item only
    const updatedText = text.join('');
    // console.log(updatedText)
    this.setState({userInput:updatedText});
  }

  render(){
    const charList = this.state.userInput.split('').map((ch,index) => {
      return <Char character={ch}
      key={index}
      clicked = {()=>this.deleteCharHandler(index)}/>;
    }
    );

  //   const s ={
  //     height:'50px',
  //     width:'200px',

  // }


  return (
    <div className="App">
      <h1>4. Working with Lists and Conditionals</h1>
        <ol>
          <li>Create an input field (in App component) with a change listener which outputs the length of the entered text below it (e.g. in a paragraph).</li>
          <li>Create a new component (=> ValidationComponent) which receives the text length as a prop</li>
          <li>Inside the ValidationComponent, either output "Text too short" or "Text long enough" depending on the text length (e.g. take 5 as a minimum length)</li>
          <li>Create another component (=> CharComponent) and style it as an inline box (=> display: inline-block, padding: 16px, text-align: center, margin: 16px, border: 1px solid black).</li>
          <li>Render a list of CharComponents where each CharComponent receives a different letter of the entered text (in the initial input field) as a prop.</li>
          <li>When you click a CharComponent, it should be removed from the entered text.</li>
        </ol>
        <p>Hint: Keep in mind that JavaScript strings are basically arrays!</p><br>
        </br>
        <h2>SOLUTION:</h2>
      <input type='text' 
      style={{color: "red",height:'50px',width:'200px'}}
        onChange ={this.onChangeHandler}
        value = {this.state.userInput}
      ></input>
      <p>{this.state.userInput}</p>
      <Validation
        inputLength={this.state.userInput.length}
      ></Validation>
      {charList}
    </div>
  );
  }
}

export default App;
