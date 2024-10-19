import { useState } from "react";

function Counter() {
  return (
    <div>
      <Header />
      <CounterComponent />
    </div>
  );
}

function Header() {
  return (
    <h1 style={{ display: "flex", justifyContent: "center" }}>
      Basic Counter with Date
    </h1>
  );
}

function CounterComponent() {
  const [counter, setCounter] = useState(0);

  const date = new Date("19 October 2024");
  date.setDate(date.getDate() + counter);

  function handleIncrement() {
    setCounter((c) => c + 1);
  }

  function handleDecrement() {
    if (counter > 0) {
      setCounter((c) => c - 1);
    }
  }

  return (
    <>
      <Button onClick={handleDecrement}>-</Button>
      <p>
        <strong>Counter</strong> : {counter}
      </p>
      <Button onClick={handleIncrement}>+</Button>
      <div>
        <h2>Date : {date.toDateString()}</h2>
      </div>
    </>
  );
}

function Button({ children, onClick }) {
  return <button onClick={onClick}>{children}</button>;
}

export default Counter;
