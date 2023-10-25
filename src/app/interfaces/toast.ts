export type POSITION = 'TL' | 'TR' | 'BL' | 'BR' ;
export type TYPE = 'success' | 'warning' | 'error' | 'info';

export interface ToastItem {
    id: number;
    duration: number;
    type: TYPE;
    message: string;
}