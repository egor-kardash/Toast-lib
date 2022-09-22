import { ToastColor, ToastType } from '../enums';

const infoIconPath = require('../assets/info-icon.svg') as string;
const warningIconPath = require('../assets/warning-icon.svg') as string;
const errorIconPath = require('../assets/error-icon.svg') as string;
const successIconPath = require('../assets/success-icon.svg') as string;

export const getToastIcon = (iconType: keyof typeof ToastType) => {
  switch (iconType) {
    case ToastType.Info:
      return infoIconPath;
    case ToastType.Warning:
      return warningIconPath;
    case ToastType.Error:
      return errorIconPath;
    case ToastType.Success:
      return successIconPath;
    default:
      return 'Success';
  }
};

export const getToastTitle = (type: keyof typeof ToastType, title: string) => title || type;

export const getToastColor = (type: keyof typeof ToastType, color: string) =>
  color || ToastColor[type];

export const getToastDescription = (type: keyof typeof ToastType, description: string) =>
  description || `${type} toast example`;
