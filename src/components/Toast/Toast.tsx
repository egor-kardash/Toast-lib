import React from 'react';

import { IToast } from '~/interfaces';

import { CloseIcon, Content, Description, Title, ToastIcon, Wrapper } from './components';

const closeIconPath = require('../../assets/close-icon.svg') as string;

export const Toast: React.FC<IToast> = ({
  id,
  title,
  description,
  color,
  iconPath,
  animationType,
  animationDuration,
  handleClick,
}) => (
  <Wrapper id={id} animationType={animationType} animationDuration={animationDuration}>
    <Title>{title}</Title>
    <Content color={color}>
      <ToastIcon alt='Toast' src={iconPath} />
      <Description>{description}</Description>
      <CloseIcon onClick={handleClick} alt='Close' src={closeIconPath} />
    </Content>
  </Wrapper>
);
