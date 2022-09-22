import { ComponentMeta, ComponentStory } from '@storybook/react';
import ToastWrapper from './component/ToastWrapper';

export default {
  title: 'Example/Toast',
  component: ToastWrapper,
} as ComponentMeta<typeof ToastWrapper>;

const Template: ComponentStory<typeof ToastWrapper> = (args) => (
  <ToastWrapper {...args}>{args.appearance}</ToastWrapper>
);

const onClose = () => console.log('onClose');

export const Basic = Template.bind({});
Basic.args = {
  appearance: 'info',
  closeButton: false,
  onClose,
};

export const Title = Template.bind({});
Title.args = {
  appearance: 'info',
  closeButton: true,
  onClose,
  title: 'Title',
};
