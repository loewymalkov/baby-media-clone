import React from 'react';
import NewsfeedList from './NewsfeedList';
import ProfileList from './ProfileList';
import NewsfeedControl from './NewsfeedControl';
import Navbar from './Navbar';   
import Bio from './Bio';  
import UserList from './UserList';                                  
import { Switch, Route } from 'react-router-dom';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      masterNewsfeedList: []
    };
    this.handleAddNewContentToList = this.handleAddNewContentToList.bind(this);
  }

  handleAddNewContentToList(newContent){
    var newMasterNewsfeedList = this.state.masterNewsfeedList.slice();
    newMasterNewsfeedList.push(newContent);
    this.setState({masterNewsfeedList: newMasterNewsfeedList});
  }

  render(){
    return (    
      <div>
        <style jsx>{`
            div {
             margin-top: 40px;
          }
          .col-md-4, .col-md-5, .col-md-2{
            border: solid #aeaeae;
            box-shadow: 4px 4px 3px lightgray;
            margin-left: auto;
            margin-right: auto;
            padding: 5px;
            color: white;
            background-color: lightpink;
          }
          .row{
            margin-left: auto;
            margin-right: auto;
          }
         
          `}</style>
           
        <Navbar/>
        <hr/>
        <div className="row">
          <Switch>
            <div className="col-md-4"><ProfileList/> <Bio/>
            </div>
            <div className="col-md-5"><Route exact path='/' render={()=><NewsfeedList newsfeedList={this.state.masterNewsfeedList}/> }/> 
              <Route path='/newcontent' render={()=><NewsfeedControl onNewNewsfeedCreation={this.handleAddNewContentToList} />} /> </div>
            <div className="col-md-2"><UserList/></div>
          </Switch>
        </div>
      </div>
          
         
    );
  }
}
  
export default App;