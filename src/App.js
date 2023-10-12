import React from 'react';
import { HomePage } from './containers/HomePage';
import './App.css';
import {BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { AboutPage } from './containers/aboutPage';
import { VehiclePage } from './containers/vehiclePage';
import { BookNowPage } from './containers/bookNowPage';
import { ServicePage } from './containers/servicePage';
import { ContactPage } from './containers/contactPage';
import { CustomerAccessPage } from './containers/customerAccessPage';
import { ResetPage } from './containers/resetPage';
import { TermsPage } from './containers/termsPage';
import { ModalPage } from './containers/modalPage';


function App() {
  return (
    <div className="App">
     <Router>
       <Routes>
       <Route path = "/" exact element = {<HomePage />} />
       <Route path = "/about" exact element = {<AboutPage />} />
       <Route path="/customer/access/signin" exact element = {<CustomerAccessPage/>}/>
       <Route path = "/vehicle" exact element = {<VehiclePage />} />
       <Route path = "/booknow" exact element = {<BookNowPage/>} />
       <Route path = "/service" exact element = {<ServicePage/>} />
       <Route path = "/contact" exact element = {<ContactPage/>} />
       <Route path = "/reset" exact element = {<ResetPage/>} />
       <Route path = "/terms" exact element = {<TermsPage/>} />
       <Route path = "/modal" exact element = {<ModalPage/>} />
      </Routes>
        </Router>
    </div>
  );
}

export default App;

