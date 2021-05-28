import React from 'react';
import moment from 'moment';
import $ from 'jquery';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image'

class ResumeSearchResults extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dummyData: [1,2,3],
      application: []
    }
  }

  componentDidMount() {
    $.ajax({
      url: "http://localhost:3000/employers/jobpostings",
      type: "get",
      crossDomain: true,
      success: (response) => {
        this.setState({application: response})
      },
      error: (err) => {
        console.log(err)
      }
    });
  }

  render () {
    const { application } = this.state;
    return (
      <div className="resumeSearch_body">
        <div className="temp">
          <h2 className="header_text">Your posted jobs</h2>
          <Image className="resume_img" variant="top" src='resume_writing.jpeg' />
        </div>
        <Container className="container_div">
          {
            application.map((data, index) => (
              <Card key={index} className="resume_card">
              <Card.Body className="card.body_div">
                <Card.Title>{data.title} | {data.employment_type}</Card.Title>
                <Card.Text>{data.type_work} | {data.experience_level}</Card.Text>
                <Card.Text>{data.description}</Card.Text>
                <Card.Text>{moment(parseInt(data.date_posted)).fromNow()}</Card.Text>
                <Button variant="primary" className="resume_btn">View Applicants</Button>
              </Card.Body>
            </Card>
            ))
          }
        </Container>
      </div>
    )
  }
}

export default ResumeSearchResults;

{/* <div className="resumeSearch_body">
<div className="temp">
  <h2 className="header_text">Find a great hire,</h2> <h2 className="header_txt2"> Fast </h2>
  <Image className="resume_img" variant="top" src='resume_writing.jpeg' />
</div>
<Container className="container_div">
  {
    this.state.dummyData.map((data, index) => (
      <Card key = {index} className="resume_card">
      <Card.Body className="card.body_div">
        <Card.Title></Card.Title>
        <Card.Text>
          Short description from persons resume that will bleed off the card
        </Card.Text>
        <Button variant="primary" className="resume_btn">View Resume</Button>
      </Card.Body>
    </Card>
    ))
  }
</Container>
</div> */}