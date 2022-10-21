import React, { FC } from 'react';

import { ToastProvider } from '@/components/ToastProvider';
import { toastService } from '@/services/toastService';
import { IToastStorybookProps } from '@/types';

import { Button } from './styled';

export const ToastFactory: FC<IToastStorybookProps> = ({
  type,
  title,
  description,
  color,
  position,
  isAutoDeleted,
  showDuration,
  animationType,
  animationDuration,
  spaces,
}) => {
  const handleAdd = () => {
    toastService.addToast({
      type,
      title,
      description,
      color,
      position,
      animationType,
      animationDuration,
    });
  };

  return (
    <>
      <Button onClick={handleAdd}>Show Toast</Button>
      <ToastProvider
        isAutoDeleted={isAutoDeleted}
        showDuration={showDuration}
        spaces={spaces}
      />
    </>
  );
};
