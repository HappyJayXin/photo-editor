import { ComponentMeta } from '@storybook/react';
import Typography from './Typography';

export default {
  title: 'Example/Typography',
  component: Typography,
} as ComponentMeta<typeof Typography>;

export const Title = () => (
  <div
    style={{
      height: 'auto',
      display: 'flex',
      flexDirection: 'column',
    }}
  >
    <Typography variant="title1" as="h1">
      Title 1
    </Typography>
    <Typography variant="title2" as="h1">
      Title 2
    </Typography>
    <Typography variant="title3" as="h1">
      Title 3
    </Typography>
    <Typography variant="title4" as="h1">
      Title 4
    </Typography>
    <Typography variant="title5" as="h1">
      Title 5
    </Typography>
    <Typography variant="title6" as="h1">
      Title 6
    </Typography>
  </div>
);

export const SubTitle = () => (
  <div
    style={{
      height: 'auto',
      display: 'flex',
      flexDirection: 'column',
    }}
  >
    <Typography variant="subTitle1" as="h2">
      SubTitle1 1
    </Typography>
    <Typography variant="subTitle2" as="h3">
      SubTitle1 2
    </Typography>
  </div>
);

export const Body = () => (
  <div
    style={{
      height: 'auto',
      display: 'flex',
      flexDirection: 'column',
    }}
  >
    <Typography variant="body1" as="p">
      Body 1
    </Typography>
    <Typography variant="body2" as="p">
      Body 2
    </Typography>
  </div>
);

export const Align = () => (
  <div
    style={{
      height: 'auto',
      display: 'flex',
      flexDirection: 'column',
    }}
  >
    <Typography variant="body1" as="p" align="left">
      left
    </Typography>
    <Typography variant="body1" as="p" align="center">
      center
    </Typography>
    <Typography variant="body1" as="p" align="right">
      right
    </Typography>
  </div>
);

export const Color = () => (
  <div
    style={{
      height: 'auto',
      display: 'flex',
      flexDirection: 'column',
    }}
  >
    <Typography>Default</Typography>
    <Typography color="primary">Primary</Typography>
    <Typography color="secondary">Secondary</Typography>
    <Typography color="white">White</Typography>
  </div>
);
