import { Container, Row, Col } from "react-bootstrap";
//import logo from "../assets/img/logo.svg";
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';

export const Footer = () => {
    return (
        <footer className="footer">
            <Container>
                <Row className="align-item-center">
                     {/* <Col sm={6}>
                        <img src={logo} alt="logo" />
                    </Col> */}
                    <Col className="text-center"> {/*text-sm-end - add this in className, sm={6} - add this after Col - when adding logo*/}
                        <div className="social-icon">
                            <a href="https://www.linkedin.com/in/narsipura-abhinav-a81949226/" target="_blank" rel="noreferrer"><img src={navIcon1} alt="Linked IN"/></a>
                            <a href="https://github.com/NarsipuraAbhinav" target="_blank" rel="noreferrer"><img src={navIcon2} alt="GitHub"/></a>
                        </div>
                        <p>Narsipura Abhinav</p>

                    </Col>
                </Row>
            </Container>
        </footer>
    )
}