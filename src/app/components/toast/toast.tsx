import { component$ } from '@builder.io/qwik';
import { ToastItem } from '../../interfaces/toast';
import LucideX from '../icons/LucideX';
import { useToast } from '../../hooks/useToast';

interface Props {
    item: ToastItem
    separatorClass: string;
}

export const Toast = component$(({item, separatorClass}: Props) => {
  const {close} = useToast();
  
  return <div class={[separatorClass, 'toast', `toast_${item.type}`]}>
    <span>{item.message}</span>
    {item.action && <button class="btn_action" onClick$={item.action.onAction}>{item.action.content}</button>}
    {item.closeable && <button onClick$={() => close(item.id)} class="btn_closed"><LucideX style={{strokeWidth: '2'}} /></button>}
  </div>
});