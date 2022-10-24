import { v4 as generateId } from 'uuid';

import { toastIcons } from '@/helpers/toastProps';
import { IToast, ToastColor } from '@/types';

class ToastService {
  private static _instance?: ToastService;
  private _showToastsRef!: () => void;

  public toastList: IToast[] = [];

  private constructor() {}

  public static getInstance() {
    if (!this._instance) {
      this._instance = new this();
    }
    return this._instance;
  }

  public init(ref: () => void) {
    this._showToastsRef = ref;
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
    this.toastList = [...this.toastList, this.createToast(toast)];
    this._showToastsRef();
  }

  public deleteToast = (toastId: string) => {
    this.toastList = this.toastList.filter((toast) => toast.id !== toastId);
    this._showToastsRef();
  };
}

export const toastService = ToastService.getInstance();
