import { createContextId } from "@builder.io/qwik";
import { POSITION, TYPE, ToastItem } from "../interfaces/toast";



export interface ToastState {
    duration: number;
    position: POSITION;
    type: TYPE;
    items: ToastItem[]
}

export const ToastContext = createContextId<ToastState>('toast-context');