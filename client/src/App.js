import React, { Component } from 'react';
import './App.css';
import MainPage from './components/MainPage';
import Page from './components/Page';
import {BrowserRouter,Route} from 'react-router-dom';
import Booking from './components/Booking';
import Info from './components/Info';
import AdminLogin from './components/AdminLogin';
import AdminManager from './components/AdminManager';
import AdminUpdate from './components/AdminUpdate';
import TourUpdate from './components/TourUpdate';
import AddTourGuide from './components/AddTourGuide';
import JobDetail from './components/JobDetail';
import WorkDetail from './components/WorkDetail';
import CheckTour from './components/CheckTour';

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
          
          <Route path="/booking/:id" render={({match}) =>{
            return <Booking id={match.params.id} />
          }} />

          <Route path="/info" render={(props) =>{
            return <Info />
          }} />

          <Route path="/admin-login" render={(props) =>{
            return <AdminLogin />
          }} />

          <Route path="/admin-manager" render={(props) =>{
            return <AdminManager />
          }} />

          <Route path="/admin-update/:id" render={({match}) =>{
            return <AdminUpdate id={match.params.id}/>
          }} />

          <Route path="/tour-update/:id" render={({match}) =>{
            return <TourUpdate id={match.params.id}/>
          }} />

          <Route path="/add-tour-guide/:id" render={({match}) =>{
            return <AddTourGuide id={match.params.id}/>
          }} />

          <Route path="/job-detail/:id" render={({match}) =>{
            return <JobDetail id={match.params.id}/>
          }} />

          <Route path="/work-detail/:id" render={({match}) =>{
            return <WorkDetail id={match.params.id}/>
          }} />

          <Route path="/checkTour/:id" render={({match}) =>{
            return <CheckTour id={match.params.id}/>
          }} />
          
        </div>
      </BrowserRouter>
      
    );
  }
}

export default App;
