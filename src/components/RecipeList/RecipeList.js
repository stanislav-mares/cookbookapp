import React from 'react';
import PropTypes from 'prop-types';

//components
import Recipe from 'components/Recipe/Recipe';

const RecipeList = (props) => {

  //mapp recipe list based on user input
  let filteredRecipes = [];

  (props.recipes ? props.recipes: []).forEach((recipe, i) => {
    if (recipe.title.toLowerCase().search(props.filterText.toLowerCase()) === -1) {
      return;
    }

    filteredRecipes.push(
      <li key={i}>
        <Recipe
          {...recipe}
          handleEditRecipe={props.handleEditRecipe}
          handleRemoveRecipe={props.handleRemoveRecipe}
        />
      </li>
    );
  });

  return(
    <div>
      <ul>
        {filteredRecipes.length > 0 ? filteredRecipes : 'No recipes'}
      </ul>
    </div>
  );
}

RecipeList.propTypes = {
  recipes: PropTypes.arrayOf(PropTypes.shape({
     id: PropTypes.number,
     title : PropTypes.string,
     desc : PropTypes.string,
     ingredients : PropTypes.arrayOf(PropTypes.string),
     procedure: PropTypes.arrayOf(PropTypes.string),
     avatarURL: PropTypes.string,
     likes : PropTypes.number,
     dislikes : PropTypes.number
  })),
  filterText: PropTypes.string,
  handleEditRecipe: PropTypes.func,
  handleRemoveRecipe: PropTypes.func
};

export default RecipeList;
