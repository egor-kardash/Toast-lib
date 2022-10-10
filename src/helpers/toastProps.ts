import ErrorIcon from '@/assets/error-icon.svg';
import InfoIcon from '@/assets/info-icon.svg';
import SuccesIcon from '@/assets/success-icon.svg';
import WarningIcon from '@/assets/warning-icon.svg';
import { ToastType } from '@/types';

export const toastIcons: { [key in ToastType]: string } = {
  [ToastType.Info]: InfoIcon,
  [ToastType.Warning]: WarningIcon,
  [ToastType.Success]: SuccesIcon,
  [ToastType.Error]: ErrorIcon,
};
