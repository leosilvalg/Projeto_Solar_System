import React from 'react';
import Title from './Title';
import planets from '../data/planets';
import PlanetCard from './PlanetCard';

class SolarSystem extends React.Component {
  render() {
    return (
      <section>
        <div data-testid="solar-system">
          <Title headline="Planetas" />
          {planets.map(((planet) => (<PlanetCard
            key={ planet.index }
            planetName={ planet.name }
            planetImage={ planet.image }
          />)))}
        </div>
      </section>
    );
  }
}

export default SolarSystem;
