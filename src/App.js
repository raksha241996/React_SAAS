import React from 'react';
import './App.scss';
import User from './User';


//This is a statefull component 
class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      counter: 0,
      books: ['java', 'c++', 'react-native']// declaring counter as a state
    }

  }

  componentWillMount() {
    console.log('Component WILL MOUNT will be executed before mounting!')
  }


  componentDidMount() {
    console.log('Component DID MOUNT will be executed after mounting !')
  }

  componentWillUnmount() {
    console.log('Component WILL UNMOUNT will be executed after unmounting!')
  }

  //function call to increment counter
  increment() {
 
    this.setState((prevState) => ({ counter: prevState.counter + 1 }));
  }
  render() {

    // The DOM that is rendered
    return (
      <div>
        <div className="App">
          <h1 className="heading" >Welcome User</h1>
          <button onClick={this.increment.bind(this)} className="buttonStyle" > click to increment </button>
          Counter value now : {
            this.state.counter
          }
        </div>
        <div className="subHeading">
          <h1>A Basis Project </h1>
          <h1> Covering basic SAAS concepts</h1>
        </div>
        <div className="extends">
          <h1> React JS  </h1>
          <h1> Project</h1>
        </div>
        {/* Using inline css styling */}
        <h1 style={{ color: "blue" }}>Inline CSS</h1>

        {/* Data is passed to user component as props */}
        <User name={"raksha"} id={1} comapanyName={"teksystem"} />

        {/* displaying the content of books array present in state */}
        <ul> {this.state.books.map(book => {
          return <li>{book}</li>
        })}</ul>
      </div>

    )
  }
}

export default App;
