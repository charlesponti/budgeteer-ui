import React from 'react';

import { Row, Col } from 'reactstrap';

function Content() {
  return (
    <div className="my-5">
      <Row className="d-flex justify-content-between">
        <Col md={5} className="mb-4">
          <h6 className="mb-3">
            Column Three
          </h6>
        </Col>
        <Col md={5} className="mb-4">
          <h6 className="mb-3">
            Column Two
          </h6>
        </Col>
        <Col md={5} className="mb-4">
          <h6 className="mb-3">
            Column One
          </h6>
        </Col>
      </Row>
    </div>
  );
}

export default Content;
