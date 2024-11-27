import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Outlet, Link } from "react-router-dom";
import Header from './Header';
import Footer from './Footer';

const Layout = () => {
  return (
    <>
      {/* <Container>
        <Row>
          <Col> */}
      <div className="hero_area">
        <Header />
        <Outlet />
        <Footer />
        {/* </Col>
        </Row>
      </Container> */}
      </div>

    </>
  )
};

export default Layout;