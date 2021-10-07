import React from "react";
import { Route, Switch } from "react-router-dom";

import Home from './Home';

const Page = () => (
    <div className="page-content">
        <Switch>
        <Route exact path="/">
            <Home />
        </Route>
        </Switch>
    </div>
);

export default Page;