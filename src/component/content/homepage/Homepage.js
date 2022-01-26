import React, { useState } from "react";
import ReactDOM from "react-dom";
import './Homepage.scss';
import {Alert ,Button} from 'react-bootstrap';


function Homepage() {
  const [show, setShow] = useState(true);
  if (show) {

    return (
      <section className="Homepage">
        <Alert variant="danger" onClose={() => setShow(false)} dismissible>
          <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
          <p>
            Change this and that and try again. Duis mollis, est non commodo
            luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.
            Cras mattis consectetur purus sit amet fermentum.
          </p>
        </Alert>
      </section>
    );
  }
  return <Button onClick={() => setShow(true)}>Show Alert</Button>;
}
  export default Homepage;
