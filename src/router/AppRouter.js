import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from "react-router-dom";
import { PhoneScreen } from '../components/phones/PhoneScreen';
import { PhonesList } from '../components/phones/PhonesList';

export const AppRouter = () => {
    return (
        <Router>
            <div className="container">
                <Switch>
                    <Route exact path="/" component={ PhonesList } />
                    <Route exact path="/:phoneId" component={ PhoneScreen } /> 

                    <Redirect to="/" />
                </Switch>    
            </div>
        </Router>
    )
}
