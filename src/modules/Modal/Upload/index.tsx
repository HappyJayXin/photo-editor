import { useEffect, useState } from 'react';
import { useTranslation } from 'next-i18next';

import Button from '@/components/Button';
import Modal, {
  ModalTitle,
  ModalContent,
  ModalAction,
} from '@/components/Modal';
import Typography from '@/components/Typography';

import useFileUpload from '@/hooks/useFileUpload';
import { useActions, useTypedSelector } from '@/redux/hook';
import uuidv4 from '@/helpers/utils/uuidv4';
import useEffectAsync from '@/hooks/useEffectAsync';

const UploadModal = () => {
  const { t } = useTranslation('modal');

  const file = useTypedSelector((state) => state.file);
  const { setFileInfo } = useActions();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setIsOpen(file.info === null);
  }, [file.info]);

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
    }
  }, [files, error]);

  return (
    <Modal isOpen={isOpen}>
      <ModalTitle title={t('upload_title')} />
      <ModalContent>
        <Typography variant="body1">{t('upload_content')}</Typography>
      </ModalContent>
      <ModalAction>
        <Button onClick={open}>{t('common:upload')}</Button>
        <input {...getInputProps()} />
      </ModalAction>
    </Modal>
  );
};

export default UploadModal;
