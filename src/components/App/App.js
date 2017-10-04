import React from 'react';
import PropTypes from 'prop-types';

//components
import Header from 'components/Header/Header';
import Main from 'containers/Main/Main';

const App = (props) => {
  return(
    <div>
      <Header />
      <Main />
    </div>
  );
}

App.propTypes = {

};

export default App;
