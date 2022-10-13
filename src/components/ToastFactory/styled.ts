import styled from 'styled-components';

import theme from '@/theme';

export const Button = styled.button`
  cursor: pointer;
  width: ${theme.widths[6]}px;
  height: ${theme.heights[1]}px;
  position: fixed;
  top: ${theme.positions[4]}%;
  left: ${theme.positions[4]}%;
  border: none;
  border-radius: ${theme.borderRadius[2]}px;
  font-size: ${theme.fontSizes[1]}px;
  box-shadow: ${theme.boxShadows} ${theme.colors.gray};
`;
