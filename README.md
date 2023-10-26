# Toast-Qwik

🎉 Qwik-Toast allows you to add notifications to your app with ease. No more nonsense!

## Installation

```
$ npm install --save toast-qwik
$ yarn add toast-qwik
$ bun install toast-qwik
$ npm install toast-qwik 
```

## setting
_src/routes/layout.tsx_
```jsx
import { component$, Slot } from "@builder.io/qwik";
import { ToastProvider } from "toast-qwik";

export default component$(() => {
  return (
    <ToastProvider>
        <Slot />
    </ToastProvider>
    );
});
```

## use
_src/routes/index.tsx_
```jsx
import { component$ } from "@builder.io/qwik";
import { useToast } from "toast-qwik";

export default component$(() => {
  const toast = useToast();
  return (
    <>
      <button onClick$={() => toast.error('test toast')}>Test toast</button>
    </>
  );
});
```