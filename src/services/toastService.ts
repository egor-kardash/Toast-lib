import { v4 as generateId } from 'uuid';

import { toastIcons } from '@/helpers/toastProps';
import { IToast, ToastColor } from '@/types';

class ToastService {
  private static _instance?: ToastService;

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
      title: toastOptions.title || toastOptions.type,
      description:
        toastOptions.description || `${toastOptions.type} toast example`,
      color: toastOptions.color || ToastColor[toastOptions.type],
      iconPath: toastIcons[toastOptions.type],
    };
  }

  public getAllToasts() {
    return this._toastList;
  }

  public addToast(toast: IToast) {
    if (this._toastList.length < 3) {
      this._toastList = [...this._toastList, this.createToast(toast)];
    }
  }

  public deleteToast = (toastId: string) => {
    this._toastList = this._toastList.filter((toast) => toast.id !== toastId);
  };
}

export const toastService = ToastService.getInstance();
