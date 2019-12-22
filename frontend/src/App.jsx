import { Switch, Route } from 'react-router-dom';
import React, { Suspense } from 'react';
import routes from '$pages';
import '$styles/index.scss';

export default () => (
    <Suspense fallback={<div>Loading...</div>}>
        <Switch>
            {routes.map((route, i) => (
                <Route { ...route } key={i}/>
            ))}
        </Switch>
    </Suspense>
);