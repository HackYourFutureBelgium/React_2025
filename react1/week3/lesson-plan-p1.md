# Lesson Plan - User Interaction

## Adding Event Handlers (15 minutes)

In React.js, you can handle events in a similar way to javascript. Here are some examples:

```jsx

// Inline event handler
<button onClick={handleClick}>Click me</button>

// 

```

```jsx
'use client'

export default function EventHandlerExample() {
  // Separate function
  const handleClick = () => {
    e.preventDefault()
    // Handle click event
  }

  // Separate function
  const handleClickArgs = (arg) => {
    console.log(arg)
    // Handle click event
  }


  return (
    <div>
      {/* Inline event handler */}
      <button onClick={handleClick}>Click me</button>

      {/* Passing arguments */}
      <button onClick={() => handleClick("My argument")}>Click me</button>
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
