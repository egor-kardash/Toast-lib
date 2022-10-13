import styled from 'styled-components';

import theme from '@/theme';
import { IAnimation, IToastContent } from '@/types';

export const Wrapper = styled.div<IAnimation>`
  width: ${theme.widths[11]}px;
  height: ${theme.percentageSizes[4]}%;
  flex-direction: column;
  user-select: none;
  z-index: 1;
  font-family: ${theme.font};
  animation: ${({ animationType }) => animationType}
    ${({ animationDuration }) => animationDuration}s;

  @keyframes right-to-left {
    from {
      transform: translateX(75%);
      opacity: ${theme.opacity[0]};
    }
    to {
      opacity: ${theme.opacity[4]};
      transform: translateX(0);
    }
  }
  @keyframes left-to-right {
    from {
      opacity: ${theme.opacity[0]};
      transform: translateX(-75%);
    }
    to {
      opacity: ${theme.opacity[4]};
      transform: translateX(0);
    }
  }
  @keyframes bottom-to-top {
    from {
      opacity: ${theme.opacity[0]};
      transform: translateY(75%);
    }
    to {
      opacity: ${theme.opacity[4]};
      transform: translateY(0);
    }
  }
  @keyframes top-to-bottom {
    from {
      opacity: ${theme.opacity[0]};
      transform: translateY(-75%);
    }
    to {
      opacity: ${theme.opacity[4]};
      transform: translateY(0);
    }
  }

  &:hover {
    transform: scale(${theme.scales[5]});
    transition: ${theme.durations.second[1]}s;
  }

  &.left {
    align-self: flex-start;
  }

  &.right {
    align-self: flex-end;
  }

  &.center {
    align-self: center;
  }
`;

export const Title = styled.div`
  margin-left: ${theme.spaces[1]}px;
`;

export const Content = styled.div<IToastContent>`
  cursor: grab;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${theme.spaces[4]}px;
  border-radius: ${theme.borderRadius[4]}px;
  background-color: ${({ color }) => color};
`;

export const CloseIcon = styled.img`
  cursor: pointer;
  align-self: flex-start;
  width: ${theme.widths[0]}px;
  height: ${theme.widths[0]}px;
`;

export const ToastIcon = styled.img`
  width: ${theme.widths[4]}px;
  height: ${theme.widths[4]}px;
  pointer-events: none;
`;

export const Description = styled.div`
  font-size: ${theme.fontSizes[1]}px;
`;
