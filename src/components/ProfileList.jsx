import React from 'react';
import Profile from './Profile';


var newProfileList = [
  { 
    images: 'https://img.icons8.com/cotton/2x/person-male.png',
    names: 'New baby',
  }
];

function ProfileList(){
  return (
    <div>
         
      {newProfileList.map((profile, index) =>
        <Profile images={profile.images}
          names={profile.names}
          key={index}/>
      )}
    </div>
  );
}
export default ProfileList;
