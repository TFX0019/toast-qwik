import { $, useContext } from "@builder.io/qwik";
import { ToastContext, ToastState } from "../context/toast-context";
import { ToastAction, ToastType } from "../interfaces/toast";
// export interface ToastHook {
//     duration: number;
//     position: 'TL' | 'TR' | 'BL' | 'BR' ;
//     type: 'success' | 'warning' | 'error' | 'info'
// }

export interface ShowToastProp {
    type?: ToastType;
    closeable?: boolean;
    action?: ToastAction;
}

export const useToast = () => {
    const ctx = useContext<ToastState>(ToastContext);

    const show = $((message: string, config?: ShowToastProp) => {
        const id = Date.now();
        ctx.items = [...ctx.items, {
            id,
            duration: ctx.duration,
            message: message,
            type: config?.type ? config.type : 'default',
            closeable: config?.closeable,
            action: config?.action,
        }]
        
        setTimeout(async () => {
            ctx.items = ctx.items.filter(toast => toast.id !== id)
        }, ctx.duration)

        if (ctx.items.length > 5) {
            ctx.items.shift();
        }
    });

    const close = $((id: number) => {
        ctx.items = ctx.items.filter(toast => toast.id !== id)
    })

    return {
       default: $((message: string, config?: ShowToastProp) => show(message, {type: 'default', action: config?.action, closeable: config?.closeable})),
       error: $((message: string, config?: ShowToastProp) => show(message, {type: 'danger', action: config?.action, closeable: config?.closeable})),
       info: $((message: string, config?: ShowToastProp) => show(message, {type: 'info', action: config?.action, closeable: config?.closeable})),
       success: $((message: string, config?: ShowToastProp) => show(message, {type: 'success', action: config?.action, closeable: config?.closeable})),
       warn: $((message: string, config?: ShowToastProp) => show(message, {type: 'warning', action: config?.action, closeable: config?.closeable})),
       close: $((id: number) => close(id))
    }
}