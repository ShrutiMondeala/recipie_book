import axios from 'axios';
import React, { Component } from 'react';
import './App1.css';
import Blocks from './Components/Blocks';
import Inputdata from './Components/inputData';



const API=`e426a54f67a9195344f48ad76310c243`;
const App_key=`e1d94bc4`;
class App extends Component {
        constructor(){
            super();
            this.state={
                recipes:[]
            }

        }

    
    getRecipe= async(e)=>{
        
        const inputValue=e.target.elements.inputValue.value;
        e.preventDefault();
        const data = await fetch(`https://api.edamam.com/search?q=${inputValue}&app_id=e1d94bc4&app_key=e426a54f67a9195344f48ad76310c243`);
        const response = await data.json();
        //const result = await axios(`https://cors-anywhere.herokuapp.com/https://api.edamam.com/search?q=${inputValue}&app_id=${App_key}&app_key=${API}`)
        
        this.setState({
            recipes: response.hits
        })
        console.log(this.state.recipes);
    }
    render() {
        return (
            <div className='App'>
                <div className='Header'>
                    <h1>Recipe Book</h1>
                </div>
                <div><Inputdata getData={this.getRecipe}/></div>
                    {this.state.recipes.map((recipie)=>{
                        return <Blocks recipie={recipie}/>;
                    })}
            </div>
        );
    }
}

export default App;

