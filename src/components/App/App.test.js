import React from 'react';
import enzymeConfig from 'testConfig/enzymeConfig';
import { shallow } from 'enzyme';

import App from 'components/App/App';

describe('<App />', () => {
  it('Testing structure of the App component', () => {
    const component = shallow(<App />);

    expect(component).toMatchSnapshot();
  });
});
