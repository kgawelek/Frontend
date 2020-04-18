import React from 'react';
import './App.scss';

class App extends React.Component{
  constructor(props){
    super();
    this.state = {
      FETCHED_DATA: {

      }
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
         <h1>#STAYHOME</h1> 
        </header>
        <div className="content">
          
        </div>
      </div>
    );
  }
  
  
}

export default App;