import React, {Component} from "react";
import "./App.css";
import Header from "./header";
import Kaleb from "./Kaleb";
import ProjectColumn from "./projectColumn";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { apiResponse: ""};
  }

  callAPI() {
    
  }

  componentWillMount() {
    this.callAPI();
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Kaleb />
        <ProjectColumn />
    </div>
  );
  }
}

export default App;
