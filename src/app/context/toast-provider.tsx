import { Slot, component$, useContextProvider, useStore, useStyles$, useVisibleTask$ } from '@builder.io/qwik';

import { ToastContext, ToastState } from './toast-context';
import { ToastWrapper } from '../components/wrapper/wrapper';
import styles from '../../scss/main.scss?inline';
interface Props {
  config?: ToastState;
}

export const ToastProvider = component$(({config}: Props) => {
  const toastData = useStore<ToastState>({
    duration: 5000,
    items: [],
    position: 'TR',
  });

  useContextProvider(ToastContext, toastData);

  useVisibleTask$(() => {
    if(config) {
      // toastData = {...data, ...toastData};
      toastData.duration = config.duration || toastData.duration;
      toastData.items = config.items || toastData.items;
      toastData.position = config.position || toastData.position;
    }

  })
  useStyles$(styles);
  return <>
    <Slot />
    <ToastWrapper />
  </>
});