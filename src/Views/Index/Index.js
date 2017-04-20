import React, {Component} from 'react'
import Layout from 'Layout/Layout'
import Product from 'Index/Product'
let style;

class Index extends Component {
  render() {
    return (
      <Layout>
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
      </Layout>
    );
  }
}

export default Index;
