import { useState } from "react";
import { Button } from "react-bootstrap";

const Alert = () => {
  const [show, setShow] = useState(true);
  return (
    <>
      <Alert show={show} variant="success">
        <Alert.Heading>Welcome to EpiBooks!</Alert.Heading>
        <p>Che la tua avventura letteraria abbia inizio!</p>
        <hr />
        <div className="d-flex justify-content-end">
          <Button onClick={() => setShow(false)} variant="outline-success">
            Close me
          </Button>
        </div>
      </Alert>

      {!show && <Button onClick={() => setShow(true)}>Show Alert</Button>}
    </>
  );
};

export default Alert;
