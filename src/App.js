import "@aws-amplify/ui-react/styles.css";
import "./App.css";

import NavBar from "./components/NavBar";
import About from "./components/About";
import Home from "./components/Home";
import Projects from "./components/Projects";

function App() {
  return (
    <div>
      <NavBar />
      <Home />
      <div className="App-main-content">
        <About />
        <Projects />
      </div>
    </div>
  );
}

export default App;