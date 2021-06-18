import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';

import { Navbar } from '../components/ui/Navbar';
import { EdicionScreen } from '../components/EdicionScreen';
import { BlogScreen } from '../components/blog/BlogScreen';

export const DashboardRoutes = () => {
    return (
        <>
            <Navbar />

            <div>
                <Switch>
                    <Route exact path="/edicion" component= { EdicionScreen } />
                    <Route exact path="/home" component= { BlogScreen } />

                    <Redirect to="/home" />
                </Switch>
            </div>
        </>
    );
};
