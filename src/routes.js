import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Main from './pages/Main';
import Table from './pages/table';
import Cancel from './pages/Cancelar';

export default function Routes() {

    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Main} />
                <Route path="/Tabela" component={Table} />
                <Route path="/Cancelar" component={Cancel} />
            </Switch>
        </BrowserRouter>
    )
}
