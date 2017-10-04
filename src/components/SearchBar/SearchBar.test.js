import React from 'react';
import enzymeConfig from 'testConfig/enzymeConfig';
import { shallow } from 'enzyme';

import SearchBar from 'components/SearchBar/SearchBar';

describe('<SearchBar />', () => {
  it('Testing structure of the SearchBar component', () => {
    const component = shallow(
      <SearchBar
        handleChange={() => {}}
        toggleNewRecipeForm={() => {}}
      />
    );

    expect(component).toMatchSnapshot();
  });
});
