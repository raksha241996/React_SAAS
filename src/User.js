import React from 'react';
import './user.css';

//This is a stateless component 
class User extends React.Component{

render(){
   
    //Data from App class is recieved as props 
    return(
    
        <div className ="userClass">
         <h1 className ="textStyle">Name :{this.props.name}</h1><br/>
         <h1 className ="textStyle">Id Number :{ this.props.id}</h1><br/>
         <h1 className ="textStyle">Company name :{this.props.comapanyName}</h1>
        </div>
    )
}
}

export default User;