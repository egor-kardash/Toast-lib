import React, {
  forwardRef,
  useCallback,
  useEffect,
  useImperativeHandle,
  useState,
} from 'react';

import { ErrorBoundary } from '@/components/ErrorBoundary';
import { Toast } from '@/components/Toast';
import { ToastPortal } from '@/components/ToastPortal';
import { toastService } from '@/services/toastService';
import { IToast, IToastContainer } from '@/types';

import { Container } from './styled';

export const ToastContainer = forwardRef<
  { addToast: (toast: IToast) => void },
  IToastContainer
>(({ isAutoDeleted = true, showDuration = 1500, spaces = 0 }, ref) => {
  const [toasts, setToasts] = useState<IToast[]>([]);

  const deleteToast = useCallback(
    (id: string) => () => {
      toastService.deleteToast(id);
      setToasts(toastService.getAllToasts());
    },
    [],
  );

  useEffect(() => {
    if (isAutoDeleted && toasts.length) {
      const timer = setTimeout(() => {
        deleteToast(toasts[0].id as string)();
      }, showDuration);

      return () => clearTimeout(timer);
    }
  }, [toasts, isAutoDeleted, showDuration, deleteToast]);

  useImperativeHandle(ref, () => ({
    addToast(toast: IToast) {
      const createdToast = toastService.createToast(toast);
      toastService.addToast(createdToast);
      setToasts(toastService.getAllToasts());
    },
  }));

  return (
    <ErrorBoundary>
      <ToastPortal>
        <Container spaces={spaces}>
          {toasts.map((item: IToast) => (
            <Toast
              key={item.id}
              {...item}
              handleDelete={deleteToast(item.id as string)}
            />
          ))}
        </Container>
      </ToastPortal>
    </ErrorBoundary>
  );
});