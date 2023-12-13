import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NavHeader from './Components/Navbar';
import Home from './Components/Home';
import Login from './Components/Login';
import Register from './Components/Register';
import Feedback from './Components/Feedback';
import Delete from './Components/Delete';
import GeoConnect from './Components/GeoConnect';
 import 'bootstrap/dist/css/bootstrap.min.css';
require('dotenv').config();

const App = () => {
  return (
    <Router>
      <NavHeader />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/feedback" component={Feedback} />
        <Route path="/deleteuser" component={Delete} />
        <Route path="/GeoConnect" component={GeoConnect} />
       </Switch>
    </Router>
  );
};

export default App;
