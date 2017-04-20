import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, browserHistory} from 'react-router';
import Index from 'Index/Index';

ReactDOM.render(
  <Router history={browserHistory}>
  <Route path="*" component={Index}/>
</Router>, document.getElementById('root'));
