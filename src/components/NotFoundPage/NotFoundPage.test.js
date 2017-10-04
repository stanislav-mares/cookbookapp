import React from 'react';
import enzymeConfig from 'testConfig/enzymeConfig';
import { shallow } from 'enzyme';

import NotFoundPage from 'components/NotFoundPage/NotFoundPage';

describe('<NotFoundPage />', () => {
  it('Testing structure of the NoutFoundPage component', () => {
    const component = shallow(<NotFoundPage />);

    expect(component).toMatchSnapshot();
  });
});
