// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MyNav from "./components/MyNav";
import MyFooter from "./components/MyFooter";
import { Col, Container, Row } from "react-bootstrap";

function App() {
  return (
    <>
      <MyNav title="React-EpiBooks!" claim="Avventure da leggere" />

      <Container fluid>
        <Row>
          <Col></Col>
        </Row>
      </Container>

      <MyFooter />
    </>
  );
}

export default App;
