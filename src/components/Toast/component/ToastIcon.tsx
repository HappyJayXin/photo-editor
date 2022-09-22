import type { AppearanceTypes } from '../type';
import Icon from '@/components/Icon';

type AppearancesKey = {
  icon: JSX.Element;
};

const appearances: Record<AppearanceTypes, AppearancesKey> = {
  info: {
    icon: <Icon glyph="toast-info" />,
  },
  success: {
    icon: <Icon glyph="toast-success" />,
  },
  warning: {
    icon: <Icon glyph="toast-warning" />,
  },
};

type Props = {
  appearance: AppearanceTypes;
};

const ToastIcon = ({ appearance }: Props) => {
  const meta = appearances[appearance];
  return meta.icon;
};

export default ToastIcon;
