import React from 'react';
import NewsFeed from './NewsFeed';
import PropTypes from 'prop-types';

function NewsfeedList(props){
  console.log(props.newsfeedList);
  return (
    <div>
      {[props.newsfeedList].map((newsfeed) =>
        <NewsFeed images={newsfeed.images}
          
          names={newsfeed.names}
          bio={newsfeed.bio}
          key={newsfeed.id}/>
      )}
    </div>
  );
}

NewsfeedList.propTypes = {
  newsfeedList: PropTypes.array
};
  
export default NewsfeedList;


// import React from 'react';
// import Newsfeed from './Newsfeed';


// var masterNewsfeedList = [
//   {
//     images: 'http://images.agoramedia.com/wte3.0/gcms/babys-first-words-722x406.jpg?width=414',
//     names: 'Thato',
//     bio: ' Lorem Ipsum as their default model text, and a search for lorem ipsum will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)',
     
//   },
//   {
//     images: 'https://www.sehdph.org/wp-content/uploads/2018/07/Blue-Eyed-Baby.jpg',
//     names: 'Sleater',
//     bio: ' Lorem Ipsum as their default model text, and a search for lorem ipsum will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)',
      
//   },
//   {
//     images: 'https://images2.minutemediacdn.com/image/upload/c_fill,g_auto,h_1248,w_2220/f_auto,q_auto,w_1100/v1555323228/shape/mentalfloss/baby_0.jpg',
//     names: 'Imani',
//     bio: ' Lorem Ipsum as their default model text, and a search for lorem ipsum will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)',
    
//   }
// ];

// function NewsfeedList(){
//   return (
//     <div>
//       {masterNewsfeedList.map((newsfeed, index) =>
//         <Newsfeed images={newsfeed.images}
          
//           names={newsfeed.names}
//           bio={newsfeed.bio}
//           key={index}/>
//       )}
//     </div>
//   );
// }
  
// export default NewsfeedList;
 