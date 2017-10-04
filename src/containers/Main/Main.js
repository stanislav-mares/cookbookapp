import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import axios from 'axios';

//components
import SearchBar from 'components/SearchBar/SearchBar';
import RecipeList from 'components/RecipeList/RecipeList';
import NewRecipe from 'components/NewRecipe/NewRecipe';

//actions
import { initRecipes } from 'actions/recipeActions';
import { newRecipe } from 'actions/recipeActions';
import { deleteRecipe } from 'actions/recipeActions';
import { editRecipe } from 'actions/recipeActions';

export class Main extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      searchBarValue: '',
      newRecipeFormShow: false,
      mockServer: 'http://private-e4bea4-cookbookapi.apiary-mock.com'
    }
  }

  componentDidMount() {
    axios.get(`${this.state.mockServer}/recipes`)
      .then((response) => {
        this.props.initRecipes(response.data);
      })
      .catch((error) => {
        console.log(error);
        this.props.initRecipes([]);
      });
  }

  handleSearchBarChange = (event) => {
    this.setState({
      searchBarValue: event.target.value
    });
  }

  toggleNewRecipeForm = () => {
    this.setState({
      newRecipeFormShow: !this.state.newRecipeFormShow
    });
  }

  //changing specific recipe after user edit
  handleEditRecipe = (index, data) => {
    this.props.editRecipe(index, data)
  }

  handleNewRecipe = (newRecipe) => {
    newRecipe["id"] = this.props.recipeReducer.recipes.length + 1
    this.props.newRecipe(newRecipe);
  }

  handleRemoveRecipe = (index) => {
    this.props.deleteRecipe(index);
  }

  render() {
    return(
      <main>
        <SearchBar
          handleChange={this.handleSearchBarChange}
          value={this.state.searchBarValue}
          toggleNewRecipeForm={this.toggleNewRecipeForm}
        />
        <NewRecipe
          toggleNewRecipeForm={this.toggleNewRecipeForm}
          show={this.state.newRecipeFormShow}
          handleRecipe={this.handleNewRecipe}
        />
        <RecipeList
          recipes={this.props.recipeReducer.recipes}
          filterText={this.state.searchBarValue}
          handleEditRecipe={this.handleEditRecipe}
          handleRemoveRecipe={this.handleRemoveRecipe}
        />
      </main>
    );
  }
}

Main.propTypes = {

};

//redux
const mapStateToProps = (state) => {
  return {
      recipeReducer: state.recipeReducer,
  };
};

const mapDispatchToProps = (dispatch) => {
    return {
      initRecipes : (recipes) => {
        dispatch(initRecipes(recipes))
      },
      newRecipe : (recipe) => {
        dispatch(newRecipe(recipe));
      },
      deleteRecipe : (index) => {
        dispatch(deleteRecipe({index}));
      },
      editRecipe : (index, data) => {
        dispatch(editRecipe(index, data));
      }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Main)
