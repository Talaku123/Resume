import { Container, Row, Col } from "react-bootstrap"

export default function Header() {
  return (
    <Container >
      <Row className='heading-row'>
        <Col   xs={12}> <h1 className='head-head'>Talaku Eskinder <span>Bekele.</span></h1></Col>
        <Col  xl={8} xxl={8} > <p className="sub-head">A <span>Full-Stack</span> Web Developer.</p></Col>
        <Col sm={4}><img className="img-row " src={require('../Assets/FB_20150520_19_34_22_Saved_Picture.jpg')} alt='me' /></Col>
      </Row>

    </Container>
  )
}
