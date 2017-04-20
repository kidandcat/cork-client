import React, {Component} from 'react';
import anime from 'animejs';
import {uid} from 'helpers';
let style;

class Out extends Component {
  constructor(){
    super();
    this.id = uid();
  }

  zoomIn = () => {
    this.anim ? this.anim.pause():null;
    this.anim = anime({
      targets: '#' + this.id,
      scale: 1.8,
      rotate: this.props.right?5:this.props.left?-5:0,
      duration: 2000,
      direction: 'normal'
    });
  }

  zoomOut = () => {
    this.anim ? this.anim.pause():null;
    this.anim = anime({
      targets: '#' + this.id,
      scale: 1,
      rotate: 0,
      duration: 2000,
      direction: 'normal'
    });
  }

  render() {
    return (
      <div id={this.id} style={style.product} onMouseEnter={this.zoomIn} onMouseLeave={this.zoomOut}>
        <img src={"/static/products/" + this.props.image} style={style.image}/>
      </div>
    );
  }
}

export default Out;

style = {
  product: {
    //border: '1px solid blue',
    width: '200px',
    margin: '50px',
    display: 'inline-block'
  },
  image: {
    maxWidth: '190px'
  }
}
