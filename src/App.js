import React from "react";
import { HashRouter as Router, Routes, Route} from "react-router-dom";
import Home from "./pages/home";
import SpellBlade from "./pages/spellblade";
import RoboRampage from "./pages/roborampage";
import "./App.css";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/spellblade" element={<SpellBlade/>}/>
        <Route path="/roborampage" element={<RoboRampage/>}/>
      </Routes>
    </Router>
  );
}

// class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = { apiResponse: ""};
//   }

//   callAPI() {
    
//   }

//   componentWillMount() {
//     this.callAPI();
//   }

//   render() {
//     return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<Home/>}/>
//         <Route path="/spellblade" element={<SpellBlade/>}/>
//       </Routes>
//     </Router>
//   );
//   }
// }

//export default App;
