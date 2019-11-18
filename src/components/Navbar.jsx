import React from 'react';

function Navbar() {
  return (
    <div>
      <style jsx>{`
          div {
            
        }
      .search, .tweet {
        float: right;
        border: solid 2px #aeaeae;
        border-radius: 100px;
        padding: 3px;
        margin-right:5px;
        }

        .btn {
            margin-right: 10px;
            padding: 10px;
            margin-left: 8px;
        }
        .feed {
            margin-top: 60px;
            border-radius: 20px;
            margin-left: 230px;
            
        }
        `}</style>
      <div className="main">
        <button className="btn btn-danger">Home</button>
        <button className="btn btn-danger">Profile</button>
        <button className="btn btn-danger">Messages</button>
      </div>
      <div className="searchTweet">
        <input className="search" placeholder="search"></input>
        <input className="tweet" placeholder="Tweet"></input>
      </div>
      <div className="feed">
        <input className="feed" placeholder="What's happening"></input>
      </div>
    </div>
  );
}
export default Navbar;