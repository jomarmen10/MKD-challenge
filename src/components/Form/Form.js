import React, { Component } from 'react';
import {TextField, Button} from '@material-ui/core';


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
    console.log(this.state)
  }

  render(){
    const { name, email, message } = this.state
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <TextField label="Name*" name="name" value={name} onChange={this.handleChange}></TextField> <br/>
          <TextField label="Email*" name="email" value={email} onChange={this.handleChange}></TextField> <br/>
          <TextField label="Message*" name="message" value={message} onChange={this.handleChange}></TextField> <br/> <br/>
          <Button variant="outlined" color="primary" onClick={this.handleSubmit}>send</Button>
        </form>
      </div>
    )
  }
}

export default Form
