# React useEffect Small Programs

This project contains small React examples to learn how `useEffect` works in real components. Each file focuses on a different use case, such as dependency arrays, cleanup logic, data fetching, and custom hooks.

## Learning Goals

- Understand when `useEffect` runs
- Learn how dependency arrays change behavior
- Learn how to clean up timers and subscriptions
- Handle loading and error states while fetching data
- Build reusable custom hooks

---

## 1) DependencyVariations.jsx

### What it demonstrates
This file shows the three main dependency-array patterns in `useEffect`:

- No dependency array: runs after every render
- Empty dependency array: runs once after mount
- A dependency list like `[count]`: runs when the value in the array changes

### Why it matters
This is the core concept behind `useEffect` timing. It helps you control when side effects should run and avoid unwanted repeated logic.

### Example behavior
- Clicking the button updates the `count` state
- The console logs show which effect runs and when
- Typing in the input field changes `text`, but only the effect depending on `count` runs when count changes

---

## 2) CleanupExample.jsx

### What it demonstrates
This file shows how to use the cleanup function inside `useEffect`.

A timer is created with `setInterval`, and the cleanup function clears it with `clearInterval`.

### Why it matters
Cleanup is important to prevent:

- memory leaks
- duplicate timers
- background tasks continuing after a component unmounts

### Example behavior
- The component toggles a timer on and off
- When the timer is unmounted, the cleanup function runs
- You can see the console logs showing when the interval is created and cleared

---

## 3) DataFetchingWithState.jsx

### What it demonstrates
This component fetches user data from an API and manages three states:

- loading
- data
- error

### Why it matters
When fetching data, you usually need to show a loading indicator first, then render the result or show an error if the request fails.

### Key points
- `loading` starts as `true`
- `fetch` is called inside `useEffect`
- `setUsers(data)` stores the response
- `setError(err.message)` handles failures
- An `isMounted` flag prevents updates after unmount

### Example behavior
- While the fetch is in progress, it displays “Loading users...”
- If the request succeeds, it renders the user list
- If the request fails, it shows an error message

---

## 4) useFetch.js

### What it demonstrates
This file creates a custom hook named `useFetch`.

It wraps the fetch logic so components can reuse a consistent loading/error/data pattern.

### Why it matters
Custom hooks let you extract repeated logic from components, making code cleaner and easier to reuse.

### Hook behavior
- accepts a `url`
- starts with `data = null`
- sets `loading = true`
- fetches the data
- stores the result in `data`
- sets `error` if the request fails
- also guards against state updates after unmount

### Return value
The hook returns:

```js
{ data, loading, error }
```

This makes it easy to use in components like this:

```js
const { data, loading, error } = useFetch('/api/posts');
```

---

## 5) useLocalStorage.js

### What it demonstrates
This file creates a custom hook called `useLocalStorage`.

It stores a value in the browser’s localStorage and keeps the React state synchronized with it.

### Why it matters
It is useful for saving user settings, preferences, form values, or other small persistent data without needing a backend.

### Hook behavior
- reads the value from `localStorage` on initial render
- if no value exists, it uses the provided default value
- whenever the state changes, it saves the new value back to `localStorage`

### Example usage
```js
const [name, setName] = useLocalStorage('user_name', 'Alex');
```

This keeps the value persistent across page reloads.

---

## 6) CustomHooksDemo.jsx

### What it demonstrates
This component combines both custom hooks:

- `useLocalStorage` for a persisted name field
- `useFetch` for loading posts from an API

### Why it matters
This file shows how reusable hooks simplify components. The component itself stays focused on rendering the UI, while the hook handles data storage and fetching logic.

### Example behavior
- The input field is bound to a value stored in localStorage
- The app fetches posts from `/api/posts`
- It shows a loading message while fetching
- It displays posts when available
- It shows an error message if the fetch fails

---

## Summary

Together, these files teach the key concepts behind `useEffect` in React:

- effect timing and dependency arrays
- cleanup functions
- async data fetching
- managing loading and error states
- reusing logic with custom hooks

These examples are excellent for understanding the fundamentals of side effects and React lifecycle behavior.

---

## Notes

These examples assume you are using them inside a React app where API endpoints such as `/api/users` and `/api/posts` are available or mocked. If you run them in a plain browser environment without a backend, you will need to replace those requests with real data sources or mock APIs.
