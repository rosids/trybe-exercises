import React from 'react';

const task = (value) => {
  return (
    <li>{value}</li>
  );
}

const tasks = ['Tomar café', 'Escovar os dentes', 'Estudar', 'Dormir'];

function App() {
  return (
    <div>
      <ul>{task('Acordar')}</ul>
      <ul>{tasks.map(task => <li>{ task }</li>)}</ul>
    </div>
  )
}

export default App;
