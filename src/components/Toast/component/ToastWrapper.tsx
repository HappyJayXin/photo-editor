import styled from 'styled-components';
import { animated } from 'react-spring';

import ToastIcon from './ToastIcon';
import Icon from '@/components/Icon';
import { Box } from '@/components/System';

import type { ToastOption } from '../type';
import { ChildrenProps } from '@/types/common';
import Typography from '@/components/Typography';

type Props = ChildrenProps &
  Pick<ToastOption, 'appearance' | 'closeButton' | 'title'> & {
    onClose: () => void;
    style: object;
  };

const offsetSize = '6px';

const ToastStyle = styled(animated.div)`
  background-color: ${({ theme }) => theme.colors.grey['1000']};
  opacity: 0.9;
  border-radius: 8px;
  padding: calc(12px - ${offsetSize}) 16px;
  font-size: 14px;
  margin: 8px;
  display: flex;
`;

const ToastWrapper = ({
  children,
  appearance,
  closeButton,
  onClose,
  title,
  style,
}: Props) => (
  <ToastStyle style={style}>
    <Box role="button" marginRight="12px" paddingTop="3px">
      <ToastIcon appearance={appearance} />
    </Box>

    <Box paddingY={offsetSize} minWidth={title ? '150px' : '0px'}>
      {title ? (
        <Typography as="div" variant="body1" color="white" gutterBottom>
          {title}
        </Typography>
      ) : null}

      <Typography as="p" variant="body2" color="white">
        {children}
      </Typography>
    </Box>

    {closeButton ? (
      <Box paddingY="6px">
        <Icon glyph="toast-close" margin="0 0 0 16px" onClick={onClose} />
      </Box>
    ) : null}
  </ToastStyle>
);

export default ToastWrapper;
