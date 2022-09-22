import { useEffect } from 'react';
import { isMobile } from 'react-device-detect';
import { useActions } from '@/redux/hook';

const getWindowDimensions = () => {
  const width = window.innerWidth;
  const height = window.innerHeight;
  return {
    width,
    height,
  };
};

const WindowWidth = () => {
  const { setWindowDimensions } = useActions();

  const onUpdateWindowDimensions = () => {
    setWindowDimensions(getWindowDimensions());
  };

  useEffect(() => {
    onUpdateWindowDimensions();
  }, []);

  useEffect(() => {
    const eventName = isMobile ? 'orientationchange' : 'resize';
    window.addEventListener(eventName, onUpdateWindowDimensions);
    return () =>
      window.removeEventListener(eventName, onUpdateWindowDimensions);
  }, [isMobile]);

  return null;
};

export default WindowWidth;
