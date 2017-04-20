import React, {Component} from 'react'
import Product from 'Index/Product'
let style;

class Out extends Component {
  render() {
    return (
      <div style={style.container}>
        <Product right image="bag.jpg"></Product>
        <Product right image="estuche.jpg"></Product>
        <Product right image="hat.jpg"></Product>
        <Product image="bigbag.jpeg"></Product>
        <Product left image="minibag.jpg"></Product>
      </div>
    );
  }
}

export default Out;

style = {
  container: {
    maxWidth: '1000px',
    marginLeft: '50%',
    transform: 'translateX(-50%)'
  }
}
