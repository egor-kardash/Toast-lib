import React, { useRef } from 'react';

import { IToastStorybookProps } from '~/interfaces';

import { ToastContainer } from '../../container';
import { Button } from './components';

export const ToastFactory: React.FC<IToastStorybookProps> = ({
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
  handleClick,
}) => {
  const toastRef = useRef<React.ElementRef<typeof ToastContainer>>(null);

  const clickHandle = () => {
    toastRef.current?.addToast({
      id,
      type,
      title,
      description,
      color,
      iconPath,
      animationType,
      animationDuration,
      handleClick,
    });
  };

  return (
    <>
      <Button onClick={clickHandle}>Show Toast</Button>
      <ToastContainer
        position={position}
        ref={toastRef}
        isAutoDeleted={isAutoDeleted}
        showDuration={showDuration}
        spaces={spaces}
      />
    </>
  );
};
