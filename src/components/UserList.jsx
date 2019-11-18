import React from 'react';
import User from './User';


var newUserList = [
  {
    images: 'http://images.agoramedia.com/wte3.0/gcms/babys-first-words-722x406.jpg?width=414',
    names: 'Thato',
     
     
  },
  {
    images: 'https://www.sehdph.org/wp-content/uploads/2018/07/Blue-Eyed-Baby.jpg',
    names: 'Sleater',
     
      
  },
  {
    images: 'https://images2.minutemediacdn.com/image/upload/c_fill,g_auto,h_1248,w_2220/f_auto,q_auto,w_1100/v1555323228/shape/mentalfloss/baby_0.jpg',
    names: 'Imani',
    
    
  }
];

function UserList(){
  return (
    <div>
      {newUserList.map((user, index) =>
        <User images={user.images}
          
          names={user.names}
            
          key={index}/>
      )}
    </div>
  );
}
  
export default UserList;
 