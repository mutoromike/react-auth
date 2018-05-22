import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import AuthProvider from './Components/AuthContext';
// import Landing from './Components/Landing';
import Dashboard from './Components/Dashboard';
import ProtectedRoute from './Components/ProtectedRoute';

class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <AuthProvider>
            <Header />
            <Switch>
              
              {/* <Route path="/" component={ Landing } /> */}
              <ProtectedRoute path="/dashboard" component={Dashboard} />
            </Switch>
          </AuthProvider>
        </Router>
  </div>
    );
  }
}

export default App;
