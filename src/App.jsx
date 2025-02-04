// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MyNav from "./components/MyNav";
import MyFooter from "./components/MyFooter";
import { Alert, Col, Container, Row } from "react-bootstrap";
import AllTheBooks from "./components/AllTheBooks";

function App() {
  return (
    <>
      <MyNav title="React-EpiBooks!" claim="Avventure da leggere" />

      <Alert />
      <Container fluid>
        <Row className="justify-content-center">
          <Col xs={10} md={8} xl={6}>
            <AllTheBooks />
          </Col>
        </Row>
      </Container>

      <MyFooter />
    </>
  );
}

export default App;
