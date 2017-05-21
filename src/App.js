import React, { Component } from 'react';
import {HashRouter as Router, Route, BrowserRouter } from 'react-router-dom';

import Page1 from './components/Page1';
import Page2 from './components/Page2';
import Page3 from './components/Page3';
import Subpage from './components/Subpage';

class App extends Component {
  render() {
    return (
        <div>
            <Router history={BrowserRouter}>
                <div>
                    <Route exact path="/" component={Page1} />
                    <Route path="/page2" component={Page2} />
                    <Route path="/page3" component={Page3} />
                    <Route path="/subpage/:id/:name" component={Subpage} />
                </div>
            </Router>
        </div>
    );
  }
}

export default App;
