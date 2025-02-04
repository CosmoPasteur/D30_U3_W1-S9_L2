// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MyNav from "./components/MyNav";
import MyFooter from "./components/MyFooter";
import { Col, Container, Row } from "react-bootstrap";
import AllTheBooks from "./components/AllTheBooks";
import AdditionalAlert from "./components/Welcome";

function App() {
  return (
    <>
      <MyNav />

      <AdditionalAlert />
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
