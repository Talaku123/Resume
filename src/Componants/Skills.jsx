import { Container, Col } from "react-bootstrap";
import {
  FaBootstrap,
  FaCss3,
  FaDatabase,
  FaHtml5,
  FaJsSquare,
  FaNodeJs,
  FaReact,
} from "react-icons/fa";

export default function Skills() {
  return (
    <Container className="skill">
      <h2>
        <span>Exper</span>tise.
      </h2>
      <Col>
        <p>
          I'M a full-stake web developer from Alexandria area, Virginia who wants to
          work as web developer full time. Enthusiastic web developer experienced
          in both front-end and back-end development, dedicated to crafting
          visually pleasing, responsive websites that elevate user experiences.
          Actively seeking a challenging web development role to apply technical
          skills and creativity,collaborate with talented teams,and further grow
          in this ever-evolving field.
        </p>
      </Col>
      <Col className="skills">
        <a href="https://www.w3schools.com/html/default.asp">
          {" "}
          <FaHtml5 />{" "}
        </a>
        <a href="https://www.w3schools.com/css/default.asp">
          {" "}
          <FaCss3 />{" "}
        </a>
        <a href="https://www.w3schools.com/bootstrap/bootstrap_ver.asp">
          {" "}
          <FaBootstrap />
        </a>
        <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript">
          {" "}
          <FaJsSquare />{" "}
        </a>
        <a href="https://nodejs.org/en/docs">
          <FaNodeJs />
        </a>
        <a href="https://www.mongodb.com/docs/">
          {" "}
          <FaDatabase />{" "}
        </a>
        <a href="https://legacy.reactjs.org/docs/getting-started.html">
          {" "}
          <FaReact />
        </a>
      </Col>
    </Container>
  );
}
