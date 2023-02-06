import React, {Component} from 'react'
import TodoItem from './TodoItem'
import PropTypes from 'prop-types'

class Todos extends Component {
  render() { 
    return  this.props.todos.map((todo)=>(
            <TodoItem todo={todo} 
            key={todo.id} 
            markCompleted={this.props.markCompleted} delTodo={this.props.delTodo}
            />
    ));
  }
}

//PropTypes
Todos.propTypes = {
    todos: PropTypes.array.isRequired
}

export default Todos;