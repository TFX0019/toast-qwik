import { PropFunction } from "@builder.io/qwik";

export type ToastPosition = 'TL' | 'TR' | 'BL' | 'BR';
export type ToastType = 'default' | 'success' | 'warning' | 'danger' | 'info';

export interface ToastAction {
    content?: string;
    onAction?: PropFunction<() => void>
}

export interface ToastItem {
    id: number;
    duration: number;
    type: ToastType;
    message: string;
    closeable?: boolean;
    action?: ToastAction
}