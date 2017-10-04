import React from 'react';
import { Route, Switch } from 'react-router-dom';

//components
import App from 'components/App/App';
import NotFoundPage from 'components/NotFoundPage/NotFoundPage';

const Routes = (props) => {
  return(
    <Switch>
      <Route exact path='/' component={App} />
      <Route path='/' component={NotFoundPage} />
    </Switch>
  );
}

Routes.propTypes = {

};

export default Routes;
