import React from 'react';
import PropTypes from 'prop-types';
import { v4 } from 'uuid';
import { Link } from 'react-router-dom';

function NewsfeedForm(props){
  let _images = null;
  let _names = null;
  let _bio = null;

  function handleNewsfeedFormSubmission(event) {
    event.preventDefault();
    props.onNewNewsfeedCreation({images: _images.value, names: _names.value, bio: _bio.value, id: v4()});
    _images.value = '';
    _names.value = '';
    _bio.value = '';
  }

  return (
    <div>
      <form onSubmit = {handleNewsfeedFormSubmission}>
        <input 
          type = 'text'
          placeholder = 'Image URL'
          ref={(input) => {_images = input;}}/>
        <input 
          type = 'text'
          placeholder = 'Name'
          ref={(input) => {_names = input;}}/>
        <input 
          type = 'text'
          placeholder = 'About'
          ref={(textarea) => {_bio = textarea;}}/>
        <button type='submit'>Enter profile</button>
      </form> 
      <hr/>

      <Link to='/'>Newsfeed</Link> 
    </div>
  );
}

NewsfeedForm.propTypes = {
  onNewNewsfeedCreation: PropTypes.func
};

export default NewsfeedForm;