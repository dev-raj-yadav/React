import React from "react";
import ReactDOM from "react-dom/client";

//JSX (transpiled before   it reached the JS)

//JSX =>Babel Transpile it to   React.createElement => RectElement -JS object => rendered to HTMLElement(render)

const elem = <span> React Element </span>;
const Title = () => (
  <h1 className="head" tabIndex="5">
    Namaste React Using jsx
  </h1>
);

const HeadingComponent = () => (
  <div id="container">
    <Title />

    <h1 className="heading"> Namaste React Functional Componenets</h1>
  </div>
);
const title = 1000;

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent />);
