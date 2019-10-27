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

  render(){
    const { name, email, message } = this.state
    return(
      <div>
        <form>
          <input name="name" value={name} onChange={this.handleChange}></input>
          <input name="email" value={email} onChange={this.handleChange}></input>
          <input name="message" value={message} onChange={this.handleChange}></input>
        </form>
      </div>
    )
  }
}

export default Form
