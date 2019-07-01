import React, {Component} from 'react';
import TodoItem from "./Card"
import Header from './Header'
import Footer from './Footer'
import Nav from './Nav'
import './form.css'


class Input extends Component{
    state = {
        todoItems : [],
        newTodo : ""
      };

    handleChange = (e) => {
    this.setState({newTodo: e.target.value})
    }

    handleSubmit = (e) => {
       
        this.setState(prevState => {
            return{
                todoItems:[...prevState.todoItems, this.state.newTodo],
                newTodo: ""
            };
            
        })
        e.preventDefault(); 
    };

    render() {
        return (
            <div id="main">
                <Header title = "Business Global App"/>
                <h1 className= "topic">Welcome to Business Global</h1>
                <div id ="nav"><Nav/></div>
                <br/>
               <div>
                <form onSubmit = {this.handleSubmit} id="putting">
                <br/>
                    <input type = "text" value = {this.state.newTodo}
                     onChange = {this.handleChange}/>{""}
                 
                    <br/>
                    <button>SUBMIT</button>
                    <br/>
                    <br/>
                </form>
                </div>
                <div>
                {this.state.todoItems.map(item => (
                    <TodoItem oneItem = {item}/>
                )  )   }
                </div>
                <div id = "display"></div>
                <br/>
                <footer id = "Footer"><Footer/></footer>
            </div>
    
        )
    }                
}
export default Input;