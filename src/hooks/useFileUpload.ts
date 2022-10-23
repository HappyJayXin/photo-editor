import { useState, useRef, useEffect } from 'react';
import type { ChangeEvent } from 'react';
import { useToast } from '@/components/Toast';
import { useTranslation } from 'next-i18next';

type InputProps = {
  type: 'file';
  hidden: boolean;
  ref: React.RefObject<HTMLInputElement>;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  accept?: string;
};

type Params = {
  accept?: string;
  limitSize?: number;
};

const useFileUpload = ({ accept, limitSize }: Params) => {
  const [files, setFiles] = useState<FileList>();
  const [totalSize, setTotalSize] = useState(0);
  const [error, setError] = useState('');

  const { t } = useTranslation();
  const FILE_LARGE_ERROR_MSG = t('file_large');

  const { addToast } = useToast();
  const openInfoToast = () => {
    addToast(FILE_LARGE_ERROR_MSG, {
      appearance: 'warning',
      closeButton: true,
    });
  };

  const inputRef = useRef<HTMLInputElement>(null);

  const open = () => {
    if (inputRef.current) {
      inputRef.current.value = ''; // reset file value
      inputRef.current.click();
      setError(''); // reset error msg
    }
  };

  const fileLimitCheck = (files: FileList) => {
    let isChecked = true;
    if (!limitSize) return isChecked;

    for (let index = 0; index < files.length; index++) {
      if (files[index].size > limitSize) {
        isChecked = false;
        break;
      }
    }
    return isChecked;
  };

  const onInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files?.length && inputRef.current) {
      const isChecked = fileLimitCheck(event.target.files);
      if (isChecked) {
        setFiles(event.target.files);
      } else {
        openInfoToast();
        setError(FILE_LARGE_ERROR_MSG);
        clearAllFiles();
      }
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

  return { open, getInputProps, files, totalSize, clearAllFiles, error };
};

export default useFileUpload;
