import React, { FC, memo } from 'react';

import CloseIconPath from '@/assets/close-icon.svg';
import { IToast } from '@/types';

import {
  CloseIcon,
  Content,
  Description,
  Title,
  ToastIcon,
  Wrapper,
} from './styled';

export const Toast: FC<IToast> = memo(
  ({
    id,
    title,
    description,
    color,
    iconPath,
    position,
    animationType,
    animationDuration,
    handleDelete,
  }) => (
    <Wrapper
      id={id}
      animationType={animationType}
      animationDuration={animationDuration}
      className={position}
    >
      <Title>{title}</Title>
      <Content color={color}>
        <ToastIcon alt='Toast' src={iconPath} title='Toast type icon' />
        <Description>{description}</Description>
        <CloseIcon
          onClick={handleDelete}
          alt='Close'
          src={CloseIconPath}
          title='Toast close icon'
        />
      </Content>
    </Wrapper>
  ),
);