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
import getImageData from '@/helpers/getImageData';

const UploadModal = () => {
  const { t } = useTranslation();

  const file = useTypedSelector((state) => state.file);
  const { setFileInfo } = useActions();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setIsOpen(file.info === null);
  }, [file.info]);

  const { open, getInputProps, files, clearAllFiles } = useFileUpload();

  useEffectAsync(async () => {
    if (files?.length) {
      const dataUrl = await getImageData(files[0]);
      const uuid = uuidv4();
      setFileInfo({
        uuid,
        name: files[0].name,
        dataUrl,
        settings: {},
      });
      clearAllFiles();
    }
  }, [files]);

  return (
    <Modal isOpen={isOpen}>
      <ModalTitle title={t('modal_upload_title')} />
      <ModalContent>
        <Typography variant="body1">{t('modal_upload_content')}</Typography>
      </ModalContent>
      <ModalAction>
        <Button onClick={open}>{t('upload')}</Button>
        <input {...getInputProps()} />
      </ModalAction>
    </Modal>
  );
};

export default UploadModal;
