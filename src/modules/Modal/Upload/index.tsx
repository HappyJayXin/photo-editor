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
import { useTypedSelector } from '@/redux/hook';

const UploadModal = () => {
  const { t } = useTranslation();

  const file = useTypedSelector((state) => state.file);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setIsOpen(file.info === null);
  }, [file.info]);

  const { open, getInputProps } = useFileUpload();

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
