import React from 'react';
import PropTypes from 'prop-types';

export default class SearchBar extends React.Component {

  constructor(props) {
    super(props);
  }

  handleChange = (event) => {
    this.props.handleChange(event);
  }

  handleClick = (event) => {
    this.props.toggleNewRecipeForm();
  }

  render() {
    return(
      <div>
        <input
          onChange={this.handleChange} value={this.props.value}
          type="text" name="searchBar" placeholder="Look for a recipe..."
        />
        <button onClick={this.handleClick}>+</button>
      </div>
    );
  }
}

SearchBar.propTypes = {
  handleChange : PropTypes.func.isRequired,
  value : PropTypes.string,
  toggleNewRecipeForm: PropTypes.func.isRequired
};
