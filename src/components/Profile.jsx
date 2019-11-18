import React from 'react';
import PropTypes from 'prop-types';


function Profile(props){
  return (
    <div>
      <style jsx>{`
          
        img {
            border: solid grey;
            border-radius: 60px;
        }
       
        `}</style>
      <img src={props.images} height="150px"/>
      <h1>{props.names}</h1>
    </div>
      
      
  );
}
  
Profile.propTypes = {
  images: PropTypes.string,
  names: PropTypes.string,

  
};
export default Profile;