import React, { Component, Fragment } from 'react';

import './style.css'

class Hexagon extends Component {
  render(){
    return(
      <path id="tmp" className="hexagon" d={"M" + (this.props.width/2) + "," + (this.props.height/2) + this.props.path} />
    )
  }
}

class HexagonWrapper extends Component {
  render(){
    return(
      <g transform={'translate(' + (this.props.width) + "," + (this.props.height) + ")"} style={{filter:'url(#gooeyCodeFilter)'}}>
          {this.props.children}
      </g>
    )
  }
}
const SQRT3 = Math.sqrt(3);
class Main extends Component {
  constructor(props) {
    super(props);
 
    
    this.state = {
      circleDate: [],
      hexRadius: 0,
      hexWidth: 0,
      hexHeight: 0,
      hexagonPoly: 0
    }
  }
  componentDidMount () {
    this.calculateBorder();

  }
  calculateBorder () {
    let hexRadius = Math.min(this.props.width, this.props.height)/2;
    let hexWidth = SQRT3 * hexRadius;
    let hexHeight = 2 * hexRadius;
    let hexagonPoly = [[0,-1],[SQRT3/2,0.5],[0,1],[-SQRT3/2,0.5],[-SQRT3/2,-0.5],[0,-1],[SQRT3/2,-0.5]];
		let hexagonPath = "m" + hexagonPoly.map(function(p){
       return [p[0]*hexRadius, p[1]*hexRadius].join(',');
    }, this).join('l') + "z";
    this.setState({
      hexRadius,
      hexWidth,
      hexagonPoly,
      hexagonPath
    })
  }
  render (){
    return (
      <div style={{
        position: 'relative',
        width: this.props.width,
        height: this.props.height
      }}>
        <div style={{
           position: 'absolute',
           zIndex: -1,
          //  top: '50%',
          //  left: '50%',
           height: '100%',
           width: '100%',
           display: 'flex',
           alignItems: 'center',
           justifyContent: 'center'
          //  backgroundColor: 'inherit'
        }}>
          {this.props.children}
        </div>
        <svg id="my-svg" width={this.props.width} height={this.props.height + 12} style={{ zIndex: 10 }}>
          
          <g clipPath='url(#clip)' transform="translate(0,10)">
            <Hexagon path={this.state.hexagonPath} height={this.props.height} width={this.props.width} />
            <HexagonWrapper width={this.props.width/2} height={this.props.height/2}>
              
            </HexagonWrapper>
        </g>
      
      </svg>
    </div>
    )
  }
}

export default Main;