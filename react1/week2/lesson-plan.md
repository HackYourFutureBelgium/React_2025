# Lesson Plan - Building components

## Returning JSX (10 minutes)

### JSX Syntax and Rules

JSX is a syntax extension to JavaScript that allows you to write HTML-like code in your JavaScript files. It's a way to describe what the UI should look like using a syntax that is familiar to developers who have worked with HTML.

```jsx
const element = <h1>Hello, World!</h1>;
```

### Single Root Element Requirement

In JSX, you can only return a single root element. If you want to return multiple elements, you need to wrap them in a parent element or use a fragment.

```jsx
// Invalid JSX (multiple root elements)
const elements = (
  <div>Hello</div>
  <div>World</div>
);

// Valid JSX (single root element)
const elements = (
  <div>
    <div>Hello</div>
    <div>World</div>
  </div>
);
```

### Fragments

Fragments allow you to return multiple elements without a parent element. They are represented by an empty tag `<>...</>` or the `React.Fragment` syntax.

```jsx
// Using an empty tag
const elements = (
  <>
    <div>Hello</div>
    <div>World</div>
  </>
);

// Using React.Fragment
const elements = (
  <React.Fragment>
    <div>Hello</div>
    <div>World</div>
  </React.Fragment>
);
```

## Writing your first static component (10 minutes)

### Creating a Functional Component

In React, you can create functional components using JavaScript functions. These components are lightweight and easy to understand.

```jsx
function HelloWorld() {
  return <h1>Hello, World!</h1>;
}

export default HelloWorld;
```

### Returning JSX from a Component

Components in React must return JSX, which represents the UI that the component should render.

```jsx
function HelloWorld() {
  return (
    <div>
      <h1>Hello, World!</h1>
      <p>This is a React component.</p>
    </div>
  );
}

export default HelloWorld;
```

## Reusing components inside components (10 minutes)

### Component Composition

In React, you can create complex UIs by composing smaller components together. This promotes code reusability and makes it easier to reason about your application.

```jsx
import Header from '@/components/Header';
import Content from '@/components/Content';
import Footer from '@/components/Footer';

function App() {
  return (
    <section>
      <Header />
      <Content />
      <Footer />
    </section>
  );
}

export default App;
```

### Passing Children to Components

You can pass content (JSX elements) as children to a component, allowing for more flexibility and reusability.

```jsx
function Card({ children }) {
  return (
    <div className="card">
      {children}
    </div>
  );
}

function App() {
  return (
    <Card>
      <h2>Card Title</h2>
      <p>Card content goes here.</p>
    </Card>
  );
}

export default App;
```

## {} to execute JS inside JSX (10 minutes)

### Embedding Expressions in JSX

You can embed JavaScript expressions inside JSX by wrapping them in curly braces `{}`. This allows you to dynamically render content based on variables, function calls, or any valid JavaScript expression.

```jsx
function Greeting() {
  const greetingMessage = `Hello there!`;

  return <h1>{greetingMessage}</h1>;
}

function App() {
  return <Greeting />;
}

export default App;
```

### Conditional Rendering

You can use JavaScript expressions and conditional statements inside JSX to conditionally render components or elements.

```jsx

const isLoggedIn = true;

function Greeting() {
  return (
    <div>
      {isLoggedIn ? (
        <h1>Welcome back!</h1>
      ) : (
        <h1>Please log in.</h1>
      )}
    </div>
  );
}

function App() {
  return <Greeting />;
}

export default App;
```

### Rendering Lists

You can use the `map` function to render lists of elements in JSX.

```jsx
const items = [
  { id: 1, name: 'Item 1' },
  { id: 2, name: 'Item 2' },
  { id: 3, name: 'Item 3' },
];

function List() {
  return (
    <ul>
      {items.map((item) => (
        <li key={item.id}>{item.name}</li>
      ))}
    </ul>
  );
}

export default List;
```

## e. Setting properties such as className, value, etc. (5 minutes)

### HTML Attributes in JSX

In JSX, you can set HTML attributes on elements just like you would in regular HTML. However, there are some differences in naming conventions and syntax.

```jsx
function Input() {
  return (
    <input
      type="text"
      placeholder="Enter your name"
      value=""
    />
  );
}

export default Input;
```

### Differences between HTML and JSX Attributes

In JSX, some HTML attributes have different names due to naming conflicts with JavaScript reserved words. For example, the `class` attribute in HTML becomes `className` in JSX.

```jsx
import React from 'react';

function Card() {
  return (
    <div className="card">
      <h2 className="card-title">Card Title</h2>
      <p className="card-content">Card content goes here.</p>
    </div>
  );
}

export default Card;
```

Generally, in JSX, you need to use camelCase for attributes that are written in kebab-case in HTML (e.g., `tabIndex` instead of `tabindex`).

## Exercise

1. Add an id to the todo list objects to deal with the key error
2. Add a method to delete a todo by using an input field to enter the id to be deleted.

### Counter

First understand the code in this component:

```js
function WatchCount() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setCount((prev) => prev + 1);
    }, 1000);
  });

  return <div>{count}</div>;
}
```

Now extend it with the following features:

- Add a button that decrements the counter. What is observed?
- Add a button that resets the counter to 0
- Add a text input field and start typing in a long story. What is observed?

### Extra

- A button that pauses the counter
  - Clicking it should change the text so it says `start`. Clicking the button now should start the timer again and change the text to `pause`
  - Also, the counter should stop immediately. Hint : you need to return a clean up function from useEffect
- An input field that lets you set the speed of the counter. The speed should be reflected immediately on keypress and the counter should pause when entering invalid input.
