import "@aws-amplify/ui-react/styles.css";
import "./App.css";

import NavBar from "./components/NavBar";
import About from "./components/About";
import Home from "./components/Home";
import Resume from "./components/Resume";
import Footer from "./components/Footer";
import Contact from "./components/Contact";

function App() {
  return (
    <div>
      <NavBar />
      <Home />
      <div className="App-main-content">
        <About />
        <Resume />
        <Contact />
      </div>
      <Footer />
    </div>
  );
}

export default App;