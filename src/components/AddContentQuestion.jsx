import React from 'react';
import PropTypes from 'prop-types';

function AddContentQuestion(props) {
  return (
    <div>
      <button onClick={props.onAddConfirmation}>Add Content</button>
    </div>
  );
}

AddContentQuestion.propTypes = {
  onAddConfirmation: PropTypes.func 
};

export default AddContentQuestion;