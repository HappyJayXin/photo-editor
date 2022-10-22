import styled from 'styled-components';

export const TitleWrapper = styled.header`
  position: sticky;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 16px;
  background: ${({ theme }) => theme.colors.grey[0]};
  box-shadow: ${({ theme }) => theme.elevations[1]};

  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
`;
