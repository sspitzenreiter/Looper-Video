import React from 'react';
import ReactPlayer from 'react-player';
import './App.css';
import {Switch, Route, BrowserRouter as Router} from 'react-router-dom';
import FormVid from './FormVid';
class App extends React.Component {
  constructor(props){
    super(props);
    this.state={
      date:new Date()
    }
  }

  componentDidMount(){
    window.setInterval(()=>{
      this.setState({
        date:new Date()
      })
    }, 1000);
  }

  render(){
    const date = new Date();
    
    return(
      <Router>
        <Switch>
          <Route path="/form">
            <FormVid/>
          </Route>
          <Route path="/jam">
            <div>
            {this.state.date.toLocaleTimeString()}
            </div>
          </Route>
          <Route path="/">
            <ReactPlayer id="vid" height="100vh" width="100%" url="https://www.youtube.com/watch?v=668nUCeBHyY" playing muted onEnded={ev=>alert('selesai')}>

            </ReactPlayer>
          </Route>
        </Switch>
      </Router>
    )
  }
}

export default App;
