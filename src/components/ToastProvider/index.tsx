import React, { useLayoutEffect } from 'react';

import { ToastContainer } from '@/components/ToastContainer';
import { useToastContainer } from '@/hooks/useToastContainer';
import { toastService } from '@/services/toastService';
import { IToastContainer } from '@/types';

export const ToastProvider = (data: IToastContainer) => {
  const toastRef = useToastContainer();

  useLayoutEffect(() => {
    toastService.init(toastRef.current);
  }, []);

  return <ToastContainer ref={toastRef} {...data} />;
};
