import React from 'react';
import AddContentQuestion from './AddContentQuestion';
import NewsfeedForm from './NewsfeedForm';
import PropTypes from 'prop-types';

class NewsfeedControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false
    };
    this.handleAddContentConfirmation = this.handleAddContentConfirmation.bind(this);
  }

  handleAddContentConfirmation() {
    this.setState({formVisibleOnPage: true});
  }

  render() {
    let currentlyVisibleContent = null;
    if (this.state.formVisibleOnPage) {
      currentlyVisibleContent = <NewsfeedForm onNewNewsfeedCreation = {this.props.onNewNewsfeedCreation}/>;
    } else {
      currentlyVisibleContent = <AddContentQuestion onAddConfirmation = {this.handleAddContentConfirmation}/>;
    }

    return (
      <div>
        {currentlyVisibleContent}
        <hr/>
      </div>
    );
  }
}

NewsfeedControl.propTypes = {
  onNewNewsfeedCreation: PropTypes.func
};

export default NewsfeedControl;
