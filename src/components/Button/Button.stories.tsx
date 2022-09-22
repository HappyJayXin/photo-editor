import styled from 'styled-components';
import { ComponentMeta } from '@storybook/react';
import Button from '@/components/Button';
import Icon from '@/components/Icon';

const ButtonContainer = styled.div`
  button {
    margin: 0 8px 8px 0;
  }
`;

export default {
  title: 'Example/Button',
  component: Button,
  decorators: [
    (Story) => (
      <ButtonContainer>
        <Story />
      </ButtonContainer>
    ),
  ],
} as ComponentMeta<typeof Button>;

export const Color = () => (
  <>
    <Button color="primary">Primary</Button>
    <Button color="secondary">Secondary</Button>
  </>
);

export const Size = () => (
  <>
    <Button size="small">Small</Button>
    <Button size="medium">Medium</Button>
    <Button size="large">Large</Button>
  </>
);

export const Variant = () => (
  <>
    <div style={{ display: 'flex' }}>
      <Button variant="contained" color="primary">
        Contained Primary
      </Button>
      <Button variant="contained" color="secondary">
        Contained Secondary
      </Button>
    </div>

    <div style={{ display: 'flex' }}>
      <Button variant="outlined" color="primary">
        Outlined Primary
      </Button>
      <Button variant="outlined" color="secondary">
        Outlined Secondary
      </Button>
    </div>

    <div style={{ display: 'flex' }}>
      <Button variant="text" color="primary">
        Text Primary
      </Button>
      <Button variant="text" color="secondary">
        Text Secondary
      </Button>
    </div>
  </>
);

export const FullWidth = () => (
  <div style={{ width: '500px' }}>
    <Button fullWidth>FullWidth</Button>
  </div>
);

export const Disabled = () => (
  <>
    <Button isDisabled variant="contained">
      Disabled Contained
    </Button>
    <Button isDisabled variant="outlined">
      Disabled Outlined
    </Button>
    <Button isDisabled variant="text">
      Disabled Text
    </Button>
  </>
);

export const IconButton = () => (
  <>
    <Button
      variant="outlined"
      color="primary"
      startIcon={<Icon glyph="close" />}
    >
      Icon Button
    </Button>
    <Button color="secondary" minWidth="auto">
      <Icon glyph="close" />
    </Button>
  </>
);

export const LinkButton = () => (
  <>
    <Button href="/">Next Link</Button>
    <Button href="https://www.kdanmobile.com" target="_blank">
      External Link
    </Button>
  </>
);
