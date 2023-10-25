import { component$, useContext } from '@builder.io/qwik';
import { ToastContext } from '../../context/toast-context';
import { Toast } from '../toast/toast';
// interface Props {
//     position: POSITION;
//     items: ToastItem[]
// }

export const ToastWrapper = component$(() => {
  const {items, position} = useContext(ToastContext);
  
  return <div class={[
    'toast_wrapper',
    position,
  ]}>
    {items.map(((item, index) => 
        <Toast 
        separatorClass={items.length > 0 ? `${position}__mr` : 'mr-0'}
        key={index} 
        item={item} />))}
    </div>
});