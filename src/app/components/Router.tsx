import React, { Suspense, lazy } from 'react';
import { HashRouter, Route, Switch } from "react-router-dom";

const PaymentForm = lazy(() => import('./PaymentForm'));
const Eror404 = lazy(() => import('./Page404'));

const Router = () => {
    return <HashRouter>
        <Suspense fallback={<div>Loading...</div>}>
            <Switch>
                <Route exact path="/" component={PaymentForm}/>
                <Route path="/404"component={Eror404}/>
            </Switch>
        </Suspense>
    </HashRouter>
}

export default Router