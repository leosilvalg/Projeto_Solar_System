import React from 'react';
import Title from './Title';

class SolarSystem extends React.Component {
  render() {
    return (
      <section>
        <div data-testid="solar-system">Sistema Solar</div>
        <Title headline="Planetas" />
      </section>
    );
  }
}

export default SolarSystem;
