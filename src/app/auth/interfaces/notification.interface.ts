export interface Notification {
  title: string;
  message: string;
  typeNotification: 'error' | 'sucess';
  visible: boolean;
}
