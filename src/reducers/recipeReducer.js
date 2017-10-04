const recipeReducer = (state = {
    recipes: []
}, action) => {
  switch(action.type) {
    case 'INIT_RECIPES':
      state = {
          recipes: [ ...state.recipes, ...action.payload ]
      };
      break;
    case 'NEW_RECIPE':
      state = {
          recipes: [ ...state.recipes, action.payload ]
      };
      break;
    case 'DELETE_RECIPE':
      const deletedRecipes = [ ...state.recipes ];
      deletedRecipes.splice(action.payload.index-1, 1);

      state = {
        recipes: deletedRecipes
      };
      break;
    case 'EDIT_RECIPE':
      const editedRecipes = [ ...state.recipes ];

      editedRecipes[action.payload.index-1] = {
        ...editedRecipes[action.payload.index-1],
        ...action.payload.data
      };

      state = {
        recipes: editedRecipes
      };
      break;
  }
  return state;
};

export default recipeReducer;
