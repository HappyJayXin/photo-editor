import { Element } from './styled';

export type Props = {
  variant: 'text' | 'rect' | 'circle';
  height?: number | string;
  width?: number | string;
};

const Skeleton = ({
  variant = 'text',
  height = 'auto',
  width = 'auto',
}: Props) => (
  <Element
    variant={variant}
    style={{
      height,
      width,
    }}
  />
);

export default Skeleton;
