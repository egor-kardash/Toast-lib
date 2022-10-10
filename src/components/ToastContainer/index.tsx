import React, {
  forwardRef,
  useEffect,
  useCallback,
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
>(({ isAutoDeleted, showDuration, spaces }, ref) => {
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
        deleteToast(toasts[toasts.length - 1].id)();
      }, showDuration);

      return () => clearTimeout(timer);
    }
  }, [toasts, isAutoDeleted, showDuration]);

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
              handleDelete={deleteToast(item.id)}
            />
          ))}
        </Container>
      </ToastPortal>
    </ErrorBoundary>
  );
});
