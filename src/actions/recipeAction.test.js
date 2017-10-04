import { initRecipes, newRecipe, deleteRecipe, editRecipe } from 'actions/recipeActions';


describe('Testing recipes actions', () => {

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

  it('Testing action initRecipes', () => {
    const initR = initRecipes(recipesMock);

    expect(initR).toEqual({type: 'INIT_RECIPES', payload: recipesMock})
  });

  it('Testing action newRecipes', () => {
    const newR = newRecipe(recipesMock[0]);

    expect(newR).toEqual({type: 'NEW_RECIPE', payload: recipesMock[0]})
  });

  it('Testing action deleteRecipe', () => {
    const delR = deleteRecipe(recipesMock[1].id);

    expect(delR).toEqual({type: 'DELETE_RECIPE', payload: recipesMock[1].id})
  });

  it('Testing action editRecipe', () => {
    const editR = editRecipe(recipesMock[1].id, recipesMock[1]);

    expect(editR).toEqual({type: 'EDIT_RECIPE', payload: { index: recipesMock[1].id, data: recipesMock[1]}})
  });
})
