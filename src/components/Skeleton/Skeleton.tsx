import { Circle, Line, Square, Button } from './styled';

export type Props = {
  variant?: 'square' | 'line' | 'circle' | 'button';
  height?: string;
  width?: string;
};

const Skeleton = ({ variant = 'line', height, width }: Props) => {
  switch (variant) {
    case 'line':
      return <Line height={height} width={width} />;
    case 'square':
      return <Square height={height} width={width} />;
    case 'circle':
      return <Circle height={height} width={width} />;
    case 'button':
      return <Button height={height} width={width} />;
  }
};

export default Skeleton;
