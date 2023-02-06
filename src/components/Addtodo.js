import React, {Component} from 'react'
class Addtodo extends Component {
state = {
    title: ''
}
onSubmit = (e) => {
    e.preventDefault()
    this.props.addtodo(this.state.title)
    this.setState({title: ''})
}

onChange = (e) => this.setState({[e.target.name]: e.target.value})
  render() { 
    return  (
        <form onSubmit={this.onSubmit} style={{display: 'flex', padding: '10px 0px'}}>
            <input type="text" name="title" placeholder="Add Todo...." style={{flex: '10', padding: '10px'}} value={this.state.title} onChange={this.onChange} />
            <input type="submit" value="Submit" className="btn"/>
        </form>
    )
  }
}

export default Addtodo