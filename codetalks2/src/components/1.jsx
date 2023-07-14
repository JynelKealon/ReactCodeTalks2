// Import the React library
import React from "react";

// Create a component to render a button
// The component accepts props to dynamically customize its behavior
const MyButton = (props) => {
// Use props.title to display the button text
// The curly braces indicate that JavaScript is being returned in JSX
// In the parent component (App.js), the prop "title" will be assigned and passed to this component for rendering
return <button>{props.title}</button>;
};

export default MyButton;

// Understanding Props:
// Props allow data to be passed from a parent component to its child component.
// In React, props are used to customize and configure child components.
// Child components can receive props from their parent components and use them to dynamically render content.

