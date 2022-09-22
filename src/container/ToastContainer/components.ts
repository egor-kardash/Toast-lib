import styled from 'styled-components';

import theme from '../../theme';

export const Container = styled.div<{ spaces: string }>`
  position: absolute;
  display: flex;
  flex-direction: column;
  min-width: ${theme.widths[11]}px;
  min-height: ${theme.heights[3]}px;
  gap: ${({ spaces }) => spaces}px;

  &.top-left {
    top: ${theme.positions[1]}px;
    left: ${theme.positions[1]}px;
  }

  &.top-right {
    top: ${theme.positions[1]}px;
    right: ${theme.positions[1]}px;
  }

  &.bottom-left {
    bottom: ${theme.positions[1]}px;
    left: ${theme.positions[1]}px;
  }

  &.bottom-right {
    bottom: ${theme.positions[1]}px;
    right: ${theme.positions[1]}px;
  }
`;
