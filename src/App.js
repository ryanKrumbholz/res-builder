import React, { Component } from 'react';
import './App.css';
import Resume from './components/template/template';
import Landing from './components/landing/landing';

export default class App  extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active : <Landing setValue = {this.setValue} setCount = {this.setCount} presentResume = {this.presentResume}/>
    }
  }

  setValue = (e) => {
    var name = e.target.name;
    var value = e.target.value
    this.setState({[name] : value});
  }

  setCount = (name, val) => {
    this.setState({name: val});
  }

  presentResume = () => {
    this.setState({
      active:  <Resume state = {this.state}/>
    })
  }
  
  render () {
    return this.state.active
  }
}

