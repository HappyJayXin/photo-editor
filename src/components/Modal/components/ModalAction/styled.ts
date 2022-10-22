import styled from 'styled-components';

export const FooterWrapper = styled.footer`
  padding: 24px;
  display: flex;
  justify-content: flex-end;
  background: ${({ theme }) => theme.colors.grey[0]};

  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
`;
