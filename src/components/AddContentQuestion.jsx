import React from 'react';
import PropTypes from 'prop-types';


function AddContentQuestion(props) {
  return (
    <div>
      <p>Click on add content to enter a newsfeed story</p>
      <button onClick={props.onAddConfirmation}>Make a Post</button>
      
    </div>
  );
}

AddContentQuestion.propTypes = {
  onAddConfirmation: PropTypes.func 
};

export default AddContentQuestion;