import React, { FC } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { MainPageContainer } from './main-page.container';
import { MoviePageContainer } from './movie-page.container';
import { NotFoundContainer } from '../components/not-found/not-found.component';

export const App: FC = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={MainPageContainer} />
      <Route exact path="/movies/:movieId" component={MoviePageContainer} />
      <Route path="*" component={NotFoundContainer} />
    </Switch>
  </Router>
);
