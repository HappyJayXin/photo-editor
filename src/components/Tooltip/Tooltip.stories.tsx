import { ComponentStory, ComponentMeta } from '@storybook/react';
import Tooltip from '@/components/Tooltip';

export default {
  title: 'Example/Tooltip',
  component: Tooltip,
} as ComponentMeta<typeof Tooltip>;

const Template: ComponentStory<typeof Tooltip> = (args) => (
  <Tooltip {...args}>Tooltip</Tooltip>
);

export const Basic = Template.bind({});
Basic.args = {
  placement: 'right',
  content: <div>Right Content</div>,
  on: ['hover'],
  isArrow: false,
  initialTime: 0,
  skidding: 0,
  distance: 8,
};

export const on = Template.bind({});
on.args = {
  placement: 'top',
  content: <div>Top Content</div>,
  on: ['click'],
};

export const Arrow = Template.bind({});
Arrow.args = {
  placement: 'top',
  content: (
    <div>
      Your files will be automatically deleted from our server after 24 hours.
      Remember to download files after you finish editing.
    </div>
  ),
  isArrow: true,
};

export const initialTime = Template.bind({});
initialTime.args = {
  placement: 'bottom',
  content: (
    <div>The message is displayed at first and closes after five seconds.</div>
  ),
  isArrow: true,
  initialTime: 5,
};

export const Distance = Template.bind({});
Distance.args = {
  placement: 'bottom',
  content: <div>The popper is offset 32px away from the reference.</div>,
  isArrow: true,
  initialTime: 999999,
  distance: 32,
};

export const Skidding = Template.bind({});
Skidding.args = {
  placement: 'bottom',
  content: <div>The popper is offset 32px along the reference.</div>,
  isArrow: true,
  initialTime: 999999,
  skidding: 32,
};
