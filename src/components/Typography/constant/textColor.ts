import colors from '@/helpers/theme/colors';

const textColor = {
  primary: {
    color: colors.primary.main,
  },
  secondary: {
    color: colors.secondary.main,
  },
  white: {
    color: colors.grey[0],
  },
  black: {
    color: colors.grey[1000],
  },
};

export type TextColor = keyof typeof textColor;

export default textColor;
