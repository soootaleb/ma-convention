import { MCNotificationLevel } from './enumerations';

export interface ITodo {
    label: string;
}

export interface INotification {
    level?: MCNotificationLevel;
    header?: string;
    content: string;
}