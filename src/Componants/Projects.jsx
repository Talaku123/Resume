
import { Container, Card } from "react-bootstrap";



export default function Projects() {

  return (
    <>
      <h2 className="pro-pages" style={{ color: "white", textAlign: "center", letterSpacing: "1rem", paddingTop: "90px" }}><span>Proj</span>ects</h2>
      <Container >
        <Card className="proj-card-card mt-5 mb-3 " >
          <a href="https://k9svtmxc-3000.use.devtunnels.ms/"><img sm={12} className="proj-card-img" src={require("../Assets/20200521_152004.jpg")} alt="" /></a>
        </Card>
        <Card className="proj-card-card mb-3 ">
          <img className="proj-card-img" src={require("../Assets/E937DAF5-EA4E-407D-9AAE-C246E4FBF1A9.jpeg")} alt="" />
        </Card>  <Card className="proj-card-card mt-5 mb-5 ">
          <img className="proj-card-img" src={require("../Assets/IMG_20170225_134053.jpg")} alt="" />
        </Card>
        <Card className="proj-card-card mb-3 ">
          <img className="proj-card-img" src={require("../Assets/IMG_20170301_013229.jpg")} alt="" />
        </Card>
        <Card className="proj-card-card mt-5 mb-3 ">
          <img className="proj-card-img" src={require("../Assets/20200521_152004.jpg")} alt="" />
        </Card>
        <Card className="proj-card-card mb-3 ">
          <img className="proj-card-img" src={require("../Assets/E937DAF5-EA4E-407D-9AAE-C246E4FBF1A9.jpeg")} alt="" />
        </Card>  <Card className="proj-card-card mt-5 mb-5 ">
          <img className="proj-card-img" src={require("../Assets/IMG_20170225_134053.jpg")} alt="" />
        </Card>
        <Card className="proj-card-card mb-3 ">
          <img className="proj-card-img" src={require("../Assets/IMG_20170301_013229.jpg")} alt="" />
        </Card>
      </Container>
    </>
  );
}

// https://landkit.goodthemes.co/assets/img/illustrations/illustration-2.png
//  /Users/talakubekele/Pictures/Photos Library.photoslibrary/originals/7/7A16487E-3702-427E-9825-DB8AFBFDFBBB.jpeg
