import React, {
  Component
} from 'react';
import {
  Container
} from 'reactstrap';
import Section from '../../sections/Section';

class ServiceNbn extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <Section className="main-section bg-maze">
        <Container>
          <div>ServiceNBN</div>
        </Container>
      </Section>
    );
  }
}

export default ServiceNbn;
