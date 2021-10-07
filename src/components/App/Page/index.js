import React from "react";
import { Route, Switch } from "react-router-dom";

import Home from './Home';
import StartAdventure from './StartAdventure'

const Page = () => (
    <div className="page-content">
        <Switch>
            <Route exact path="/">
                <Home />
            </Route>
            <Route path="/startAdventure">
                <StartAdventure />
            </Route>
        </Switch>
    </div>
);

export default Page;