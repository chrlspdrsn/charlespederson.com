import "@aws-amplify/ui-react/styles.css";
import "./App.css";

import NavBar from "./components/NavBar";
import About from "./components/About";
import Home from "./components/Home";
import Projects from "./components/Projects";
import Resume from "./components/Resume";

function App() {
  return (
    <div>
      <NavBar />
      <Home />
      <div className="App-main-content">
        <About />
        <Projects />
        <Resume />
      </div>
    </div>
  );
}

export default App;