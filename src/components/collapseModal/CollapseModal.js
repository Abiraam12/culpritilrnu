import React, { useState } from 'react';
import { Collapse, Button, CardBody, Card } from 'reactstrap';

const CollapseModal = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      
      <Collapse isOpen={props.isOpen}>
            <div>
              <h1>collapse</h1>
            </div>
      </Collapse>
    </div>
  );
}

export default CollapseModal;