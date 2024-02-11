import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import colorSharp2 from "../assets/img/color-sharp2.png";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import TrackVisibility from 'react-on-screen';
import 'animate.css';


export const Projects = () => {
    const project1 = [
        {   
            title: "AI Image Generator",
            description: "It is an attempt to clone DALL-E using MERN stack",
            imgUrl: projImg1,
            link: "https://github.com/NarsipuraAbhinav/AI-Image-Generartor"
        },
        // Add other projects for Tab 1
    ];

    const project2 = [
        {   
            title: "Portfolio Website",
            description: "It is my portfolio website. It is a React website which is used to showcase my skills and projects.",
            imgUrl: projImg2,
            link: "https://github.com/NarsipuraAbhinav/git-portfolio"
        },
        // Add other projects for Tab 2
    ];

    const projects3 = [
        {   
            title: "Colorize Black and White Pictures",
            description: "A Deep Learning project in progress which turns black and white pictures into coloured pictures",
            imgUrl: projImg3,
            link: "https://github.com/NarsipuraAbhinav/Colorize-b-w-pictures"
        },
        // Add other projects for Tab 3
    ];

    return (
        <section className="project" id="project">
            <Container>
                <Row>
                    <Col size={12}>
                    <TrackVisibility>
                        {({isVisible}) => 
                        <div className={isVisible ? "animate__animated animate__slideInUp" : ""}>

                        <h2>Projects</h2>
                        <p>This section contains the description and links of the projects which I did.</p>
                        </div>}
                    </TrackVisibility>
                        <Tab.Container id="projects-tabs" defaultActiveKey="first">
                            <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                            <Nav.Item>
                            <Nav.Link eventKey="first">Tab 1</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                            <Nav.Link eventKey="second">Tab 2</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                            <Nav.Link eventKey="third">Tab 3</Nav.Link>
                            </Nav.Item>
                            </Nav>
                            <Tab.Content>
                <Tab.Pane eventKey="first">
                    <Row>
                        {project1.map((project, index) => (
                            <ProjectCard key={index} {...project} />
                        ))}
                    </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="second">
                    <Row>
                        {project2.map((project, index) => (
                            <ProjectCard key={index} {...project} />
                        ))}
                    </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="third">
                    <Row>
                        {projects3.map((project, index) => (
                            <ProjectCard key={index} {...project} />
                        ))}
                    </Row>
                </Tab.Pane>
            </Tab.Content>
                        </Tab.Container>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-right" src={colorSharp2} alt="" />
        </section>
    )
}