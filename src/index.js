import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {StaticRouter, Route, Switch} from 'react-router-dom';

ReactDOM.render(
    <StaticRouter>
      <Switch>
        <Route exact path = "/" component={App} />
      </Switch>
  </StaticRouter>


    ,document.getElementById('root')
);

registerServiceWorker();
