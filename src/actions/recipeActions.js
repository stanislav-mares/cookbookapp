export const initRecipes = (recipes) => {
  return {
    type: 'INIT_RECIPES',
    payload: recipes
  };
}

export const newRecipe = (recipe) => {
  return {
    type: 'NEW_RECIPE',
    payload: recipe
  };
}

export const deleteRecipe = (index) => {
  return {
    type: 'DELETE_RECIPE',
    payload: index
  };
}

export const editRecipe = (index, data) => {
  return {
    type: 'EDIT_RECIPE',
    payload: {
      index,
      data
    }
  };
}
