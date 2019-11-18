import React from 'react';
import PropTypes from 'prop-types';
import { v4 } from 'uuid';

function NewsfeedForm(props){
  let _images = null;
  let _names = null;
  let _bio = null;

  function handleNewfeedFormSubmission(event) {
    event.preventDefault();
    props.onNewNewsfeedCreation({images: _images.value, names: _names.value, bio: bio.value, id: v4()});
    _images.value = '';
    _names.value = '';
    _bio.value = '';
  }

  return (
    <div>
      <form onSubmit = {handleNewfeedFormSubmission}>
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
          ref={(input) => {_bio = textarea;}}/>
        <button type='submit'>Enter profile</button>
      </form>
    </div>
  );
}

NewsfeedForm.propTypes = {
  onNewNewsfeedCreation: PropTypes.func
};

export default NewsfeedForm;