import { Button, Card, ListGroup } from "react-bootstrap";

const AllTheBooks = () => {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src="https://images-na.ssl-images-amazon.com/images/I/51eHtkVLL5L.jpg" />
      <Card.Body>
        <Card.Title>The Last Wish: Introducing the Witcher</Card.Title>
        <Card.Text>Fantasy story Dragon</Card.Text>
        <ListGroup.Item>4.6/5</ListGroup.Item>
        <Button variant="primary">Acquista</Button>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>Category: Fantasy.</ListGroup.Item>
        <ListGroup.Item>Price: 9.59 $</ListGroup.Item>
      </ListGroup>
    </Card>
  );
};

export default AllTheBooks;
