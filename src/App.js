import React, {Component} from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import About from './components/pages/About';
import Header from './components/layout/Header';
import Addtodo from './components/Addtodo';
import Todos from './components/Todos';
import './index.css'
import { v4 as uuidv4 } from 'uuid';
import axios from 'axios';

class Aap extends Component {
  state={
    todos:[ ]
  }

componentDidMount() {
  axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10')
  .then(res => this.setState({todos: res.data}))
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
    axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
    .then(res => this.setState({ todos: [...this.state.todos.filter
      (todo => todo.id !== id)
    ]}))
  }

//Add Todo
addtodo = (title) => {
  axios.post('https://jsonplaceholder.typicode.com/todos', {
    title: title,
    completed: false
  })
  .then(res => this.setState({todos: [...this.state.todos, res.data]}))
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