import React from 'react';
import PropTypes from 'prop-types';

import AvatarCreator from 'components/shared/AvatarCreator/AvatarCreator';

export default class NewRecipe extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      title: this.props.title ? this.props.title : '',
      desc: this.props.desc ? this.props.desc : '',
      ingredients: this.props.ingredients ? this.props.ingredients.join('/') : '',
      procedure: this.props.procedure ? this.props.procedure.join('/') : '',
      avatarURL: this.props.avatarURL ? this.props.avatarURL : ''
    };

    this.inputMessage = '';
  }

  //handle input of simple data types
  handleChange = (event) => {
    this.inputMessage = '';
    const target = event.target;
    const name = target.name;
    let value = target.value;

    this.setState({
      [name]: value
    });
  }

  //check if input is in correct format -> return true, else false
  checkInput = (data) => {

    const pattern = /[^a-zA-Z0-9,\.\-\/:\(\)]+/;

    if (data.length === 0 || pattern.test(data))
      return false;

    return true;
  }

  handleSubmit = (event) => {
    event.preventDefault();

    let wrongInputs = [];
    for (const key of Object.keys(this.state)) {
      if(!this.checkInput(this.state[key])) {
          if (key !== 'avatarURL')
            wrongInputs.push(key);
      }
    }

    if (wrongInputs.length === 0) {
      const newRecipe = {
        ...this.state,
        procedure: this.state.procedure.trim().split(/[/]+/),
        ingredients: this.state.ingredients.trim().split(/[/]+/),
        likes: 0,
        dislikes: 0
      }

      this.props.handleRecipe(newRecipe);
      this.inputMessage = 'Success!';

      this.setState({
        title: '',
        desc: '',
        procedure: '',
        ingredients: ''
      });
    }else {

      const errorLabel = {
        title: 'title',
        desc: 'description',
        ingredients: 'ingredients',
        procedure: 'procedure'
      };

      wrongInputs = wrongInputs.map((input) => errorLabel[input]);

      this.inputMessage = `Wrong inputs: ${wrongInputs} (Empty string or forbidden character)`;
      this.forceUpdate();
    }
  }

  toggleForm = () => {
    this.props.toggleNewRecipeForm();
  }

  setAvatarURL = (avatarURL) => {
    this.setState({
      avatarURL: avatarURL
    });
  }

  render() {
    return(
      <div>
        <form method="get" onSubmit={this.handleSubmit}>
          <label>Title</label>
          <input type="text" name="title" placeholder='enter title'
            onChange={this.handleChange} value={this.state.title}
          />
          <label>Description</label>
          <input type="text" name="desc" placeholder='enter description'
            onChange={this.handleChange}
            value={this.state.desc}
          />
          <label>Ingredients</label>
          <textarea type="text" name="ingredients" placeholder='enter ingredients (separating with new line)'
            onChange={this.handleChange}
            value={this.state.ingredients}
          >
          </textarea>
          <label>Procedure</label>
          <textarea type="text" name="procedure" placeholder='enter procedure (separating with new line)'
            onChange={this.handleChange}
            value={this.state.procedure}
          >
          </textarea>
          <AvatarCreator setAvatarURL={this.setAvatarURL}/>
          <p>{this.inputMessage}</p>
          <div>
            <button type="submit">Submit</button>
            <button onClick={this.toggleForm}>Cancel</button>
          </div>
        </form>
      </div>
    );
  }
}

NewRecipe.propTypes = {
  handleRecipe: PropTypes.func,
  toggleNewRecipeForm: PropTypes.func
};
