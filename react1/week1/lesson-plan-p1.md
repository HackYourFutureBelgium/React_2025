# Lesson Plan - Thinking in React

## Why React.js / Next.js? (10 minutes)

### Brief overview of React and its limitations

React is a popular JavaScript library for building user interfaces. It introduced the concept of component-based architecture, making it easier to create reusable UI components. However, React is primarily focused on the client-side rendering of web applications, which can lead to longer initial load times and poor SEO performance.

### Introduction to Next and its limitations

Next.js is a React framework that adds server-side rendering (SSR) capabilities to React applications. It allows you to pre-render pages on the server, improving initial load times and SEO performance. Next.js also provides features like static site generation, file-based routing, and API routes out of the box. However, having all of these features out of the box makes it more opinionated, as it has rigid constraints on how things are done.

## Thinking in Components (15 minutes)

### Concept of component-based architecture

In a component-based architecture, the user interface is broken down into reusable components. Each component encapsulates its own logic, state, and presentation, making it easier to reason about and maintain the codebase.

### Breaking down UI into reusable components

When building a user interface with React or Next.js, it's essential to identify the different components that make up the UI. For example, a typical web page might have components like a header, navigation menu, content area, and footer.

### Hierarchy and composition of components

Components can be nested and composed together to create more complex UI structures. Parent components can pass data down to child components through props, and child components can communicate back to parent components through callbacks or state management solutions like React Context or Redux.

## Creating and running a Next.js app (10 minutes)

### Setting up a new Next.js project

To create a new Next.js project, you can use the `create-next-app` command provided by [the React.js team](https://react.dev/learn/start-a-new-react-project):

```bash
npx create-next-app@latest
```

This will set up a new Next.js project with the necessary dependencies and a basic file structure.

### Project structure overview

A typical Next.js project structure looks like this:

```
my-app/
├── node_modules/
├── app/
│   ├── page.jsx
│   ├── layout.jsx
│   ├── globals.css
│   ├── favicon.ico
│   └── ...
├── components/
├── public/
├── .gitignore
├── next.config.js
├── jsconfig.json
├── package.json
└── package-lock.json
```

- `app/` directory contains the React components that represent different pages in your application.
- `components/` directory contains the React components that represent all the custom components built by you.
- `public/` directory is where you can store static assets like images, documents, etc.
- `next.config.js` is a configuration file for customizing Next.js behavior.

### Running the development server

To start the Next.js development server, run the following command:

```bash
npm run dev
```

This will start the development server and automatically reload the application when you make changes to the code.

## Importing/exporting .jsx (5 minutes)

### Explanation of JSX files

In React and Next.js, components are typically defined in `.jsx` files, which allow you to write HTML-like syntax (JSX) alongside JavaScript code.

### How to import and export components

To use a component in another file, you need to export it from the file where it's defined and import it in the file where you want to use it.

```jsx
// my-app/components/MyComponent.jsx
export default function MyComponent() {
  return <div>Hello, World!</div>;
}
```

```jsx
// my-app/app/page.js
import MyComponent from '@/components/MyComponent';

function Home() {
  return (
    <div>
      <MyComponent />
    </div>
  );
}
```

## Importing .css (5 minutes)

### Global styles vs. component-specific styles

In Next.js, you can import global CSS styles by creating a file (e.g., `globals.css`) and importing it in the `layout.js` file, which is the root component of your Next.js application.

For component-specific styles, you can use CSS modules, which are scoped to the component where they are imported.

### CSS modules in Next.js

To use CSS modules in Next.js, create a `.module.css` file and import it into your component file.

```css
/* mycomponent.module.css */
.container {
  padding: 1rem;
  background-color: #f0f0f0;
}
```

```jsx
// MyComponent.jsx
import styles from './mycomponent.module.css';

export default function MyComponent() {
  return <div className={styles.container}>Hello, World!</div>;
}
```

In this example, the `container` class is scoped to the `MyComponent` component, preventing naming conflicts with other components in the application.

## Exercises

### Set up a new Next.js project (10 minutes)

### Create a simple component structure (20 minutes)

- Design a basic layout with header, main content, and footer
- Create separate components for each section

### Import and use components (10 minutes)

- Import components into the main page
- Arrange components to create the layout

### Add basic styling (5 minutes)

- Create a global CSS file
- Import and apply styles to components