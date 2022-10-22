import { useTranslation } from 'next-i18next';
import Typography from '@/components/Typography';
import Button from '@/components/Button';
import { Flex } from '@/components/System';
import Skeleton from '@/components/Skeleton';
import { useTypedSelector, useActions } from '@/redux/hook';
import { HeaderContainer } from './styled';
import { useDialog } from '@/components/Dialog';

import type { EventFunctionCallback } from '@/types/common';

const Header = () => {
  const { t } = useTranslation();
  const file = useTypedSelector((state) => state.file);
  const isPlaceholder = file.info === null;

  const { setFileInfo } = useActions();
  const handleOk: EventFunctionCallback = (onClose) => {
    onClose();
    setFileInfo(null);
  };

  const { setDialog } = useDialog();
  const reUploadDialog = () => {
    setDialog({
      type: 'confirm',
      data: {
        title: t('re_upload'),
        body: t('dialog:re_upload_body'),
        onOk: (onClose) => handleOk(onClose),
      },
    });
  };

  return (
    <HeaderContainer>
      <Flex container justifyContent="space-between">
        {isPlaceholder ? (
          <Skeleton variant="line" width="300px" height="30" />
        ) : (
          <Typography variant="title6">{file.info?.name}</Typography>
        )}
        <Flex container gap="4px">
          <Button color="secondary" onClick={reUploadDialog}>
            {t('re_upload')}
          </Button>
          <Button>{t('share')}</Button>
        </Flex>
      </Flex>
    </HeaderContainer>
  );
};

export default Header;
