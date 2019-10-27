import React, { Component } from 'react';
import {TextField, Button} from '@material-ui/core';


class Form extends Component {
  state = {
    name: '',
    email: '',
    message: '',
    inputFiledCheck: false
  }

  checkFields = () => {

    if(!this.state.name || !this.state.email || !this.state.message){
      console.log('please enter required field*')
      return false
    } else {
      this.setState({
        inputFiledCheck: true
      })
      return true
    }
  }

  handleChange = e => {
    this.setState({
      [e.currentTarget.name]: e.currentTarget.value
    })
  }

  handleSubmit = async(e) => {
    try {
      e.preventDefault()
      await this.checkFields()
      if(this.state.inputFiledCheck){
        this.setState({
          name: '',
          email: '',
          message: '',
          inputFiledCheck: false
        })
        console.log(this.state)
      }
    } catch(err) {
      return "please enter required field"
    }
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

export default (Form)
