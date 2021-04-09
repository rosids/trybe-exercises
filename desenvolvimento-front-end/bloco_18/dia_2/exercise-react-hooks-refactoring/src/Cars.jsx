import React, { useContext } from 'react';
import CarsContext from './context/CarsContext';
import carBlue from './images/carBlue.jpeg';
import carRed from './images/carRed.jpeg';
import carYellow from './images/carYellow.jpeg';

function Cars() {
    const { cars, moveCar } = useContext(CarsContext);
    const { redCar, blueCar, yellowCar } = cars;

    return (
      <main>
        <section>
          <img
            className={redCar ? 'car-right' : 'car-left'}
            src={carRed}
            alt="red car"
          />
          <button
            onClick={() => moveCar('redCar', !redCar)}
            type="button"
          >
            Move
          </button>
        </section>
        <section>
          <img
            className={blueCar ? 'car-right' : 'car-left'}
            src={carBlue}
            alt="blue car"
          />
          <button
            onClick={() => moveCar('blueCar', !blueCar)}
            type="button"
          >
            Move
          </button>
        </section>
        <section>
          <img
            className={yellowCar ? 'car-right' : 'car-left'}
            src={carYellow}
            alt="yellow car"
          />
          <button
            onClick={() => moveCar('yellowCar', !yellowCar)}
            type="button"
          >
            Move
          </button>
        </section>
      </main>
    )
  }

Cars.contextType = CarsContext;

export default Cars;
