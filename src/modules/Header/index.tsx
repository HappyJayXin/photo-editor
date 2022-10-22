import { useEffect, useRef } from 'react';
import { useTranslation } from 'next-i18next';

import Typography from '@/components/Typography';
import Button from '@/components/Button';
import { Flex } from '@/components/System';
import { useDialog } from '@/components/Dialog';
import { useModal } from '@/components/Modal';

import { useTypedSelector, useActions } from '@/redux/hook';
import { HeaderContainer } from './styled';
import HeaderLoader from './components/Loader/Header';

import type { EventFunctionCallback } from '@/types/common';

const Header = () => {
  const { t } = useTranslation();
  const file = useTypedSelector((state) => state.file);
  const isLoader = file.info === null;

  const { setFileInfo } = useActions();
  const isOpenFileInit = useRef(false);
  const handleOk: EventFunctionCallback = (onClose) => {
    onClose();
    setFileInfo(null);
    isOpenFileInit.current = true;
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

  const { openModal } = useModal();
  useEffect(() => {
    if (file.info === null) {
      openModal({
        type: 'upload',
        data: {
          isOpenFileInit: isOpenFileInit.current,
        },
      });
    }
  }, [file.info]);

  if (isLoader) return <HeaderLoader />;
  return (
    <HeaderContainer>
      <Flex container justifyContent="space-between">
        <Typography variant="title6">{file.info?.name}</Typography>
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
