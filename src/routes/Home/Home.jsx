import React, { Component } from 'react'
import {Route,Switch  } from 'react-router-dom';
import style from './Home.scss'

export class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pageonload:false,
    };
  }
  componentDidMount()
  {
      this.setState({
        pageonload:true,
      }) 
      console.log(this.props);
      this.createInput = this.createInput.bind(this);
  }
  createInput()
  {
    var a = [];
    for (let j = 0; j <= 4000; j++) {
      a.push((<input type="text"/>))
    }
    return a
  }
  render() {
    return (
      <div className={style.Box}>
        
      </div>
    )
  }
}

export default Home
