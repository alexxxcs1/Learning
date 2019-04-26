import React, { Component } from 'react'
import Plane from './Plane';

export class DPlane extends Component {
  constructor(props)
  {
      super(props);
      this.state = {
          type:'default',
      };
      this.refreshState_type = this.refreshState_type.bind(this);
      this.createPlane = this.createPlane.bind(this);
  }
  componentDidMount()
  {
    this.refreshState_type(this.props);
  }
  refreshState_type(prop)
  { 
    this.setState({
        type:prop.type?prop.type:'default',
    });
  }
  createPlane()
  {
      switch (this.state.type) {
          case 'def':
              return <Plane/>
          case 'front':
              return <Plane/>
          case 'bottom':
              return <Plane style={{width:'100px',height:'100px',transform:'translateX(-50%) translateY(-50%) rotateX(90deg)'}}/>
          case 'left':
              return <Plane style={{width:'100px',height:'100px',transform:'translateX(-50%) translateY(-50%) rotateY(90deg)'}}/>
      }
  }
  render() {
    return (
      <div>
          {this.createPlane()}
      </div>
    )
  }
}

export default DPlane
