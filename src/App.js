import React, {Component} from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import About from './components/pages/About';
import Header from './components/layout/Header';
import Addtodo from './components/Addtodo';
import Todos from './components/Todos';
import './index.css'
import { v4 as uuidv4 } from 'uuid';

class Aap extends Component {
  state={
    todos:[
      {
        id: uuidv4(),
        title: "Take out the trash",
        completed: false
      },
      {
        id: uuidv4(),
        title: "Take out the trash",
        completed: true
      },
      {
        id: uuidv4(),
        title: "Take out the trash",
        completed: false
      }
    ]
  }

//Toggle Completed
  markCompleted = (id) => {
    this.setState({todos: this.state.todos.map(todo => {
      if(todo.id === id){
        todo.completed = !todo.completed
      }
      return todo;
    })})
  }

//Delete Todo
  delTodo = (id) => {
    this.setState({ todos: [...this.state.todos.filter
      (todo => todo.id !== id)
    ]})
  }

//Add Todo
addtodo = (title) => {
  const newTodo = {
    id: uuidv4(),
    title,
    completed: false
  }
  this.setState({todos: [...this.state.todos, newTodo]})
}

  render() { 
    return (
      <Router>
        <div className='container'>
        <Header/>
        <Routes>
        <Route exact path="/" element={
        <React.Fragment>
        <Addtodo addtodo={this.addtodo}/>
        <Todos todos={this.state.todos} 
        markCompleted={this.markCompleted} 
        delTodo={this.delTodo}/>
        </React.Fragment>}/>
        <Route path='/about' element={<About/>} />
        </Routes>
        </div>
    </Router>
    );
  }
}
 
export default Aap;