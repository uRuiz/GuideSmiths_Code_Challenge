import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from "react-router-dom";
import { PhoneDetail } from '../components/Phones/PhoneDetail';
import { PhonesList } from '../components/Phones/PhonesList';

export const AppRouter = () => {
    return (
        <Router>
            <div className="container">
                <Switch>
                    <Route exact path="/" component={ PhonesList } />
                    <Route exact path="/phone/id=:phoneId" component={ PhoneDetail } /> 

                    <Redirect to="/" />
                </Switch>    
            </div>
        </Router>
    )
}
