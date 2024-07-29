# Lesson Plan - Thinking in React

## Why React.js / Next.js? (10 minutes)

### Brief overview of React

React is a popular JavaScript library for building user interfaces. It introduced the concept of component-based architecture, making it easier to create reusable UI components. It was released by Facebook in 2013 and has since then become [the most popular Javascript framework](https://www.geeksforgeeks.org/most-popular-javascript-frameworks-for-web-development/) due to its strong capabilities, performance, and ease of use.

### Introduction to Next.js
React in itself enforces very few rules on how you structure a design your project. However, more often than not when a projects grow they require us to handle similar challenges such as page routing, data fetching, and code splitting.

Luckily, several frameworks already exists which address these common challenges. It is [recommended to use one of the frameworks](https://react.dev/learn/start-a-new-react-project) to avoid having to solve these common challenges yourself. However, each framework have its own constraints on how things are done which makes them more opinionated. You should therefore pick the framework which best suits your needs and style of coding.  

In this module we will be using the framework *Next.js* which is one of the most popular React framework today. Other than solving the abovementioned challenges, Next.js also adds server-side rendering capabilities which can make your page load faster and improve search engine optimization (SEO) which makes your site more likely to be suggested by search engines like Google. 

## Thinking in Components (15 minutes)

### Concept of component-based architecture

In a component-based architecture, the user interface is broken down into reusable components similar to how we break up our Javascript code into reusable functions. Each component encapsulates its own logic, state, and presentation, making it easier to understand and maintain.

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

You will presented with a few options for the project you are generating. For this module we will use the following options:
| Option    | Value  |
| -------- | ------- |
| Project name  | Name of your project |
| Use TypeScript  | No  |
| Use ESLint      | Yes |
| Use Tailwind    | No  |
| Use `src/` directory  | No |
| Use App Router  | Yes |
| Customize import alias    | No |

This will set up a new Next.js project with the necessary dependencies and a basic file structure.


> [!NOTE]
> <details>
>  <summary>Understanding all the options are out of the scope for this module, but if you are interested you can read about it here</summary>
> - *[TypeScript](https://www.typescriptlang.org/)* is a superset of Javascript and introduces type checking which means it checks if the specified types match before running the code, not while running the code. It helps identifying errors early on.
> - *[ESLint](https://eslint.org/)* is an a tool which analyzes your code to ensure it follows good coding conventions. This helps keep the code clean and maintainable.
> - *[Tailwind CSS](https://tailwindcss.com/)* is a CSS framework which comes with a lot of utility classes to quickly add CSS styling to your components. It enables you to add styling without having to add most of the common CSS classes.
> - Using a `src/` directory is a common pattern to separate your source code from your configuration of the app. It can help you get a better overview of the project as it grows, but this option ultimately comes down to personal preference and won't affect your app.
> - *[App Router](https://www.freecodecamp.org/news/routing-in-nextjs/)* enables us to easily navigate between pages found in the `/app/pages/` folder. It is a build-in feature of Next.js and will solve most of your needs for page navigation.
> </details>





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

First make sure to navigate to your project folder in the terminal
```bash
cd my-app # replace 'my-app' with the name of your app
```

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
