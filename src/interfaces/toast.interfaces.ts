import { ToastType } from '~/enums';

export interface IToastContent {
  color: string;
}

export interface IAnimation {
  animationType: string;
  animationDuration: number;
}

export interface IToast extends IToastContent, IAnimation {
  id: string;
  type: keyof typeof ToastType;
  title: string;
  description: string;
  iconPath?: string;
  handleClick: () => void;
}

export interface IToastContainer {
  isAutoDeleted: boolean;
  showDuration: number;
  position: string;
  spaces: string;
}

export interface IToastStorybookProps extends IToast, IToastContainer {}
