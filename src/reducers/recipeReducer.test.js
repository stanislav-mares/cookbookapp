import recipeReducer from 'reducers/recipeReducer';

describe('Testing reducer/s',() => {
  const recipesMock = [
    {
      id: 1,
      title : "Spaghetti",
      desc : "Preparation time: 30min, Difficulty: 3/5",
      ingredients : ["one", "two", "three", "four", "five"],
      procedure: ["step_one", "step_two", "step_three", "step_four", "step_five"],
      avatarURL: "",
      likes : 0,
      dislikes : 0
    },
    {
      id: 2,
      title : "Tomato soup",
      desc : "Preparation time: 20min, Difficulty: 2/5",
      ingredients : ["one", "two", "three", "four", "five"],
      procedure: ["step_one", "step_two", "step_three", "step_four", "step_five"],
      avatarURL: "",
      likes : 5,
      dislikes : 5
    }
  ];

  it('Testing reducer for INIT_RECIPES action', () => {
    let state = {recipes: []};
    state = recipeReducer(state, {type:"INIT_RECIPES", payload:recipesMock})
    expect(state).toEqual({recipes:recipesMock})
  });

  it('Testing reducer for NEW_RECIPE action', () => {
      let state = {recipes: recipesMock};
      const newRecipe = {
        id: 3,
        title : "Cheesecake",
        desc : "Preparation-time:50min,Difficulty:4/5",
        ingredients : ["one", "two", "three", "four", "five"],
        procedure: ["step-one", "step-two", "step-three", "step-four", "step-five"],
        avatarURL: "",
        likes : 3,
        dislikes : 3
      };

      state = recipeReducer(state, {type:"NEW_RECIPE", payload: newRecipe});
      expect(state).toEqual({recipes: [ ...recipesMock, newRecipe]})
  });

  it('Testing reducer for DELETE_RECIPE action', () => {
      let state = {recipes: recipesMock};
      const remainingRecipes = [{
        id: 1,
        title : "Spaghetti",
        desc : "Preparation time: 30min, Difficulty: 3/5",
        ingredients : ["one", "two", "three", "four", "five"],
        procedure: ["step_one", "step_two", "step_three", "step_four", "step_five"],
        avatarURL: "",
        likes : 0,
        dislikes : 0
      }];

      state = recipeReducer(state, {type:"DELETE_RECIPE", payload: {index: 2}});
      expect(state).toEqual({recipes: remainingRecipes})
  });

  it('Testing reducer for EDIT_RECIPE action', () => {
      let state = {recipes: recipesMock};
      const editedRecipes = [
        {
          id: 1,
          title : "Spaghetti",
          desc : "Preparation time: 30min, Difficulty: 3/5",
          ingredients : ["one", "two", "three", "four", "five"],
          procedure: ["step_one", "step_two", "step_three", "step_four", "step_five"],
          avatarURL: "",
          likes : 0,
          dislikes : 0
        },
        {
          id: 2,
          title : "Great tomato soup",
          desc : "Preparation time: 20min, Difficulty: 3/5",
          ingredients : ["one", "two", "three", "four", "five", "six"],
          procedure: ["step_one", "step_two", "step_three", "step_four", "step_five", "step_seven"],
          avatarURL: "someURL",
          likes : 15,
          dislikes : 13
        }
      ];

      state = recipeReducer(state, {type:"EDIT_RECIPE", payload: {index: editedRecipes[1].id, data: editedRecipes[1]}});
      expect(state).toEqual({recipes: editedRecipes})
  });

});
