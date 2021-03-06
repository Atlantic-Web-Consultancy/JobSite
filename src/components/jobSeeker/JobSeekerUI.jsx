import React from 'react';
import Container from 'react-bootstrap/Container';
import CardGroup from 'react-bootstrap/CardGroup';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { LinkContainer } from 'react-router-bootstrap';
import {
  cardStyle1, cardStyle2, cardStyle3, cardButton, container, cardGroup,
  cardTitle, cardText, cardImg, firstCard,
} from './JobSeekerCSS.js';

class JobSeekerUI extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};

    this.toggleCal = this.toggleCal.bind(this);
  }

  toggleCal(toggleVal) {
    this.props.toggleCal(toggleVal);
  }

  render() {
    return (
      <Container style={container}>
        <CardGroup style={cardGroup}>

          <Card style={firstCard}>
            <Card.Img style={cardImg} src="/jobpic1.jpeg" />
          </Card>

          <Card style={cardStyle1}>
            <Card.Body>
              <Card.Title style={cardTitle}>
                Job
                <br />
                Listings.
              </Card.Title>
              <Card.Text style={cardText}>
                Browse available job listings.
              </Card.Text>
              <LinkContainer to="/joblistings">
                <Button className="green-btn" variant="primary" style={cardButton} size="lg">Browse</Button>
              </LinkContainer>
            </Card.Body>
          </Card>

          <Card style={cardStyle2}>
            <Card.Body>
              <Card.Title style={cardTitle}>
                My
                <br />
                Jobs.
              </Card.Title>
              <Card.Text style={cardText}>
                View applications, notes, and more.
              </Card.Text>
              <LinkContainer to="/myjobs">
              <Button className="green-btn" variant="primary" style={cardButton} size="lg">My Jobs</Button>
              </LinkContainer>
            </Card.Body>
          </Card>

          <Card style={cardStyle3}>
            <Card.Body>
              <Card.Title style={cardTitle}>
                Job
                <br />
                Calendar.
              </Card.Title>
              <Card.Text style={cardText}>
                See the next scheduled event here.
              </Card.Text>
              <Button onClick={() => this.toggleCal(true)} className="green-btn" variant="primary" style={cardButton} size="lg">Calendar</Button>
            </Card.Body>
          </Card>

        </CardGroup>
      </Container>
    );
  }
}

export default JobSeekerUI;
