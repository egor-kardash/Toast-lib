import React, { FC } from 'react';

import { ToastContainer } from '@/components/ToastContainer';
import { useToastContainer } from '@/hooks/useToastContainer';
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
  const containerRef = useToastContainer();
  
  const handleAdd = () => {
    containerRef.current?.addToast({
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
      <ToastContainer
        ref={containerRef}
        isAutoDeleted={isAutoDeleted}
        showDuration={showDuration}
        spaces={spaces}
      />
    </>
  );
};
