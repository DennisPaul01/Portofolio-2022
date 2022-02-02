import { Container } from "@chakra-ui/react";
import NavBar from "./components/NavBar/NavBar";
import HomePage from "./Pages/HomePage";
function App() {
  return (
    <Container maxW="1600px">
      <NavBar></NavBar>
      <HomePage></HomePage>
    </Container>
  );
}

export default App;
