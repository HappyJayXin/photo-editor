import styled from 'styled-components';
import Icon from '@/components/Icon';
import { Box } from '@/components/System';
import Typography from '../Typography';

type Props = {
  title: string;
  onClose: () => void;
};

const TitleWrapper = styled.header`
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

const ModalTitle = ({ title, onClose }: Props) => (
  <TitleWrapper>
    <Box marginLeft="auto">
      <Typography variant="subTitle1" as="h6" color="primary">
        {title}
      </Typography>
    </Box>
    <Box marginLeft="auto">
      <Icon glyph="close" onClick={onClose} />
    </Box>
  </TitleWrapper>
);

export default ModalTitle;
