import React, { forwardRef, useEffect, useImperativeHandle, useState } from 'react';

import { IToast, IToastContainer } from '~/interfaces';

import { Portal, Toast } from '../../components';
import { toastService } from '../../utils';
import { Container } from './components';

export const ToastContainer = forwardRef<{ addToast: (toast: IToast) => void }, IToastContainer>(
  ({ position, isAutoDeleted, showDuration, spaces }, ref) => {
    const [toasts, setToasts] = useState<IToast[]>([]);
    const [deletedToastId, setDeletedToastId] = useState<string>('');

    const deleteToast = (id: string) => {
      toastService.deleteToast(id);
      setToasts(toastService.getAllToasts());
    };

    useEffect(() => {
      if (deletedToastId) {
        deleteToast(deletedToastId);
      }
    }, [deletedToastId]);

    useEffect(() => {
      if (isAutoDeleted && toasts.length) {
        setTimeout(() => setDeletedToastId(toasts[toasts.length - 1].id), showDuration);
      }
    }, [toasts, isAutoDeleted, showDuration]);

    useImperativeHandle(ref, () => ({
      addToast(toast: IToast) {
        const _toast = toastService.createToast(toast);
        toastService.addToast(_toast);
        setToasts(toastService.getAllToasts());
      },
    }));

    return (
      <Portal>
        <Container spaces={spaces} className={position}>
          {toasts.map((toast: IToast) => (
            <Toast key={toast.id} {...toast} handleClick={() => deleteToast(toast.id)} />
          ))}
        </Container>
      </Portal>
    );
  },
);
