// src/Cars.jsx

import React, { useContext } from 'react';
import CarsContext from './context/CarsContext';
import carBlue from './images/carBlue.jpeg';
import carRed from './images/carRed.jpeg';
import carYellow from './images/carYellow.jpeg';

function Cars() {
  const { cars, moveCard } = useContext(CarsContext);
  const { red, blue, yellow } = cars;

  return (
    <main>
      <section>
        <img src={ carRed } alt="red car" className={ red ? 'car-right' : 'car-left' } />
        <button type="button" onClick={ () => moveCard('red', !red) }>
          Move
        </button>
      </section>
      <section>
        <img
          src={ carBlue }
          alt="blue car"
          className={ blue ? 'car-right' : 'car-left' }
        />
        <button type="button" onClick={ () => moveCard('blue', !blue) }>
          Move
        </button>
      </section>
      <section>
        <img
          src={ carYellow }
          alt="yellow car"
          className={ yellow ? 'car-right' : 'car-left' }
        />
        <button type="button" onClick={ () => moveCard('yellow', !yellow) }>
          Move
        </button>
      </section>
    </main>
  );
}

export default Cars;
