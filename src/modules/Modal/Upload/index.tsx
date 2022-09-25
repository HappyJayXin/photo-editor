import { useEffect, useState } from 'react';
import { useTranslation } from 'next-i18next';

import Button from '@/components/Button';
import Modal, {
  ModalTitle,
  ModalContent,
  ModalAction,
} from '@/components/Modal';
import Typography from '@/components/Typography';
import { useTypedSelector } from '@/redux/hook';

const UploadModal = () => {
  const { t } = useTranslation();

  const file = useTypedSelector((state) => state.file);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setIsOpen(file.info === null);
  }, [file.info]);

  return (
    <Modal isOpen={isOpen}>
      <ModalTitle title={t('modal_upload_title')} />
      <ModalContent>
        <Typography variant="body1">{t('modal_upload_content')}</Typography>
      </ModalContent>
      <ModalAction>
        <Button>{t('upload')}</Button>
      </ModalAction>
    </Modal>
  );
};

export default UploadModal;
