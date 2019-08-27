import React from 'react';
import './App.scss';

class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      counter: 0 // declaring counter as a state
    }
  }

  render() {

    //function called on click and state is changed
    function increment() {
      this.setState({
        counter: this.state.counter + 1
        
      })
    }

    // The DOM that is returned
    return (
      <div>
        <div class="App">
          <h1 className="heading" >Welcome User</h1>
          <button onClick={increment.bind(this)} class="buttonStyle" > click to increment </button>
          Counter value now : {
            this.state.counter
          }
        </div>
        <div class="subHeading">
          <h1>A Basis Project </h1>
          <h1> Covering basic SAAS concepts</h1>
        </div>

        <div class="extends">
          <h1> React JS  </h1>
          <h1> Project</h1>
        </div>
      </div>

    )
  }
}

export default App;
