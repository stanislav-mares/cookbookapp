import React from 'react';
import PropTypes from 'prop-types';

//images
import logo from 'images/cookHat4.png'

const Header = (props) => {
  return(
    <header>
      <div>
        <img src={logo} width="50px" height="50px" />
        <span>Cookbook application</span>
      </div>
    </header>
  );
}

Header.propTypes = {

};

export default Header;
