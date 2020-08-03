import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from "react-router-dom";
import { PhoneDetail } from '../components/phones/PhoneDetail';
import { PhonesList } from '../components/phones/PhonesList';

export const AppRouter = () => {
    return (
        <Router>
            <div className="container">
                <Switch>
                    <Route exact path="/" component={ PhonesList } />
                    <Route exact path="/phone/:phoneId" component={ PhoneDetail } /> 

                    <Redirect to="/" />
                </Switch>    
            </div>
        </Router>
    )
}
