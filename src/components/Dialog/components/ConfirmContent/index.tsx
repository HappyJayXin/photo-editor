import Typography from '@/components/Typography';
import Button from '@/components/Button';
import { Flex, Box } from '@/components/System';
import type { ContentProps, Confirm } from '../../type';

type Props = ContentProps<Confirm>;

const ConfirmContent = ({ title, body, onOk, onClose, t }: Props) => (
  <>
    <Typography as="h2" variant="title6" gutterBottom>
      {title}
    </Typography>
    <Box paddingBottom="28px" width="300px">
      <Typography as="p" variant="body1">
        {body}
      </Typography>
    </Box>
    <Flex container justifyContent="flex-end" gap="8px">
      <Button onClick={onClose} variant="outlined">
        {t('cancel')}
      </Button>
      <Button onClick={() => onOk(onClose)}>{t('ok')}</Button>
    </Flex>
  </>
);

export default ConfirmContent;
