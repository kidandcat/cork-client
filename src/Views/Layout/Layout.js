import React, {Component} from 'react';
let style;

class Layout extends Component {

  render() {
    return (
      <div style={style.layout}>
        {this.props.children}
      </div>
    );
  }
}

export default Layout;

style = {
  layout: {
    padding: '3em'
  }
}
