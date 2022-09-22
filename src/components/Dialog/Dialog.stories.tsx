import { ComponentStory, ComponentMeta } from '@storybook/react';

import Dialog from './Dialog';
import MessageContent from './components/MessageContent';

export default {
  title: 'Example/Dialog',
  component: Dialog,
} as ComponentMeta<typeof Dialog>;

const onEvent = () => {}; // eslint-disable-line @typescript-eslint/no-empty-function
const t = (k: string) => k;

const Template: ComponentStory<typeof Dialog> = (args) => (
  <Dialog {...args}>Dialog</Dialog>
);

export const Basic = Template.bind({});
Basic.args = {
  isOpen: true,
};

export const MessageDialog = () => (
  <Dialog isOpen>
    <MessageContent
      title="Invalid page range"
      body="The field is empty. Please fill a valid page range."
      onClose={onEvent}
      t={t}
    />
  </Dialog>
);
