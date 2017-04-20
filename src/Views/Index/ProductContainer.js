import React, {Component} from 'react'
import Product from 'Index/Product'
let style;

class Out extends Component {
  render() {
    return (
      <div style={style.container}>
        <Product right="true"></Product>
        <Product></Product>
        <Product></Product>
        <Product></Product>
        <Product></Product>
        <Product></Product>
        <Product></Product>
        <Product></Product>
        <Product></Product>
        <Product></Product>
        <Product></Product>
        <Product></Product>
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
