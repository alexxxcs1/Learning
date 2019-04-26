import React, { Component } from 'react'
import Plane from './Plane';

export class Cube extends Component {
  constructor(props)
  {
    super(props);

    this.retrunPlane = this.retrunPlane.bind(this);
  }
  retrunPlane()
  {
    return [this.refs.back,this.refs.front,this.refs.bottom,this.refs.top,this.refs.left,this.refs.right]
    // console.log(this);
  }
  render() {
    return (
      <div style={{position:'relative',
        transform:'translateX(-50%) translateY(-50%) translateX('+this.props.position[0]+'px) translateY('+this.props.position[1]+'px) translateZ('+this.props.position[2]+'px)' }}>
            <Plane style={{width:this.props.width?this.props.width+'px':'100px',
             height:this.props.height?this.props.height+'px':'100px',
             border:this.props.border?this.props.border:'#333 solid 0px',
             transform:'translateX(-50%) translateY(-50%) translateZ('+(-(this.props.length)/2)+'px)'}} 
             ref='back'/>  
            <Plane style={{width:this.props.width?this.props.width+'px':'100px',
             height:this.props.height?this.props.height+'px':'100px',
             border:this.props.border?this.props.border:'#333 solid 0px',
             transform:'translateX(-50%) translateY(-50%) translateZ('+(this.props.length/2)+'px)'}}
             ref='front'/>     
            <Plane style={{width:this.props.width?this.props.width+'px':'100px',
             height:this.props.length?this.props.length+'px':'100px',
             border:this.props.border?this.props.border:'#333 solid 0px',
             transform:'translateX(-50%) translateY(-50%) translateY('+this.props.height/2+'px) rotateX(90deg)'}}
             ref='bottom'/>
            <Plane style={{width:this.props.width?this.props.width+'px':'100px',
             height:this.props.length?this.props.length+'px':'100px',
             border:this.props.border?this.props.border:'#333 solid 0px',
             transform:'translateX(-50%) translateY(-50%) translateY('+(-this.props.height/2)+'px) rotateX(90deg)'}}
             ref='top'/>
            <Plane style={{width:this.props.length?this.props.length+'px':'100px',
             height:this.props.height?this.props.height+'px':'100px',
             border:this.props.border?this.props.border:'#333 solid 0px',
             transform:'translateX(-50%) translateX('+(-this.props.width/2)+'px) translateY(-50%) rotateY(90deg)'}}
             ref='left'/>
            <Plane style={{width:this.props.length?this.props.length+'px':'100px',
             height:this.props.height?this.props.height+'px':'100px',
             border:this.props.border?this.props.border:'#333 solid 0px',
             transform:'translateX(-50%) translateX('+this.props.width/2+'px) translateY(-50%) rotateY(90deg)'}}
             ref='right'/>
      </div>
    )
  }
}
export default Cube
