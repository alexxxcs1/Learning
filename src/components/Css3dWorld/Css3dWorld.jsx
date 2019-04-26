import React, { Component } from 'react'
import style from './Css3dWorld.scss';

import Coordinate from './tool/Coordinate';
import Cube from './sprite/Cube';
import { Transform } from 'stream';

export class Css3dWorld extends Component {
  constructor(props)
  {
    super(props);
  }
  componentDidMount()
  {
    // this.refs.rs.refs.top.style.border = '#123333 20px solide'
    var Planes = this.refs.rs.retrunPlane();
  }
  render() {
    return (
      <div className={style.ViewBox}>
        <div className={style.Stage}>
            
            <Coordinate />
            {/* <Cube width='100' height='100' length='100' position={[-100,20,-200]} border={'#999 solid 2px'}/>
            <Cube width='100' height='100' length='100' position={[100,-20,200]} border={'#999 solid 2px'}/>
            <Cube width='100' height='100' length='100' position={[0,0,0]} border={'#666 solid 40px'}/> */}
            <Cube width='100' height='100' length='100' position={[0,-80,-200]} border={'#999 solid 2px'}/>
            <Cube width='100' height='100' length='100' position={[0,-80,200]} border={'#999 solid 2px'}/>
            <Cube width='100' height='100' length='100' position={[200,-80,0]} border={'#999 solid 2px'}/>
            <Cube width='100' height='100' length='100' position={[-200,-80,0]} border={'#999 solid 2px'}/>
            <Cube width='150' height='150' length='150' position={[0,-150,0]} border={'#999 solid 20px'}/>
            
            
            <Cube width='800' height='10' length='800' position={[0,6,0]} border={'#000 solid 0.1px'} ref='rs'/>
            
            
            
            {/* <DPlane type='bottom'/> */}
        </div>
      </div>
    )
  }
}

export default Css3dWorld
