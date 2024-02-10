import "@aws-amplify/ui-react/styles.css";
import { Image, Heading, View, Card, } from "@aws-amplify/ui-react";

import NavBar from "./components/NavBar";
import About from "./components/About";
import Home from "./components/Home";

function App() {
  return (
    <div>
      <NavBar />
      <Home />
      <About />
      {/* <View className="App">
        <View className="App-header">
          <Image src={require("./images/header.jpg")} className="App-image"/>
          <Card className="App-header-content">
            <Heading level={1}>Charles Pederson</Heading>
            <Heading level={2}>Innovative. Passionate. Driven.</Heading>
          </Card>
        </View>
        <Component />
      </View> */}
    </div>
  );
}

export default App;