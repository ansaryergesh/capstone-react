import React, { Component } from 'react';
import {
  Breadcrumb, BreadcrumbItem,
  Button, Row, Col, Label,
} from 'reactstrap';
import { Control, LocalForm, Errors } from 'react-redux-form';
import { Link } from 'react-router-dom';

const required = (val) => val && val.length;
const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => val && (val.length >= len);
const isNumber = (val) => !Number.isNaN(Number(val));
const validEmail = (val) => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val);

class Contact extends Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(values) {
    this.values = values;
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <Breadcrumb>
            <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
            <BreadcrumbItem>Contact us</BreadcrumbItem>
          </Breadcrumb>
        </div>
        <div className="row row-content">
          <div className="col-12">
            <h3>Give Feedback</h3>
          </div>
          <div className="col-12 col-md-12">
            <LocalForm onSubmit={(values) => this.handleSubmit(values)}>
              <Row className="form-group">
                <Label htmlFor="firstname" md={2}>FirstName:</Label>
                <Col md={10}>
                  <Control.text
                    model=".firstname"
                    id="firstname"
                    name="firstname"
                    placeholder="First Name"
                    className="form-control firstname"
                    validators={{
                      required, minLength: minLength(3), maxLength: maxLength(25),
                    }}
                  />
                  <Errors
                    className="text-danger"
                    model=".firstname"
                    show="touched"
                    messages={{
                      required: 'Required',
                      minLength: 'Must be greater than 2 characters',
                      maxLength: 'Must be less than 25 characters',
                    }}
                  />
                </Col>
              </Row>

              <Row className="form-group">
                <Label htmlFor="lastname" md={2}>LastName:</Label>
                <Col md={10}>
                  <Control.text
                    model=".lastname"
                    id="lastname"
                    name="lastname"
                    placeholder="Last Name"
                    className="form-control"
                    validators={{
                      required, minLength: minLength(3), maxLength: maxLength(25),
                    }}
                  />
                  <Errors
                    className="text-danger"
                    model=".lastname"
                    show="touched"
                    messages={{
                      required: 'Required!',
                      minLength: ' must be greater than 2 characters',
                      maxLength: ' must be less than 25 characters',
                    }}
                  />
                </Col>
              </Row>

              <Row className="form-group">
                <Label htmlFor="telnum" md={2}>Phone:</Label>
                <Col md={10}>
                  <Control.text
                    model=".telnum"
                    id="telnum"
                    name="phone: "
                    placeholder="87089999998"
                    validators={{
                      required, minLength: minLength(3), maxLength: maxLength(25), isNumber,
                    }}
                    className="form-control"
                  />
                  <Errors
                    className="text-danger"
                    model=".telnum"
                    show="touched"
                    messages={{
                      required: 'Required!',
                      minLength: ' Must be greater than 2 numbers',
                      maxLength: ' Must be less than 25 numbers',
                      isNumber: ' only numbers',
                    }}
                  />
                </Col>
              </Row>

              <Row className="form-group">
                <Label htmlFor="email" md={2}>email:</Label>
                <Col md={10}>
                  <Control.text
                    model=".email"
                    id="email"
                    name="email"
                    placeholder="example@example.com"
                    className="form-control"
                    validators={{
                      required,
                      validEmail,
                    }}
                  />
                  <Errors
                    className="text-danger"
                    model=".email"
                    show="touched"
                    messages={{
                      required: 'Required!',
                      validEmail: ' Invalid email address!',
                    }}
                  />
                </Col>

              </Row>

              <Row className="form-group">
                <Label htmlFor="message" md={2}>Your Feedback</Label>
                <Col md={10}>
                  <Control.textarea
                    model=".message"
                    id="message"
                    name="message"
                    rows="12"
                    className="form-control"
                  />
                </Col>
              </Row>
              <Row className="form-group">
                <Col md={{ size: 10, offset: 2 }}>
                  <Button type="submit" color="primary">
                    Send Feedback
                  </Button>
                </Col>
              </Row>
            </LocalForm>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
