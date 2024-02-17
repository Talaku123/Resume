import { useRef } from "react";
import Form from "react-bootstrap/Form";
import { Button, Row, Col, Container } from "react-bootstrap";
import { FaEnvelopeOpen, FaHome, FaPhone } from "react-icons/fa";
import emailjs from "@emailjs/browser";


export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_gox6xvn",
        "template_t787vuw",
        form.current,
        "bmaUwUe0CFgO6lFjj"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  
  return (
    <>
      <Container className="conta-cont">
        <h2 className="conta-head">
          <span>Drop Me</span> A Line.
        </h2>
        <Row className="conta-cont-row">
          <Col>
            <ul className="mb-4">
              <li>
                <FaHome className="icon mb-4" /> <br /> 100 S Reynolds St
                Alexandria, VA 22304.
              </li>
              <li>
                <FaEnvelopeOpen className="icon mb-4 mt-4" /> <br />
                talakub25@icloud.com <br />
                talaku25@gmial.com ztalaku@yahoo.com
              </li>
              <li>
                <FaPhone className="icon mb-4 mt-4" /> <br />
                (571) 201-5358.
              </li>
            </ul>
          </Col>
        </Row>
        <Form className="mt-3 form" ref={form} onSubmit={sendEmail}>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label className="label">Email address</Form.Label>
            <Form.Control
              className="control"
              type="email"
              placeholder="name@example.com"
              name="user_email"
            />
          </Form.Group>
          <Form.Group className="mb-4" controlId="exampleForm.ControlTextarea1">
            <Form.Label className="label">Write Me Semething...</Form.Label>
            <Form.Control
              className="control-row"
              rows={6}
              type="message"
              name="user_email"
              as="textarea"
            />
           
          </Form.Group>
          <Button
            className="btn-btn mb-4"
            type="submit"
            value="send"
            onSubmit={sendEmail}
          >
            SUBMIT
          </Button>
        </Form>
      </Container>
    </>
  );
}
