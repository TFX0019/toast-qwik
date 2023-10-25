import { component$, useSignal } from '@builder.io/qwik';
import { useToast } from '../app/hooks/useToast';

export const Example = component$(() => {
    const toast = useToast();
    const count = useSignal(0);
  return <div>
    <h1>Example toast qwik</h1>
    <button onClick$={() => {
        count.value++;
        toast.error(`Test of toast Qwik ${count.value}`)
    }}>show toast</button>
  </div>
});