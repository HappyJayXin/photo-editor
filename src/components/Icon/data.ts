const data = {
  close: {
    normal: '/icons/common/close.svg',
  },
  shape: {
    normal: '/icons/common/shape.svg',
  },
  text: {
    normal: '/icons/common/text.svg',
  },
  picture: {
    normal: '/icons/common/picture.svg',
  },

  'toast-info': {
    normal: '/icons/toasts/info.svg',
  },
  'toast-success': {
    normal: '/icons/toasts/success.svg',
  },
  'toast-warning': {
    normal: '/icons/toasts/warning.svg',
  },
  'toast-close': {
    normal: '/icons/toasts/close.svg',
  },
};

export type Glyph = keyof typeof data;

export default data;
