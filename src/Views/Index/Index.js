import React, {Component} from 'react'
import Layout from 'Layout/Layout'
import ProductContainer from 'Index/ProductContainer'

class Index extends Component {
  render() {
    return (
      <Layout>
          <ProductContainer/>
      </Layout>
    );
  }
}

export default Index;
