import React from 'react';
import enzymeConfig from 'testConfig/enzymeConfig';
import { shallow, mount } from 'enzyme';


import RecipeList from 'components/RecipeList/RecipeList';

describe('<RecipeList />', () => {
  it('Check component if there is no recipe', () => {
    const component = shallow(
      <RecipeList
        handleEditRecipe={() => {}}
        handleRemoveRecipe={() => {}}
      />
    );

    const items = component.find('li');
    expect(items.length).toBe(0);
    expect(component).toMatchSnapshot();
  });

  it('Check if rendering recipes works correctly', () => {
    const recipes = [
      {
        id: 1,
        title : "Spaghetti",
        desc : "Preparation time: 30min, Difficulty: 3/5",
        ingredients : ["one", "two", "three", "four", "five"],
        procedure: ["step_one", "step_two", "step_three", "step_four", "step_five"],
        avatarURL: '',
        likes : 4,
        dislikes : 4
      },
      {
        id: 2,
        title : "Tomato soup",
        desc : "Preparation time: 20min, Difficulty: 2/5",
        ingredients : ["one", "two", "three", "four", "five"],
        procedure: ["step_one", "step_two", "step_three", "step_four", "step_five"],
        avatarURL: '',
        likes : 5,
        dislikes : 5
      }
    ];

    const component = shallow(
      <RecipeList
        filterText=""
        recipes={recipes}
        handleEditRecipe={() => {}}
        handleRemoveRecipe={() => {}}
      />
    );

    const items = component.find('li');
    expect(items.length).toBe(recipes.length);
    expect(component).toMatchSnapshot();
  });

  it('Check if filtering list of recipes works correctly', () => {
    const recipes = [
      {
        id: 1,
        title : "Spaghetti",
        desc : "Preparation time: 30min, Difficulty: 3/5",
        ingredients : ["one", "two", "three", "four", "five"],
        procedure: ["step_one", "step_two", "step_three", "step_four", "step_five"],
        avatarURL: '',
        likes : 4,
        dislikes : 4
      },
      {
        id: 2,
        title : "Tomato soup",
        desc : "Preparation time: 20min, Difficulty: 2/5",
        ingredients : ["one", "two", "three", "four", "five"],
        procedure: ["step_one", "step_two", "step_three", "step_four", "step_five"],
        avatarURL: '',
        likes : 5,
        dislikes : 5
      }
    ];

    const component = shallow(
      <RecipeList
        filterText="Tomato soup"
        recipes={recipes}
        handleEditRecipe={() => {}}
        handleRemoveRecipe={() => {}}
      />
    );

    const items = component.find('li');
    expect(items.length).toBe(1);
    expect(component).toMatchSnapshot();
  });
});
