import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

class Landing extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <Container fluid>
        <Row>
          <Col>
            <Card>
              <Card.Body>
                <Card.Title>Apply</Card.Title>
                <Card.Text>
                  Browse available job listings.
                </Card.Text>
                <Button variant="primary">Apply.</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Body>
                <Card.Title>View My Applications.</Card.Title>
                <Card.Text>
                  View statuses of applications.
                </Card.Text>
                <Button variant="primary">See my</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Body>
                <Card.Title>View My Calendar.</Card.Title>
                <Card.Text>
                  Your next scheduled event here.
                </Card.Text>
                <Button variant="primary">Go to Calendar</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Landing;
