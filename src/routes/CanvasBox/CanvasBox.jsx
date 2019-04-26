import React, { Component } from 'react'
import style from './CanvasBox.scss'
  

function getangle(start,end){
  var diff_x = end.x - start.x,
      diff_y = end.y - start.y;
  //返回角度，不是弧度
  return 360*Math.atan(diff_y/diff_x)/(2*Math.PI);
}
//点：圆心xy坐标，半径，每帧移动xy的距离
function Circle(startx,starty,x, y, r, moveX, moveY) {
  this.startx = startx,
  this.starty = starty,
  this.x = x,
  this.y = y,
  this.r = r,
  this.moveX = moveX,
  this.moveY = moveY;
}
let pointArray = [];
export class CanvasBox extends Component {
constructor(props) {
  super(props);
  this.state = {
    WIDTH:0,
    HEIGHT:0,
  };
     this.refreshProps = this.refreshProps.bind(this);
     this.getScreenSize = this.getScreenSize.bind(this);
     this.getTextData = this.getTextData.bind(this);
     this.DrawText = this.DrawText.bind(this);
     this.HandleInputChange = this.HandleInputChange.bind(this);
     this.drawCricle = this.drawCricle.bind(this);
     this.Infinity = this.Infinity.bind(this);
}
componentWillReceiveProps(nextprops) {
  this.refreshProps(nextprops);
}
componentDidMount() {
  this.refreshProps(this.props);
  this.getScreenSize();
  window.addEventListener('resize',this.getScreenSize);  
  requestAnimationFrame(this.Infinity)
}
componentWillUnmount(){
  window.removeEventListener('resize',this.getScreenSize);
}
refreshProps(props) {
  
}
HandleInputChange(e){
  this.DrawText(this.getTextData(e.target.value))
}
getScreenSize(){
  this.setState({
    WIDTH:window.document.body.clientWidth,
    HEIGHT:window.document.body.clientHeight
  })
  this.refs.canvas.setAttribute('width',window.document.body.clientWidth)
  this.refs.canvas.setAttribute('height',window.document.body.clientHeight)
}
getTextData(text){
  let canvas = document.createElement('canvas');
  let orgc_width = parseInt(this.refs.canvas.getAttribute('width'));
  let orgc_height = parseInt(this.refs.canvas.getAttribute('height'));
  let width = 350;
  let height = (width/orgc_width) * orgc_height;
  canvas.setAttribute('width',width);
  canvas.setAttribute('height',height);
  

  let tmpctx = canvas.getContext('2d');
  tmpctx.fillStyle = '#000';
  tmpctx.font = 'bold 10px Arial';
  let textsize = tmpctx.measureText(text);
  const size = 0.8;
  const lineHeight = 7;
  const fSize = Math.min(height * size * 10 / lineHeight, width * size * 10 / textsize.width);
  tmpctx.font = `bold ${fSize}px Arial`;   // `sss ${var} sss` 模板字符串 相当于 'sss '+var+' sss'
  const measureResize = tmpctx.measureText(text);
  let left = (width - measureResize.width) / 2;
  const bottom = (height + fSize / 10 * lineHeight) / 2;
  tmpctx.fillText(text, left, bottom);
  // document.body.append(canvas);
  let data = tmpctx.getImageData(0, 0, width, height);
  const points = [];
  for (let i = 0, max = data.width * data.height; i < max; i++) {
    if (data.data[i * 4 + 3]) {
        points.push({
            x: (i % data.width) / data.width,
            y: (i / data.width) / data.height
        });
    }
  }
  return points;
}
DrawText(textdata){
  let ctx = this.refs.canvas.getContext('2d');
  let width = parseInt(this.refs.canvas.getAttribute('width'))
  let height = parseInt(this.refs.canvas.getAttribute('height'))
  ctx.clearRect(0, 0, width, height);
  if (textdata.length<pointArray.length) {
    pointArray.splice(textdata.length,pointArray.length);
  }
  for (let z = 0; z < textdata.length; z++) {
    let data = textdata[z];
    if (pointArray[z]) {
      pointArray[z].x = data.x*width;
      pointArray[z].y = data.y*height;
    }else{
      pointArray.push(this.drawCricle(ctx,Math.random()*width,Math.random()*height,data.x * width,data.y * height,1,29,29))
    }
    
  }
}
// 绘制原点
drawCricle(cxt,startx,starty, x, y, r, moveX, moveY) {
  var circle = new Circle(startx,starty,x, y, r, moveX, moveY)
  cxt.fillStyle = 'red';
  cxt.beginPath()
  cxt.arc(circle.startx, circle.starty, circle.r, 0, 2 * Math.PI)
  cxt.closePath()
  cxt.fill();
  return circle;
}
Infinity(){
  requestAnimationFrame(this.Infinity);
  let ctx = this.refs.canvas.getContext('2d');
  let width = parseInt(this.refs.canvas.getAttribute('width'))
  let height = parseInt(this.refs.canvas.getAttribute('height'))
  ctx.clearRect(0, 0, width, height);
  for (let z = 0; z < pointArray.length; z++) {
    const data = pointArray[z];
    let dx = data.x - data.startx;
    let dy = data.y - data.starty;
    let angle = Math.atan2(dy, dx);
    data.startx += data.moveX * Math.cos(angle);
    data.starty += data.moveY * Math.sin(angle);
    if (Math.abs(data.startx-data.x)<=30&&Math.abs(data.starty-data.y)<=30) {
      data.startx = data.x;
      data.starty = data.y;
    }
    this.drawCricle(ctx,data.startx,data.starty,data.x,data.y,data.r);
  }
}

render() {
  return (
    <div className={style.CanvasBox}>
      <input type="text" className={style.TextBox} onChange={this.HandleInputChange}/>
      <canvas ref={'canvas'}></canvas>
    </div>
   )
   }
}
export default CanvasBox