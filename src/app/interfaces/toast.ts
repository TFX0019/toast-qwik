export type ToastPosition = 'TL' | 'TR' | 'BL' | 'BR';
export type ToastType = 'default' | 'success' | 'warning' | 'danger' | 'info';

export interface ToastItem {
    id: number;
    duration: number;
    type: ToastType;
    message: string;
}