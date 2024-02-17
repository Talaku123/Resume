import { Container, Row, Col, Nav } from "react-bootstrap";
import Addmore from "./Addmore";
import { useState } from "react";

export default function About() {
  const [readMore, setReadMore] = useState(false);
  return (
    <Container>
      <Row className="about-about">
        <Col>
          {/* <img src="https://cdn.create.vista.com/api/media/small/202137232/stock-photo-three-fantasy-glowing-mushrooms-mystery-dark-forest-close-beautiful-macro" alt="me"/> */}
          <h2>
            <span> Conce</span>rning.
          </h2>
          <br />
          <h4>
            Hello there, I'M <span> Talaku Eskinder Bekele </span>, a passionate
            and dedicated entry-level Full-Stack Web Developer. I'm on a journey
            to create innovative and user-friendly digital experiences. Over the
            years, I build up diverse range of skills and qualities. I believe I
            have much for this job descriptions. 
            
            
            
            
            
             I am very positive, I love being at work I have goals
            outside work which means I need to perform high standard when I am
            in my job in order to achieve this goals. So I am very focused in my
            work. I am very good planning and organizing my work. So you can
            give me load of tasks different projects to work on. I will always
            be done on time up to necessary standard. I am very good with
            clients and customers because I understand for your business to be
            successful, I need know only actors positive role model but I need
            to provide outstanding services so your customers and clients
            comeback to your business time and time again. I am happy working my
            own but also like to work as part of a team. I am very fast learner.
            so you can give me a task I will learn it quickly I will always the
            first person to volunteer to do a job needs be done. And I can
            assure you that if you hire me in this position, I will perform very
            high standard and I will help you to achieve your commercial and
            financial objectives.
          </h4>
          <br />
          <h3>
            {" "}
            MY <span>Journey</span> :
          </h3>
          <h4>
            I fell in love with web development during a group discussion and
            have been on a learning adventure ever since. I have gained a solid
            foundation in <span>Front-end and Back-end</span> technologies, from{" "}
            <span
              style={{
                color: "#b618b6",
                fontSize: "20px",
                fontWeight: "900",
                marginTop: "-.3em",
                marginLeft: "1px",
                position: "absolute",
              }}
            >
              ^
            </span>
            {
              <span
                className="Bold"
                style={{ color: "#E5EAF2", fontWeight: "900" }}
              >
                {" "}
                udemy{" "}
              </span>
            }
            and I"m constantly expanding my skill set.
          </h4>
          <br />
          <h3>
            {" "}
            Front-End<span> Magic </span>:
          </h3>
          <h4>
            I have a keen eye design and knack for creating visually appealing
            and intutive user interface (UI). My toolbox incluses
            {<span> Html, Css, Bootstrap, Javascript, </span>} and modern
            framwork like <span> React.Js</span>...
          </h4>
          <br />
          <h3>
            {" "}
            Back-End<span> Wizardry </span>:
          </h3>
          <h4>
            {" "}
            Uder the hood, I'm proficient in back-end technologies such as{" "}
            <span> Node.Js, Express,</span> and database like{" "}
            <span> MongoDB</span> I uderstand the importance of data integrity
            and efficient server-side operations.{" "}
          </h4>
          <href
            onClick={() => setReadMore(!readMore)}
            style={{ color: "#b618b6" }}
          >
            Read More...
          </href>
          {readMore && <Addmore />}
          {/* <h4>
            Some of my hobbies other than building web applications are
            Painting, drawing, schaching and visiting art galleries. I am also
            love to have meet new people.
          </h4>
          <br /> */}
        </Col>
      </Row>
      <Row className="about-about-col">
        <Col className="about-about-edu">
          <Nav.Link href="/education">DISCIPLINE.</Nav.Link>
        </Col>
        <Col className="about-about-link">
          <Nav.Link href="../Componants/Projects.jsx">PROJECTS.</Nav.Link>
        </Col>
        <Col className="about-about-skill">
          <Nav.Link href="/skills">EXPERTISE.</Nav.Link>
        </Col>
      </Row>
    </Container>
  );
}
