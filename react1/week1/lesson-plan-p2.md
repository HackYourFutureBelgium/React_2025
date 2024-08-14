# Lesson Plan - JSX

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

export default function App() {
  return (
    <section>
      <Header />
      <Content />
      <Footer />
    </section>
  );
}
```

## {} to execute JS inside JSX (10 minutes)

### Embedding Expressions in JSX

You can embed JavaScript expressions inside JSX by wrapping them in curly braces `{}`. This allows you to dynamically render content based on variables, function calls, or any valid JavaScript expression.

```jsx
export default function Greeting() {
  const greetingMessage = `Hello there!`;

  return <h1>{greetingMessage}</h1>;
}
```

### Conditional Rendering

You can use JavaScript expressions and conditional statements inside JSX to conditionally render components or elements.

```jsx
const isLoggedIn = true;

export default function Greeting() {
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
```

### Rendering Lists

You can use the `map` function to render lists of elements in JSX.

```jsx
const items = [
  { id: 1, name: 'Item 1' },
  { id: 2, name: 'Item 2' },
  { id: 3, name: 'Item 3' },
];

export default function List() {
  return (
    <ul>
      {items.map((item) => (
        <li key={item.id}>{item.name}</li>
      ))}
    </ul>
  );
}
```

## Setting properties such as className, value, etc. (5 minutes)

### HTML Attributes in JSX

In JSX, you can set HTML attributes on elements just like you would in regular HTML. However, there are some differences in naming conventions and syntax.

```jsx
export default function Input() {
  return (
    <input
      type="text"
      placeholder="Enter your name"
      value=""
    />
  );
}
```

### Differences between HTML and JSX Attributes

In JSX, some HTML attributes have different names due to naming conflicts with JavaScript reserved words. For example, the `class` attribute in HTML becomes `className` in JSX.

```jsx
export default function Card() {
  return (
    <div className="card">
      <h2 className="card-title">Card Title</h2>
      <p className="card-content">Card content goes here.</p>
    </div>
  );
}
```

Generally, in JSX, you need to use camelCase for attributes that are written in kebab-case in HTML (e.g., `tabIndex` instead of `tabindex`).

## Exercises

### Writing functions to return JSX (10 minutes)

- Write a JSX expression that renders an `h1` element with the text "Hello, World!".
- Write a JSX expression that renders a `div` element with two child elements: an `h2` element with the text "Welcome" and a `p` element with the text "This is a paragraph".
- Write a JSX expression that renders a `ul` element with three `li` elements, each containing a different fruit name.

### Writing static components (10 minutes)

- Create a functional component called `Greeting` that returns an `h1` element with the text "Hello, React!".
- Create a functional component called `Card` that returns a `div` element with a nested `h2` element and a `p` element. The `h2` should display the text "Card Title", and the `p` should display the text "This is a card component".

### Nesting components (10 minutes)

Create a functional component called `Cards` that renders two instances of the `Card` component you created in Exercise 5.

### Executing JS inside JSX (10 minutes)

Create a functional component called `FruitList` that renders a `ul` element with `li` elements for each fruit in an array of fruits. The array of fruits should be defined as a constant inside the component.

### Setting properties such as className and value (5 minutes)

- Create a functional component called `Button` that renders a `button` element with a `className` prop set to "btn btn-primary".
- Create a functional component called `Input` that renders an `input` element with a `value` prop set to "Initial value".
