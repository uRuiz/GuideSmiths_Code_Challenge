import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import { PhoneDetail } from '../components/Phones/PhoneDetail';
import { Home } from '../pages/Home/Home';
import { PhonesContextProvider } from '../context/PhonesContext';
import { Navbar } from '../pages/Navbar/Navbar';

export const AppRouter = () => {
  return (
    <Router>
      <Navbar/>
      <div className="container">
        <PhonesContextProvider>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/phone/id=:id" component={PhoneDetail} />
            

            <Redirect to="/" />
          </Switch>
        </PhonesContextProvider>
      </div>
    </Router>
  )
}
