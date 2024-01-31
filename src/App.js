import "@aws-amplify/ui-react/styles.css";
import { Heading, View, Card, } from "@aws-amplify/ui-react";

import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Error from "./pages/Error";

function App() {
  let Component;

  switch(window.location.pathname) {
    case "/":
      Component = Home;
      break;
    case "/contact":
      Component = Contact;
      break;
    case "/projects":
      Component = Projects;
      break;
    default:
      Component = Error;
      break;
  }

  return (
    <div>
      <View className="App">
        <Card>
          <Heading level={1}>Charles Pederson</Heading>
          <Heading level={2}>Innovative. Passionate. Driven.</Heading>
          <NavBar />
        </Card>
        <Component />
      </View>
    </div>
  );
}

export default App;