import { ToastProvider } from "./app/context/toast-provider";
import { Example } from "./example/example";

export default () => {
  return (
    <>
      <head>
        <meta charSet="utf-8" />
        <title>Qwik Blank App</title>
      </head>
      <body>
        <ToastProvider config={{
          position: 'BR',
          duration: 5000,
          items: []
        }}>
          <Example />
        </ToastProvider>
      </body>
    </>
  );
};
