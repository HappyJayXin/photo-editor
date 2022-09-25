import { useState, useRef, useEffect } from 'react';
import type { ChangeEvent } from 'react';

const useFileUpload = () => {
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

  const getInputProps = () => ({
    type: 'file',
    hidden: true,
    ref: inputRef,
    onChange: onInputChange,
  });

  return { open, getInputProps, files, totalSize };
};

export default useFileUpload;
