import React from 'react';
import enzymeConfig from 'testConfig/enzymeConfig';
import { shallow, mount } from 'enzyme';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import mockStore from 'redux-mock-store';
import { initRecipes, newRecipe, deleteRecipe, editRecipe } from 'actions/recipeActions';

import Main from 'containers/Main/Main';
import App from 'components/App/App';

describe('<Main />',() => {
    const initialState = {
        recipes: [{}]
    };
    const mockStore = configureStore(/*middlewares*/);
    let store, container;

    beforeEach(() => {
      store = mockStore(initialState);
      container = shallow(<Main store={store} />);
    });

    it('render Main component', () => {
      expect(container.length).toEqual(1);
    });

    it('check action on dispatching ', () => {
        let action;
        store.dispatch(initRecipes([{}, {}, {}]));
        store.dispatch(newRecipe([{}, {}, {}]));
        store.dispatch(deleteRecipe(5));
        store.dispatch(editRecipe(5, {}));

        action = store.getActions();
        expect(action[0].type).toBe('INIT_RECIPES');
        expect(action[1].type).toBe('NEW_RECIPE');
        expect(action[2].type).toBe('DELETE_RECIPE');
        expect(action[3].type).toBe('EDIT_RECIPE');
    });

    it('testing structure of the component', () => {
      expect(container).toMatchSnapshot();
    })

});
