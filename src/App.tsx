import React from 'react';
import { Switch, Route } from 'react-router-dom';
import routes from './routes';
import { withSplash } from './components';

function App() {
  return (
    <div className="App">
      <Switch>
        {
          routes.map(route => <Route {...route} />)
        }
      </Switch>
    </div>
  );
}

export default withSplash(App);
