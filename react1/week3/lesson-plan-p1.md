# Lesson Plan - User Interaction

## Adding Event Handlers (15 minutes)

In React.js, you can handle events in a similar way to javascript. Here is an example:

```jsx
'use client'

export default function EventHandlerExample() {
  // Separate function
  const handleClick = () => {
    e.preventDefault()
    // Handle click event
  }

  // Separate function
  const handleClickArg = (arg) => {
    console.log(arg)
    // Handle click event
  }


  return (
    <div>
      {/* Inline event handler */}
      <button onClick={handleClick}>Click me</button>

      {/* Passing arguments */}
      <button onClick={() => handleClickArg("My argument")}>Click me</button>
    </div>
  )
}
```

## Managing Form Inputs (15 minutes)

React.js allows you to manage form inputs using state and controlled components.

```jsx
'use client'
import { useState } from 'react'

const Form = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Name"
      />
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
      />
      <button type="submit">Submit</button>
    </form>
  )
}
```

## Keeping Components Pure (15 minutes)

In React.js, it's important to keep your components pure and predictable. Pure functions are functions that, given the same inputs, will always return the same output, and have no side effects.

```jsx
// Pure component
const PureComponent = ({ count }) => {
  return <div>Count: {count}</div>
}

// Impure component (has side effects)
const ImpureComponent = () => {
  const [count, setCount] = useState(0)

  useEffect(() => {
    // Side effect: Updating document title
    document.title = `Count: ${count}`
  }, [count])

  return (
    <div>
      <div>Count: {count}</div>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  )
}
```

## Exercises

### Create a ClickCounter component (10 minutes)

1. Create a new component called `ClickCounter`.
2. Use the `useState` hook to manage a `count` state variable.
3. Implement an `onClick` event handler function that increments the `count`.
4. Render a button and display the current value of `count`.

### Build a SimpleForm component (15 minutes)

1. Create a new component called `SimpleForm`.
2. Use the `useState` hook to manage the state of form inputs.
3. Create input fields for the form (e.g., name, email, message).
4. Implement a `handleSubmit` function to handle form submission.
5. Render the form inputs and a submit button.

### Develop a TodoList component (20 minutes)

1. Create a new component called `TodoList`.
2. Use the `useState` hook to manage an array of todo items.
3. Implement a function to add a new todo item to the array.
4. Implement a function to remove a todo item from the array.
5. Render a list of todo items using the `.map` method, ensuring each item has a unique `key` prop.
6. Render an input field to add new todos and buttons/functionality to remove todos.