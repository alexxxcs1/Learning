import React, { Component } from 'react'
import Line from '../sprite/Line';

export class Coordinate extends Component {
  render() {
    return (
      <div style={{zIndex:-1}}>
        <Line style={{width:'5px', height:'3000px', }}/>
        <Line style={{width:'5px', height:'3000px', transform:'translateX(-50%) translateY(-50%) rotateX(90deg)'}}/>
        <Line style={{width:'5px', height:'3000px', transform:'translateX(-50%) translateY(-50%) rotateY(90deg) rotateX(-90deg) '} }/>
      </div>
    )
  }
}

export default Coordinate
