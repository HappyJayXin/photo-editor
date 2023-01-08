import styled from 'styled-components';

export const ToolsContainer = styled.div`
  position: fixed;
  left: 0;
  top: 50%;
  display: flex;
  flex-direction: column;
  background: ${({ theme }) => theme.colors.grey[0]};
  padding: 8px;
  border-top-right-radius: 4px;
  border-bottom-right-radius: 4px;
`;

export const IconWrap = styled.div`
  padding: 8px;
`;
