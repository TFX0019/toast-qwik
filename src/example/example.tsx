import { $, component$, useSignal } from '@builder.io/qwik';
import { useToast } from '../app/hooks/useToast';

export const Example = component$(() => {
    const toast = useToast();
    const count = useSignal(0);

  const showInfo = $(() => {
    count.value++;
    toast.info(`Test of toast Qwik ${count.value}`)
  })

  const showWarn = $(() => {
    count.value++;
    toast.warn(`Test of toast Qwik ${count.value}`)
  })

  const showSuccess = $(() => {
    count.value++;
    toast.success(`Test of toast Qwik ${count.value}`)
  })

  const showDefault = $(() => {
    count.value++;
    toast.default(`Test of toast Qwik ${count.value}`)
  })

  const showError = $(() => {
    count.value++;
    toast.error(`Test of toast Qwik ${count.value}`)
  })

  return <div>
    <h1>Example toast qwik</h1>
    <button onClick$={() => showInfo()}>show info toast</button>
    <button onClick$={() => showSuccess()}>show success toast</button>
    <button onClick$={() => showWarn()}>show warn toast</button>
    <button onClick$={() => showDefault()}>show default toast</button>
    <button onClick$={() => showError()}>show error toast</button>
  </div>
});