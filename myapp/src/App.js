import logo from "./logo.svg";
import "./App.css";
import Greeting from "./components/Greeting";

import PureComp from "./components/PureComp";
import ParentComp from "./components/ParentComp";

function App() {
  return (
    <div className="App">
      <ParentComp />
    </div>
  );
}

export default App;
