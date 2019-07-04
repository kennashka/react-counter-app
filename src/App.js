import React, {Component} from 'react';


class App extends Component{
state ={
  count: 0
}
// method
increment = () => {
  this.setState({
  count: this.state.count + 1
});
};

  render(){
    return (
      <div>
      <h2>counter App</h2> 
      <button onClick={this.increment}> Clicked {this.state.count} times
      </button>
      </div>
    );
  }
}

export default App;