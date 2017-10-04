import React from 'react';
import enzymeConfig from 'testConfig/enzymeConfig';
import { shallow } from 'enzyme';

import Header from 'components/Header/Header';

describe('<Header />', () => {
  it('Testing structure of the Header component', () => {
    const component = shallow(<Header />);

    expect(component).toMatchSnapshot();
  });
});
