import { Container, Row, Col } from "react-bootstrap";


export default function Education() {
    return (
        <Container>
            <Row className="row-edu-row">
                <h2 className="edu-head-head">Courses <span>Taken.</span></h2>

                <Col lg={9} md={11} sm={12}>
                    <img className="edu-img" src="https://udemy-certificate.s3.amazonaws.com/image/UC-8a4fc76d-d045-4b25-be6b-3d3b3dd66443.jpg?v=1660217480000" alt="udemy" />
                </Col>

                <Col className="edu-orders" lg={3} md={9} sm={10}>
                    <ol >
                        <h4>Frontend Web Development</h4>
                        <li>Intermidiate HTML</li>
                        <li>Advance CSS, Flexbox, Grid and Bootstrap</li>
                        <li>Web Design ColorTheory, Typograhy, User Interface (UI) and User Experience</li>
                        <li>Java Script ES6</li>
                        <li>Intermediate, Advance Java Script and Object Model (DOM)</li>
                        <li>React.js</li>
                        <br />
                        <h4>Backend Web Development</h4>
                        <li>Node.js</li>
                        <li>Express.js with Node.js</li>
                        <li>EJS</li>
                        <li>Git, Github and Virsion Control</li>
                        <li>Application Programing Interface (API)</li>
                        <li>MongoDB and Mongoose</li>
                        <li>Authentication and Security</li>
                        <br />
                        <h4>Web3 Decentralised App (DApp)</h4>
                        <li>Decentralised Finance (DApp - DBank)</li>
                        <li>ICP Live Blockchain</li>
                        <li>Building DApps on ICP with a React Frontend</li> and lastly
                        <li>Minting NFTs and Building an NFT</li>
                    </ol>
                </Col>
                <Col><a href="/about"><svg xmlns="http://www.w3.org/2000/svg" width="300" height="56" fill="currentColor" class="bi bi-reply-fill" viewBox="0 0 16 16">
                    <path d="M5.921 11.9 1.353 8.62a.719.719 0 0 1 0-1.238L5.921 4.1A.716.716 0 0 1 7 4.719V6c1.5 0 6 0 7 8-2.5-4.5-7-4-7-4v1.281c0 .56-.606.898-1.079.62z" />
                </svg></a></Col>
            </Row>

        </Container>

    )
}
