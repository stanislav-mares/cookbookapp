import React from 'react';
import PropTypes from 'prop-types';

//components
import NewRecipe from 'components/NewRecipe/NewRecipe';

//images
import defaultAvatar from 'images/cookBook.png';
import likeIcon from 'images/likeIcon.png';
import dislikeIcon from 'images/dislikeIcon.png';

export default class Recipe extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      id : this.props.id,
      show: true
    };

    this.likes = 0;
    this.dislikes = 0;
  }

  handleRemove = () => {
    this.props.handleRemoveRecipe(this.state.id);
  }

  handleEditRecipe = (data) => {
    this.props.handleEditRecipe(this.state.id, data);
  }

  handleLikesDislikes = (event) => {

    const name = event.target.name;
    const count = (name === 'likes' ? ++this.likes : ++this.dislikes);

    this.props.handleEditRecipe(this.state.id, {[name] : count})
  }

  render() {

    let ingredients = this.props.ingredients.map((ingredient, key) => {
        return(
          <li key={key}>{ingredient}</li>
        );
    });

    let procedure = this.props.procedure.map((procedure_step, key) => {
        return(
          <p key={key}>{procedure_step}</p>
        );
    });

    return(
      <div>
        <img src={this.props.avatarURL ? this.props.avatarURL : defaultAvatar}
          width="100px" height="100px" alt="Recipe default avatar" />
        <div>
          <h3>{this.props.title}</h3>
          <p>{this.props.desc}</p>
        </div>
        <div>
          <img
            src={likeIcon}
            onClick={this.handleLikesDislikes}
            name="likes" width="15px" height="15px" alt="Like button"
          />
          <span name="likes">{this.props.likes}</span>
          <img
            src={dislikeIcon}
            onClick={this.handleLikesDislikes}
            name="dislikes" width="15px" height="15px" alt="Dislike button"
          />
          <span name="dislikes">{this.props.dislikes}</span>
        </div>
        <div>
          <button onClick={this.handleRemove}>X</button>
        </div>
        <ol>
          {ingredients}
        </ol>
        <div>
          {procedure}
        </div>
        <NewRecipe
          title={this.props.title}
          desc={this.props.desc}
          ingredients={this.props.ingredients}
          procedure={this.props.procedure}
          avatarURL={this.props.avatarURL}
          likes={this.props.likes}
          dislikes={this.props.dislikes}
          show={this.state.show}
          handleRecipe={this.handleEditRecipe}
        />
      </div>
    );
  }
}

Recipe.propTypes = {
  id : PropTypes.number,
  title : PropTypes.string,
  desc : PropTypes.string,
  procedure : PropTypes.arrayOf(PropTypes.string),
  ingredients : PropTypes.arrayOf(PropTypes.string),
  likes: PropTypes.number,
  dislikes: PropTypes.number,
  handleRemoveRecipe: PropTypes.func.isRequired,
  handleEditRecipe: PropTypes.func.isRequired
};
