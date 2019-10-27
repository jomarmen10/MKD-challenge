import React, { Component } from 'react';

class Form extends Component {
  state = {
    name: '',
    email: '',
    message: ''
  }

  handleChange = e => {
    this.setState({
      [e.currentTarget.name]: e.currentTarget.value
    })
  }

  handleSubmit = e => {
    e.preventDefault()
    console.log('submit working')
  }

  render(){
    const { name, email, message } = this.state
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <input name="name" value={name} onChange={this.handleChange}></input>
          <input name="email" value={email} onChange={this.handleChange}></input>
          <input name="message" value={message} onChange={this.handleChange}></input>
          <button>send</button>
        </form>
      </div>
    )
  }
}

export default Form
