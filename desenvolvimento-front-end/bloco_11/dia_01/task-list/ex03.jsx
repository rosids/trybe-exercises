// 3.1 - Create a Simple JSX Element
const JSX = <h1>Hello JSX!</h1>;

// 3.2 - Create a Complex JSX Element
const JSX2 = (
  <div>
      <h1>Lista de tarefas</h1>
      <p>Itens:</p>
      <ul>
         <li>Acordar</li>
         <li>Estudar</li>
         <li>Dormir</li> 
      </ul>
  </div>
);

// 3.3 - Add Comments in JSX
const JSX3 = (
  <div>
    <h1>This is a block of JSX</h1>
    {/* Comentário */}
    <p>Here's a subtitle</p>
  </div>
);


// 3.4 - Render HTML Elements to the DOM
const JSX4 = (
  <div>
    <h1>Hello World</h1>
    <p>Lets render this to the DOM</p>
  </div>
);
// Change code below this line
ReactDOM.render(JSX, document.getElementById('challenge-node'));


// 3.5 - Define an HTML Class in JSX
const JSX5 = (
  <div className="myDiv">
    <h1>Add a class to this div</h1>
  </div>
);

// 3.6 - Learn About Self-Closing JSX Tags
const JSX6 = (
  <div>
    <h2>Welcome to React!</h2> <br />
    <p>Be sure to close all tags!</p>
    <hr />
  </div>
);


// 3.7 - Create a Stateless Functional Component
const MyComponent = function() {
  // Change code below this line
  return <div>Alguma string</div>
  // Change code above this line
}

// 3.8 - Create a React Component
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    // Change code below this line
    return (
      <div>
        <h1>Hello React!</h1>
      </div>
    );
    // Change code above this line
  }
};

// 3.9 - Create a Component with Composition
const ChildComponent = () => {
  return (
    <div>
      <p>I am the child</p>
    </div>
  );
};

class ParentComponent extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1>I am the parent</h1>
        { /* Change code below this line */ }
        <ChildComponent />

        { /* Change code above this line */ }
      </div>
    );
  }
};