import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Navbar from "react-bootstrap/Navbar";
import styles from "../styles/navbar.module.css";

export default function NavBar() {
  return (
    <Navbar
      bg="dark"
      variant="dark"
      expand="lg"
      fixed="top"
      className={styles.navbar}
    >
      <Container>
        <Col lg={4}>
          <Navbar.Brand href="/">Marketing Freaks</Navbar.Brand>
        </Col>
        <Col lg={8}>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav fill>
              <NavDropdown
                title={<span className={styles.dropdown}>Services</span>}
                className={styles.dropdown}
              >
                <NavDropdown.Item href="/">
                  Influencer marketing
                </NavDropdown.Item>
                <NavDropdown.Item href="/">
                  Social media marketing
                </NavDropdown.Item>
                <NavDropdown.Item href="/">Email marketing</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="/">Other marketing</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="/" className={styles.links}>
                TikTok
              </Nav.Link>
              <Nav.Link href="/about" className={styles.links}>
                About
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Col>
      </Container>
    </Navbar>
  );
}
