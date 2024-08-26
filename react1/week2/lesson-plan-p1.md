# Lesson Plan - Props

## Introduction to Props (10 minutes)

### What are props and why are they used?

Props (short for properties) are a way to pass data from a parent component to a child component in React. They allow you to make components dynamic and reusable by providing them with different data.

### Props as a way to make components dynamic and reusable

Consider a `Button` component that displays a label. Without props, the label would be hardcoded, making the component less reusable. With props, you can pass the label as a prop, allowing the component to be used in different contexts with different labels.

## Passing and Reading Props (10 minutes)

### How to pass props to components

Props are passed to components as attributes, similar to HTML attributes:

```jsx
<Button label="Click me" />
```

### Reading props using props.x syntax

Inside the component, you can access the props using the `props` object:

```jsx
function Button(props) {
  return <button>{props.label}</button>;
}
```

## Destructuring Props (5 minutes)

### ES6 destructuring syntax

ES6 introduced a cleaner way to access props using destructuring:

```jsx
function Button({ label }) {
  return <button>{label}</button>;
}
```

Destructuring makes your code more concise and easier to read, especially when dealing with multiple props.

## Immutability of Props (5 minutes)

### Why props should never be changed within components

Props are immutable, meaning they should never be modified within the component that receives them. This is a core principle of React and ensures that data flows in a single direction (from parent to child).

### The concept of one-way data flow in React

One-way data flow is a fundamental concept in React. Data flows from parent components to child components via props, but not the other way around. This makes it easier to reason about the application's state and prevents unintended side effects.

## Parsing JSX as Children Props (10 minutes)

### Using the children prop

In addition to regular props, React components can also receive children props, which represent the content between the opening and closing tags of a component.

```jsx
<Wrapper>
  <h1>Hello, World!</h1>
  <p>This is some content.</p>
</Wrapper>
```

### Creating wrapper components

Wrapper components are useful for adding additional functionality or styling to their children. They can access the children prop using `props.children`.

```jsx
function Wrapper({ children }) {
  return <div className="wrapper">{children}</div>;
}
```

## Conditional Rendering with Props (5 minutes)

### Using props to conditionally render content

Props can be used to conditionally render different content within a component. This is often done using ternary operators or logical AND (`&&`) in JSX.

```jsx
function Greeting({ isLoggedIn }) {
  return (
    <div>
      {isLoggedIn ? (
        <p>Welcome back!</p>
      ) : (
        <p>Please log in.</p>
      )}
    </div>
  );
}
```

```jsx
function Button({ label, disabled }) {
  return (
    <button disabled={disabled}>
      {label} {disabled && '(disabled)'}
    </button>
  );
}
```

## Exercises

### Create a reusable Button component (10 minutes)

1. Create a new component called `Button`.
2. Accept `text` and `onClick` as props.
3. Render a button element with the `text` prop as its content.
4. Attach the `onClick` prop to the button's `onClick` event handler.

### Create a Card component (15 minutes)

1. Create a new component called `Card`.
2. Accept `title`, `description`, and `imageUrl` as props.
3. Use destructuring to extract the props.
4. Render a card-like structure with the provided `title`, `description`, and `imageUrl`.

### Create a Layout component (10 minutes)

1. Create a new component called `Layout`.
2. Accept `children` as a prop.
3. Render a layout structure (e.g., header, main content area, footer) with the `children` prop rendered inside the main content area.

### Implement conditional rendering (10 minutes)

1. Create a new component called `ToggleContent`.
2. Accept a `show` prop as a boolean value.
3. Accept `content` as a prop, which can be a string or a React element.
4. Render the `content` prop only if the `show` prop is true, otherwise render a message or nothing.