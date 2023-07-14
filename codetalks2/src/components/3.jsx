// Import the useState hook from the 'react' library
import { useState } from 'react';

// Declare and export a component named MyApp
export default function MyApp() {
  // Declare a state variable named 'count' and a function named 'setCount' to update it
  // The initial value of 'count' is set to 0 using the useState hook
  const [count, setCount] = useState(0);

  // Declare a function named 'handleClick' to handle the button click event
  // It calls 'setCount' to update the 'count' state by incrementing it by 1
  function handleClick() {
    setCount(count + 1);
  }

  // Render the component
  return (
    <div>
      <h1>Counters that update together</h1>
      <MyButton count={count} onClick={handleClick} />
      <MyButton count={count} onClick={handleClick} />
    </div>
  );
}

// Declare a component named MyButton that accepts 'count' and 'onClick' as props
function MyButton({ count, onClick }) {
  // Render a button element with a click event listener
  // The 'onClick' prop is assigned as the event handler
  // The text displays the current 'count' prop value
  return (
    <button onClick={onClick}>
      Clicked {count} times
    </button>
  );
}
