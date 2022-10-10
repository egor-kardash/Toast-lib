import styled from 'styled-components';

import theme from '@/theme';

export const Container = styled.div<{ spaces: string }>`
  width: ${theme.percentageSizes[10]}%;
  height: ${theme.percentageSizes[10]}%;
  display: flex;
  flex-direction: column;
  gap: ${({ spaces }) => spaces}px;
`;
