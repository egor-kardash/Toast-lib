import React, { FC, useRef } from 'react';

import { ToastContainer } from '@/components/ToastContainer';
import { IToastStorybookProps } from '@/types';

import { Button } from './styled';

export const ToastFactory: FC<IToastStorybookProps> = ({
  id,
  type,
  title,
  description,
  color,
  position,
  iconPath,
  isAutoDeleted,
  showDuration,
  animationType,
  animationDuration,
  spaces,
  handleDelete,
}) => {
  const toastRef = useRef<React.ElementRef<typeof ToastContainer>>(null);

  const handleAdd = () => {
    toastRef.current?.addToast({
      id,
      type,
      title,
      description,
      color,
      iconPath,
      position,
      animationType,
      animationDuration,
      handleDelete,
    });
  };

  return (
    <>
      <Button onClick={handleAdd}>Show Toast</Button>
      <ToastContainer
        // position={position}
        ref={toastRef}
        isAutoDeleted={isAutoDeleted}
        showDuration={showDuration}
        spaces={spaces}
      />
    </>
  );
};
