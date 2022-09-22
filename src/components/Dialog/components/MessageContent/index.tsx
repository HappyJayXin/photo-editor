import Typography from '@/components/Typography';
import Button from '@/components/Button';
import { Flex, Box } from '@/components/System';
import type { MessageProps } from '../../type';

type Props = MessageProps;

const MessageDialog = ({ title, body, onClose, t }: Props) => (
  <>
    <Typography as="h2" variant="title6" gutterBottom>
      {title}
    </Typography>
    <Box paddingBottom="28px" width="300px">
      <Typography as="p" variant="body1">
        {body}
      </Typography>
    </Box>
    <Flex container justifyContent="flex-end">
      <Button onClick={onClose}>{t('ok')}</Button>
    </Flex>
  </>
);

export default MessageDialog;
