# Lesson Plan - Hooks

## Introduction to Hooks

Hooks are functions that allow you to use React features (like state and lifecycle methods) in functional components. They were introduced in React 16.8 to address the limitations of switching from class to functional components and provide a more straightforward and flexible way to manage component logic.

### Rules of Hooks

1. Hooks can only be called at the top level of a React function component or a [custom Hook](https://react.dev/learn/reusing-logic-with-custom-hooks).
2. Hooks cannot be called inside loops, conditions, or nested functions.
3. Hooks are only used in client-side components (so `"use client"` is necessary whenever one is used)

```jsx
'use client' // Use client directive for components using React hooks
import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
```

## Lifecycle and useEffect

In React, components go through different lifecycle stages, such as mounting, updating, and unmounting. The `useEffect` hook allows you to perform side effects (like data fetching, subscriptions, or manually changing the DOM) in functional components.

### Usage of `useEffect`

```jsx
'use client'
import { useState, useEffect } from 'react';

function Timer() {
  const [time, setTime] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(prevTime => prevTime + 1);
    }, 1000);

    return () => clearInterval(interval); // Cleanup function
  }, []); // Dependency array

  return <div>Time: {time}</div>;
}
```

The dependency array in `useEffect` determines when the effect should be re-run. An empty array `[]` means the effect will only run once, on component mount and unmount.

## Cleanup after Effect (10 minutes)

Sometimes, you need to clean up resources (like timers, subscriptions, or event listeners) when a component unmounts or when the effect is re-run due to a change in dependencies.

### Implementing cleanup in `useEffect`

```jsx
'use client'
import { useState, useEffect } from 'react';

function MouseTracker() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div>
      Mouse position: ({position.x}, {position.y})
    </div>
  );
}
```

The cleanup function returned by `useEffect` will be called before the effect is re-run or when the component unmounts.

## Connecting to APIs (10 minutes)

The `useEffect` hook is commonly used for fetching data from APIs in functional components before rendering content.

```jsx
'use client';

import { useState, useEffect } from 'react';

function UserProfile({ userId }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await fetch(`/api/users/${userId}`);
        const data = await response.json();
        setUser(data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, [userId]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      <h2>{user.name}</h2>
      <p>Email: {user.email}</p>
      {/* ... */}
    </div>
  );
}
```

In this example, `useEffect` is used to fetch user data from an API when the component mounts or when the `userId` prop changes. The component also handles loading and error states.

## Exercises