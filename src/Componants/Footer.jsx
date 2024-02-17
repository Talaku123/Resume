import { useState } from "react";
import { Container } from "react-bootstrap";
import { FaDribbble, FaFacebook, FaGithub, FaTwitter } from "react-icons/fa";



export default function Footer() {

    const currentYear = useState(() => new Date().getFullYear());

    return (
        <div className="footer-start">
            
                <hr />
                <Container>
                    <ul >
                        <FaFacebook/>
                        <a href="https://github.com/Talaku123"><FaGithub/></a>
                        <FaTwitter/>
                        <a href="https://dribbble.com/Talaku"><FaDribbble/></a>
                    </ul>
                    <p >
                       Talaku Eskinder Bekele <span>Portofolio</span> - {currentYear} &copy;.
                    </p>

                </Container>

            
        </div>
    )
}
