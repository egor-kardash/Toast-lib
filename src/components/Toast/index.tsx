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
    position = 'left',
    animationType = 'top-to-bottom',
    animationDuration = 0.5,
    onDelete,
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
          onClick={onDelete}
          alt='Close'
          src={CloseIconPath}
          title='Toast close icon'
        />
      </Content>
    </Wrapper>
  ),
);
