# Lesson Plan - State

## Introduction to State (10 minutes)

### What is state and when to use it

State is a JavaScript object that represents the internal data of a component. It allows components to manage and store their own data, which can change over time in response to user interactions, API calls, or other events. State is used when you need to store and manage data that is specific to a particular component instance.

### Differences between props and state

- `props` (short for properties) are used to pass data from a parent component to a child component. They are immutable and cannot be modified by the child component.
- `state` is used to manage data within a component. It is mutable and can be updated by the component itself.

## useState Hook Syntax (10 minutes)

### Introduction to hooks

Hooks are functions that allow you to use React features (like state) without writing a class component. They were introduced in React 16.8 and provide a more straightforward way to manage state and lifecycle methods in functional components.

### How to declare and use state with useState

The `useState` hook is used to declare and manage state in functional components. Keep in mind useState can only be used in client-side components, and so we need `"use client"` at the top of the file. Client-side components are rendered in the browser only, which is what we want for now.

```jsx
"use client" // Ensure that this component renders on the client-side
import { useState } from 'react';

export default function MyComponent() {
  const [count, setCount] = useState(0); // Declare state variable 'count' with initial value 0

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}
```

In the example above, `count` is the state variable, and `setCount` is a function that updates the `count` state. The `useState` hook returns an array with two elements: the current state value and a function to update it.

## Updating State Arrays (5 minutes)

### Immutability when updating arrays

When updating state arrays in React, it's important to follow the principle of immutability. This means creating a new array instead of modifying the existing one. Mutating state directly can lead to unexpected behavior and performance issues.

### Using spread operator and map function

The spread operator (`...`) and the `map` function are commonly used to create new arrays based on existing ones while preserving immutability.

```jsx
"use client"
import { useState } from 'react';

export default function MyComponent() {
  const [items, setItems] = useState(['apple', 'banana']);

  const addItem = () => {
    setItems([...items, 'orange']); // Create a new array with the existing items and a new item
  };

  const removeItem = (index) => {
    setItems(items.filter((item, i) => i !== index)); // Create a new array without the removed item
  };

  return (
    <div>
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            {item}
            <button onClick={() => removeItem(index)}>Remove</button>
          </li>
        ))}
      </ul>
      <button onClick={addItem}>Add Item</button>
    </div>
  );
}
```

## Updating State Objects (5 minutes)

### Immutability when updating objects

Similar to arrays, when updating state objects in React, it's important to follow the principle of immutability by creating a new object instead of modifying the existing one.

### Using spread operator for object updates

The spread operator (`...`) can be used to create a new object based on an existing one while preserving immutability.

```jsx
"use client"
import { useState } from 'react';

export default function MyComponent() {
  const [person, setPerson] = useState({ name: 'John', age: 30 });

  const updateName = () => {
    setPerson({ ...person, name: 'Jane' }); // Create a new object with the updated name
  };

  const incrementAge = () => {
    setPerson({ ...person, age: person.age + 1 }); // Create a new object with the incremented age
  };

  return (
    <div>
      <p>Name: {person.name}</p>
      <p>Age: {person.age}</p>
      <button onClick={updateName}>Update Name</button>
      <button onClick={incrementAge}>Increment Age</button>
    </div>
  );
}
```

## React Re-rendering Triggers (5 minutes)

### What causes React to re-render components

React re-renders a component whenever its state or props change. This ensures that the component's UI is always up-to-date with the latest data.

### The importance of immutability

Following the principle of immutability when updating state or props is crucial for React's performance optimization. When you create new objects or arrays instead of modifying existing ones, React can efficiently compare the old and new values and re-render only the components that have changed.

## Multiple State Updates (5 minutes)

### How React batches state updates

React batches multiple state updates together for better performance. This means that if you have multiple state updates happening in the same event handler or lifecycle method, React will batch them together and perform a single re-render.

### Using functional updates for consecutive state changes

When you need to update state based on the previous state value, it's recommended to use the functional update form of the state updater function. This ensures that the state updates are applied correctly, even if they are batched together.

```jsx
"use client"
import { useState } from 'react';

export default function MyComponent() {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount((prevCount) => prevCount + 1); // Functional update form
    setCount((prevCount) => prevCount + 1); // These two updates will be batched together
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={incrementCount}>Increment</button>
    </div>
  );
}
```

## Sharing State via Parent (5 minutes)

### Lifting state up

In React, when multiple components need to share and update the same state, it's common to lift the state up to the closest common ancestor component. This ancestor component will manage the shared state and pass it down to the child components as props.

### Passing state and updater functions as props

The parent component can pass down the shared state and the function to update it as props to the child components.

```jsx
"use client"
import { useState } from 'react';

function ParentComponent() {
  const [sharedState, setSharedState] = useState('initial value');

  const updateSharedState = (newValue) => {
    setSharedState(newValue);
  };

  return (
    <div>
      <ChildComponent sharedState={sharedState} updateSharedState={updateSharedState} />
      {/* Other child components that need to access sharedState */}
    </div>
  );
}

function ChildComponent({ sharedState, updateSharedState }) {
  const handleUpdate = () => {
    updateSharedState('new value');
  };

  return (
    <div>
      <p>Shared State: {sharedState}</p>
      <button onClick={handleUpdate}>Update Shared State</button>
    </div>
  );
}
```

In this example, the `ParentComponent` manages the `sharedState` and provides it along with the `updateSharedState` function to the `ChildComponent`. The child component can then access and update the shared state using the props passed down from the parent.

## Exercises
