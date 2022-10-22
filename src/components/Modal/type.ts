export type UploadPayload = {
  type: 'upload';
  data: {
    isOpenFileInit: boolean;
  };
};

export type Payloads = UploadPayload;

export type ModalContextProps = {
  openModal: (payload: Payloads) => void;
  closeModal: () => void;
};
