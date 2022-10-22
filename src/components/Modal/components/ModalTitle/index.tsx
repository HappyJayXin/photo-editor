import Icon from '@/components/Icon';
import { Box } from '@/components/System';
import Typography from '@/components/Typography';
import { TitleWrapper } from './styled';

type Props = {
  title: string;
  onClose?: () => void;
};

const ModalTitle = ({ title, onClose }: Props) => (
  <TitleWrapper>
    <Box marginLeft={onClose ? 'auto' : '0'}>
      <Typography variant="subTitle1" as="h6" color="primary">
        {title}
      </Typography>
    </Box>
    {onClose ? (
      <Box marginLeft="auto">
        <Icon glyph="close" onClick={onClose} />
      </Box>
    ) : null}
  </TitleWrapper>
);

export default ModalTitle;
