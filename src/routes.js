import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Main from './pages/Main';
import Comic from './pages/Comic';

export default function Routes() {
  return (
      <Switch>
        <Route path="/" exact component={Main} />
        <Route path="/comic/:id" exacl component={Comic} />
      </Switch>
  )
}
