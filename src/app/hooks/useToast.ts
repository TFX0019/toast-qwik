import { $, useContext } from "@builder.io/qwik";
import { ToastContext, ToastState } from "../context/toast-context";
import { ToastType } from "../interfaces/toast";
// export interface ToastHook {
//     duration: number;
//     position: 'TL' | 'TR' | 'BL' | 'BR' ;
//     type: 'success' | 'warning' | 'error' | 'info'
// }

export interface ShowToastProp {
    type: ToastType;
}

export const useToast = () => {
    const ctx = useContext<ToastState>(ToastContext);

    const show = $((message: string, {type = 'default'}: ShowToastProp) => {
        const id = Date.now();
        ctx.items = [...ctx.items, {
            id,
            duration: ctx.duration,
            message: message,
            type: type
        }]
        
        setTimeout(async () => {
            ctx.items = ctx.items.filter(toast => toast.id !== id)
        }, ctx.duration)

        if (ctx.items.length > 5) {
            ctx.items.shift();
        }
    });

    return {
       default: $((message: string) => show(message, {type: 'default'})),
       error: $((message: string) => show(message, {type: 'danger'})),
       info: $((message: string) => show(message, {type: 'info'})),
       success: $((message: string) => show(message, {type: 'success'})),
       warn: $((message: string) => show(message, {type: 'warning'})),
    }
}