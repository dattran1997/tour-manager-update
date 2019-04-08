import React, { Component } from 'react';
import './App.css';
import MainPage from './components/MainPage';
import Page from './components/Page';
import {BrowserRouter,Route} from 'react-router-dom';
import Booking from './components/Booking';
import Info from './components/Info';
import AdminLogin from './components/AdminLogin';
import AdminManager from './components/AdminManager';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Route exact path="/" render={(props) =>{
            return <MainPage />
          }} />

          <Route path="/page" render={(props) =>{
            return <Page />
          }} />
          
          <Route path="/booking" render={(props) =>{
            return <Booking />
          }} />

          <Route path="/info" render={(props) =>{
            return <Info />
          }} />

          <Route path="/admin-login" render={(props) =>{
            return <AdminLogin />
          }} />

          <Route path="/admin-manager/:id" render={({match}) =>{
            return <AdminManager id={match.params.id}/>
          }} />
          
        </div>
      </BrowserRouter>
      
    );
  }
}

export default App;
