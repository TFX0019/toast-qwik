import { Slot, component$, useContextProvider, useStore, useVisibleTask$ } from '@builder.io/qwik';

import { ToastContext, ToastState } from './toast-context';
import { ToastWrapper } from '../components/wrapper/wrapper';
import '../../scss/main.scss';
interface Props {
  data?: ToastState;
}

export const ToastProvider = component$(({data}: Props) => {
  const toastData = useStore<ToastState>({
    duration: 5000,
    items: [],
    position: 'TR',
    type: 'info'
  });

  useContextProvider(ToastContext, toastData);

  useVisibleTask$(() => {
    if(data) {
      toastData.duration = data.duration;
      toastData.items = data.items;
      toastData.position = data.position;
      toastData.type = data.type;
    }

  })

  return <>
    <Slot />
    <ToastWrapper />
  </>
});