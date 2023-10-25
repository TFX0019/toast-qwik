import { $, useContext } from "@builder.io/qwik";
import { ToastContext, ToastState } from "../context/toast-context";
// export interface ToastHook {
//     duration: number;
//     position: 'TL' | 'TR' | 'BL' | 'BR' ;
//     type: 'success' | 'warning' | 'error' | 'info'
// }

export const useToast = () => {
    const ctx = useContext<ToastState>(ToastContext);

    const showError = $((message: string) => {
        const id = Date.now();
        ctx.items = [...ctx.items, {
            id,
            duration: ctx.duration,
            message: message,
            type: "success"
        }]
        
        setTimeout(async () => {
            ctx.items = ctx.items.filter(toast => toast.id !== id)
        }, ctx.duration)

        if (ctx.items.length > 5) {
            ctx.items.shift();
        }
    })

    // const removeToast = (id: number) => {
        
    // }

    return {
       error: $((message: string) => showError(message)),
    }
}