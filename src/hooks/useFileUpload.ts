import { useState, useRef, useEffect } from 'react';
import type { ChangeEvent } from 'react';

type InputProps = {
  type: 'file';
  hidden: boolean;
  ref: React.RefObject<HTMLInputElement>;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  accept?: string;
};

type Params = {
  accept?: string;
};

const useFileUpload = ({ accept }: Params) => {
  const [files, setFiles] = useState<FileList>();
  const [totalSize, setTotalSize] = useState(0);

  const inputRef = useRef<HTMLInputElement>(null);

  const open = () => {
    if (inputRef.current) {
      inputRef.current.click();
    }
  };

  const onInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files?.length) {
      setFiles(event.target.files);
    }
  };

  useEffect(() => {
    if (files) {
      let sizes = 0;
      for (let index = 0; index < files.length; index++) {
        sizes += files[index].size;
      }
      setTotalSize(sizes);
    }
  }, [files]);

  const clearAllFiles = () => {
    setFiles(undefined);
  };

  const getInputProps = () => {
    const props: InputProps = {
      type: 'file',
      hidden: true,
      ref: inputRef,
      onChange: onInputChange,
    };
    if (accept) {
      props.accept = accept;
    }
    return props;
  };

  return { open, getInputProps, files, totalSize, clearAllFiles };
};

export default useFileUpload;
