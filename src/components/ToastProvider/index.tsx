import React, { useLayoutEffect } from 'react';

import { ToastContainer } from '@/components/ToastContainer';
import { useToastContainer } from '@/hooks/useToastContainer';
import { toastService } from '@/services/toastService';
import { IToastContainer } from '@/types';

export const ToastProvider = (data: IToastContainer) => {
  const containerRef = useToastContainer();

  useLayoutEffect(() => {
    toastService.init(containerRef.current);
  }, []);

  return <ToastContainer ref={containerRef} {...data} />;
};
