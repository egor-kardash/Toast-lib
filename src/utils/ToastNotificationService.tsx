import { v4 as generateId } from 'uuid';

import { IToast } from '~/interfaces';

import {
  getToastColor,
  getToastDescription,
  getToastIcon,
  getToastTitle,
} from './getToastPropsFunctions';

class ToastNotificationService {
  private static _instance?: ToastNotificationService;

  private _toastList: IToast[] = [];

  private constructor() {}

  public static getInstance() {
    if (!this._instance) {
      this._instance = new this();
    }
    return this._instance;
  }

  public createToast(toastOptions: IToast) {
    return {
      ...toastOptions,
      id: generateId(),
      title: getToastTitle(toastOptions.type, toastOptions.title),
      description: getToastDescription(toastOptions.type, toastOptions.description),
      color: getToastColor(toastOptions.type, toastOptions.color),
      iconPath: getToastIcon(toastOptions.type),
    };
  }

  public getAllToasts() {
    return this._toastList;
  }

  public addToast(toast: IToast) {
    if (this._toastList.length < 3) {
      this._toastList = [...this._toastList, this.createToast(toast)];
    } else {
      this._toastList = [...this._toastList.slice(1), this.createToast(toast)];
    }
  }

  public deleteToast = (toastId: string) => {
    this._toastList = this._toastList.filter((toast) => toast.id !== toastId);
  };
}

export const toastService = ToastNotificationService.getInstance();
