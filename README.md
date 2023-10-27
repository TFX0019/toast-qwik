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
    <ToastProvider config={{
          position: 'TL',
          duration: 5000,
          items: []
        }}>
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
      <button onClick$={() => toast.default('test toast')}>Test toast</button>
    </>
  );
});
```

## options

```jsx
toast.info(`Test of toast Qwik`) //blue
toast.warn(`Test of toast Qwik`) // yellow
toast.success(`Test of toast Qwik`) // green
toast.default(`Test of toast Qwik`) // dark
toast.error(`Test of toast Qwik`) // red
```

## actions

```jsx
toast.info(`Test of toast Qwik`, {
  closeable: true, 
  action: {
      content: 'SHOW',
      onAction: $(() => console.log('SHOW'))
    }})
```

