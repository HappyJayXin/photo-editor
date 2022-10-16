import { Circle, Line, Square } from './styled';

export type Props = {
  variant?: 'square' | 'line' | 'circle';
  height?: string;
  width?: string;
};

const Skeleton = ({
  variant = 'line',
  height = 'auto',
  width = 'auto',
}: Props) => {
  if (variant === 'circle') {
    return <Circle height={height} width={width} />;
  }
  if (variant === 'square') {
    return <Square height={height} width={width} />;
  }
  return <Line height={height} width={width} />;
};

export default Skeleton;
