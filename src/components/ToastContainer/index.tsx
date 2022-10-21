import React, {
  forwardRef,
  useCallback,
  useEffect,
  useImperativeHandle,
  useReducer,
} from 'react';

import { ErrorBoundary } from '@/components/ErrorBoundary';
import { Toast } from '@/components/Toast';
import { ToastPortal } from '@/components/ToastPortal';
import { toastService } from '@/services/toastService';
import { IToast, IToastContainer } from '@/types';

import { Container } from './styled';

export const ToastContainer = forwardRef<
  { showToasts: () => void },
  IToastContainer
>(({ isAutoDeleted = true, showDuration = 1500, spaces = 0 }, ref) => {
  const { toastList, deleteToast } = toastService;
  const [, forceUpdate] = useReducer((x) => x + 1, 0);

  const handleDeleteToast = useCallback(
    (id: string) => () => {
      deleteToast(id);
    },
    [deleteToast],
  );

  useEffect(() => {
    if (isAutoDeleted && toastList.length) {
      const timer = setTimeout(() => {
        deleteToast(toastList[0].id as string);
      }, showDuration);

      return () => clearTimeout(timer);
    }
  }, [isAutoDeleted, showDuration, toastList, deleteToast]);

  useImperativeHandle(ref, () => ({
    showToasts: forceUpdate,
  }));

  return (
    <ErrorBoundary>
      <ToastPortal>
        <Container spaces={spaces}>
          {toastList.map((item: IToast) => (
            <Toast
              key={item.id}
              {...item}
              onDelete={handleDeleteToast(item.id as string)}
            />
          ))}
        </Container>
      </ToastPortal>
    </ErrorBoundary>
  );
});
