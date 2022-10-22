import Modal from './Modal';
import Upload from '@/modules/Modal/Upload';
import type { Payloads } from './type';

type Props = {
  isOpen: boolean;
  payload?: Payloads;
};

const ModalContainer = ({ isOpen, payload }: Props) => {
  const getContent = (payload: Payloads) => {
    switch (payload.type) {
      case 'upload':
        return <Upload {...payload.data} />;
    }
  };

  return <Modal isOpen={isOpen}>{payload ? getContent(payload) : null}</Modal>;
};

export default ModalContainer;
