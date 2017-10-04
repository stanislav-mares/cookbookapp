import React from 'react';
import enzymeConfig from 'testConfig/enzymeConfig';
import { shallow } from 'enzyme';

import Recipe from 'components/Recipe/Recipe';

describe('<Recipe />', () => {
  it('testing if likes and dislikes increments after press respectively button', () => {
    const recipe = {
      id: 1,
      title : "Spaghetti",
      desc : "Preparation time: 30min, Difficulty: 3/5",
      ingredients : ["one", "two", "three", "four", "five"],
      procedure: ["step_one", "step_two", "step_three", "step_four", "step_five"],
      avatarURL: '',
      likes : 0,
      dislikes : 0
    };

    const component = shallow(
      <Recipe
        { ...recipe }
        handleEditRecipe={() => {}}
        handleRemoveRecipe={() => {}}
      />
    );
    const instance = component.instance()

    const likesBtn = component.find('img[name="likes"]');
    const dislikesBtn = component.find('img[name="dislikes"]');

    likesBtn.simulate('click', {target:{name:'likes'}});
    likesBtn.simulate('click', {target:{name:'likes'}});
    likesBtn.simulate('click', {target:{name:'likes'}});

    dislikesBtn.simulate('click', {target:{name:'dislikes'}});
    dislikesBtn.simulate('click', {target:{name:'dislikes'}});

    expect(instance.likes).toBe(3);
    expect(instance.dislikes).toBe(2);
  });

  it('testing handleLikesDislikes method of Recipe component', () => {
    const recipe = {
      id: 1,
      title : "Spaghetti",
      desc : "Preparation time: 30min, Difficulty: 3/5",
      ingredients : ["one", "two", "three", "four", "five"],
      procedure: ["step_one", "step_two", "step_three", "step_four", "step_five"],
      avatarURL: '',
      likes : 4,
      dislikes : 4
    };

    const component = shallow(
      <Recipe
        { ...recipe }
        handleEditRecipe={() => {}}
        handleRemoveRecipe={() => {}}
      />
    );

    expect(component).toMatchSnapshot();
  });
});
