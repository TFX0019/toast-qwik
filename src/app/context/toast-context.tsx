import { createContextId } from "@builder.io/qwik";
import { ToastItem, ToastPosition } from "../interfaces/toast";



export interface ToastState {
    duration: number;
    position: ToastPosition;
    items: ToastItem[]
}

export const ToastContext = createContextId<ToastState>('toast-context');