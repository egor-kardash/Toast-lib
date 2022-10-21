import React, { useLayoutEffect } from 'react';

import { toastService } from '@/services/toastService';
import { ToastContainer } from '@/components/ToastContainer';
import { useToastContainer } from '@/hooks/useToastContainer';
import { IToastContainer } from '@/types';

export const ToastProvider = (data: IToastContainer) => {
  const containerRef = useToastContainer();

  useLayoutEffect(() => {
    toastService.init(containerRef.current);
  }, []);

  return <ToastContainer ref={containerRef} {...data} />;
};
