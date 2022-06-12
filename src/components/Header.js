import { Container, Navbar } from 'react-bootstrap';
import './style.css';

const Header = () => {
    return (
      <Navbar className="shadow-lg py-3">
        <Container>
          <h5 href="#home" className="fw-bold logo">
            ATools<span className="fw-bold text-danger">.</span>
          </h5>
          {/* <Navbar.Toggle /> */}
          <Navbar.Collapse className="justify-content-end">
            <button className="custom-btn border-0 trial-btn me-3 d-none d-md-block">
              Start Free Trial
            </button>
            <button className="custom-btn border-0 login-btn me-3 d-none d-md-block">
              Login
            </button>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
};

export default Header;