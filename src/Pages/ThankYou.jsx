import React from 'react';
import '../styles/thank.css';
import { Container, Row, Col, Button } from 'reactstrap';
import { Link } from 'react-router-dom';

const ThankYou = () => {
  const handleClick = () => {
    // Reload the page
    window.location.reload();
    window.location.replace("https://pages.razorpay.com/pl_Mk6KFlQswbw7xl/view");
  };

  return (
    <section>
      <Container>
        <Row>
          <Col lg='12' className='pt-5 text-center'>
            <div className="thank__you">
              <span><i className="ri-checkbox-circle-line"></i></span>
              <h1 className="mb-3 fw-semibold">Thank You</h1>
              <Button className='btn primary__btn w-23' onClick={handleClick}>
                <Link>Payment Section</Link>
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ThankYou;
