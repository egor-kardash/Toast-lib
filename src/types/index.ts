export enum ToastType {
  Info = 'Info',
  Warning = 'Warning',
  Error = 'Error',
  Success = 'Success',
}

export enum ToastColor {
  Info = '#9b3ed4',
  Warning = '#f4e146',
  Error = '#e35734',
  Success = '#34e39b',
}

export enum ButtonType {
  Radio = 'radio',
  InlineRadio = 'inline-radio',
  Check = 'check',
  Select = 'select',
}

export interface IToastContent {
  color?: string;
}

export interface IAnimation {
  animationType?: string;
  animationDuration?: number;
}

export interface IToast extends IToastContent, IAnimation {
  id?: string;
  type: keyof typeof ToastType;
  title?: string;
  description: string;
  position?: string;
  iconPath?: string;
  handleDelete?: () => void;
}

export interface IToastContainer {
  isAutoDeleted?: boolean;
  showDuration?: number;
  spaces?: number;
}

export interface IToastStorybookProps extends IToast, IToastContainer {}
