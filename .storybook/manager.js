import { addons } from '@storybook/addons';
import { create } from '@storybook/theming';

const theme = create({
  base: 'light',

  colorPrimary: '#575B75',
  colorSecondary: '#007AFF',

  // UI
  appBg: '#F7F7F7',
  appBorderColor: '#F7F7F7',
  appBorderRadius: 8,

  // Text colors
  textColor: '#575B75',
  brandTarget: '_self',
});

addons.setConfig({
  theme,
});
