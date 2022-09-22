import { up, down } from 'styled-breakpoints';
import { useBreakpoint } from 'styled-breakpoints/react-styled';

const useDevice = () => {
  const isDesktop = Boolean(useBreakpoint(up('laptop')));
  const isTablet = Boolean(useBreakpoint(down('laptop')));

  return {
    isDesktop,
    isTablet,
  };
};

export default useDevice;
