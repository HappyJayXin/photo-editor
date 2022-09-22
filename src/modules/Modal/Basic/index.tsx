import Button from '@/components/Button';
import Modal, {
  ModalTitle,
  ModalContent,
  ModalAction,
} from '@/components/Modal';
import Typography from '@/components/Typography';

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

const Basic = ({ isOpen, onClose }: Props) => (
  <Modal isOpen={isOpen}>
    <ModalTitle title="Next JS Typescript UI Starter" onClose={onClose} />
    <ModalContent>
      <Typography variant="body1">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio,
        deleniti! Et optio amet, itaque facere placeat maiores mollitia.
        Repellat fuga sed, ut adipisci natus illo porro commodi ea nesciunt
        corporis?
      </Typography>
    </ModalContent>
    <ModalAction>
      <Button onClick={onClose}>Ok</Button>
    </ModalAction>
  </Modal>
);

export default Basic;
