import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import jwt_decode from 'jwt-decode';
import setAuthToken from './utils/setAuthToken';
//import 'bootstrap/dist/css/bootstrap.min.css';
//import { setCurrentUser } from './actions/authActions';
//import { logoutUser } from './actions/authActions';
// import { clearCurrentClassroom } from './actions/classroomAction';


import { Provider } from 'react-redux';
import store from './store';

//import PrivateRoute from './components/common/PrivateRoute';


//import components
import Navbar from './components/Layout/Navbar';
import Footer from './components/Layout/Footer';
import Landing from './components/Layout/Landing';

// import Login from './components/auth/Login';

import CreatToDo from './components/createtodo/CreateToDo';
// import CreateForm from './components/createform/CreateToDo';
import Dashbord from './components/dashboard/Dashboard';




import './App.css';

// Check for token




function App() {
  return (
    <Provider store={ store }>
      <Router>
        <div className="App">
          <Navbar/>
          {/* <h1>hello front end is start </h1> */}
          <Route exact path="/" component={Landing}/>
          <Switch>
            <Route exact path="/CreateToDo" component={CreatToDo}/>
          </Switch>
          <Switch>
            <Route exact path="/dashboard" component={Dashbord}/>
          </Switch>
          
         
        <Footer/>
        </div>
      </Router>
    </Provider>
  ); 
}

export default App;