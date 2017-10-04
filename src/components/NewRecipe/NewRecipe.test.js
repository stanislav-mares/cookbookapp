import React from 'react';
import enzymeConfig from 'testConfig/enzymeConfig';
import { shallow } from 'enzyme';

import NewRecipe from 'components/NewRecipe/NewRecipe';

describe('<NewRecipe />', () => {
  it('Testing if handleChange method setting state correctly', () => {
    const component = shallow(<NewRecipe />);
    const instance =  component.instance();

    const inputs = component.findWhere(node => {
      node.type() === 'input' || node.type() === 'textarea';
    });

    inputs.forEach((node, index) => {
        node.simulate('change', {target:{name:node.props().name, value:'abcd'}});
        expect(instance.state[node.props().name]).toBe('abcd');
    });
  });

  it('Testing checkInput method if works correctly', () => {
      const component = shallow(<NewRecipe />);
      const instance = component.instance();

      const correctChars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ123456789.-:()';
      const wrongChars = ['@', '#', '$', '%', '^', '&', '*', '_', '+',
                         '{', '}', '|', '?', '>', '<', '[', ']','"'];

      expect(instance.checkInput(correctChars)).toBe(true);
      wrongChars.forEach((item, i) => {
          expect(instance.checkInput(item)).toBe(false);
      });
  });

  it('Testing structure of the NewRecipe component', () => {
    const component = shallow(<NewRecipe />);

    expect(component).toMatchSnapshot();
  });
});
