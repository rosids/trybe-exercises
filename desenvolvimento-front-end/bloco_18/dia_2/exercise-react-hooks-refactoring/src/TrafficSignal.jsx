import React, { useContext } from 'react';
import CarsContext from './context/CarsContext';
import redSignal from './images/redSignal.jpeg';
import yellowSignal from './images/yellowSignal.jpeg';
import greenSignal from './images/greenSignal.jpeg';

const renderSignal = (signalColor) => {
  if (signalColor === 'red') return redSignal;
  if (signalColor === 'yellow') return yellowSignal;
  if (signalColor === 'green') return greenSignal;
  return null;
};

function TrafficSignal() {
  const { signal, changeSignal } = useContext(CarsContext);
  const { color } = signal;

  return (
    <section>
      <section className="button-container">
        <button type="button" onClick={ () => changeSignal('red') }>Red</button>
        <button type="button" onClick={ () => changeSignal('yellow') }>Yellow</button>
        <button type="button" onClick={ () => changeSignal('green') }>Green</button>
      </section>
      <img src={ renderSignal(color) } alt="Signal" className="signal" />
    </section>
  );
}

export default TrafficSignal;
