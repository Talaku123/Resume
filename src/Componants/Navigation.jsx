import { Navbar, Container, Nav, Button, } from "react-bootstrap"



export default function Navigation() {
    return (
        <>
            <Navbar expand="lg" data-bs-theme="dark"  className="dark" >
                <Container >
                    <Navbar.Brand href="/" className='brand'><span>PORTO</span>FOLIO</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" className="next" />
                    <Navbar.Collapse id="basic-navbar-nav" >
                        <Nav className="me-auto" >
                            <Nav.Link href="/about">Concerning</Nav.Link>
                            <Nav.Link href="/hobbies">Amusement</Nav.Link>
                            <Nav.Link href="#pricing">Pricing</Nav.Link>
                            <Button href="/contact" variant="outline-primary" className=" mt-2"> Let's Talk</Button>
                        </Nav>
                    </Navbar.Collapse >
                </Container>
            </Navbar>
        </>
        
    )

}


