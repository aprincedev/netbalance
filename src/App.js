import React from 'react'
import Header from './components/header/Header'
import RebalanceForm from './components/rebalanceform/RebalanceForm'
import ErrorMsg from './components/errormsg/ErrorMsg' /*eventually will be imported in main content component*/
import Footer from './components/footer/Footer'
import About from './routes/about/About'

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <div>
      <Router>
      <Header />
      <Switch>
      <Route path="/" exact component={RebalanceForm} />
      <Route path="/about" component={About} />
      </Switch>
      <Footer />
      </Router>
    </div>
  );
}

export default App;
