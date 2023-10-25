import { component$ } from '@builder.io/qwik';
import { ToastItem } from '../../interfaces/toast';

interface Props {
    item: ToastItem
    separatorClass: string;
}

export const Toast = component$(({item, separatorClass}: Props) => {
  return <div class={[separatorClass]}>
    <span class={[
        'toast',
    ]}>{item.message}</span>
  </div>
});