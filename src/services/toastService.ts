import { v4 as generateId } from 'uuid';

import { toastIcons } from '@/helpers/toastProps';
import { IToast, ToastColor } from '@/types';

type showToastsRef = { showToasts: () => void };

class ToastService {
  private static _instance?: ToastService;

  public toastList: IToast[] = [];

  private _toastRef?: showToastsRef | null;

  private constructor() {}

  public static getInstance() {
    if (!this._instance) {
      this._instance = new this();
    }
    return this._instance;
  }

  public init(ref: showToastsRef | null) {
    if (ref) {
      this._toastRef = ref;
    }
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
    return this.toastList;
  }

  public addToast(toast: IToast) {
    if (this.toastList.length < 3) {
      this.toastList = [...this.toastList, this.createToast(toast)];
    }
    (this._toastRef as showToastsRef).showToasts();
  }

  public deleteToast = (toastId: string) => {
    this.toastList = this.toastList.filter((toast) => toast.id !== toastId);
    (this._toastRef as showToastsRef).showToasts();
  };
}

export const toastService = ToastService.getInstance();
