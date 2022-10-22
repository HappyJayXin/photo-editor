import { useEffect } from 'react';
import { useTranslation } from 'next-i18next';

import Button from '@/components/Button';
import {
  useModal,
  ModalTitle,
  ModalContent,
  ModalAction,
} from '@/components/Modal';
import Typography from '@/components/Typography';

import useFileUpload from '@/hooks/useFileUpload';
import { useActions } from '@/redux/hook';
import uuidv4 from '@/helpers/utils/uuidv4';
import useEffectAsync from '@/hooks/useEffectAsync';

import type { UploadPayload } from '@/components/Modal';

const UploadModal = ({ isOpenFileInit }: UploadPayload['data']) => {
  const { t } = useTranslation('modal');
  const { setFileInfo } = useActions();
  const { closeModal } = useModal();

  const { open, getInputProps, files, clearAllFiles, error } = useFileUpload({
    accept: 'image/jpeg, image/png, image/jpg',
    limitSize: 1024 * 1024 * 2,
  });

  useEffectAsync(async () => {
    if (!error && files?.length) {
      const uuid = uuidv4();
      setFileInfo({
        uuid,
        name: files[0].name,
        file: files[0],
        settings: {},
      });
      clearAllFiles();
      closeModal();
    }
  }, [files, error]);

  useEffect(() => {
    if (isOpenFileInit) {
      open();
    }
  }, [isOpenFileInit]);

  return (
    <>
      <ModalTitle title={t('upload_title')} />
      <ModalContent>
        <Typography variant="body1">{t('upload_content')}</Typography>
      </ModalContent>
      <ModalAction>
        <Button onClick={open}>{t('common:upload')}</Button>
        <input {...getInputProps()} />
      </ModalAction>
    </>
  );
};

export default UploadModal;
