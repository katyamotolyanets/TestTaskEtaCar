import Input from './Input';
import { ComponentStory } from '@storybook/react';

export default {
  title: 'Input',
  component: Input,
  argTypes: {
    value: {
      type: 'string',
      control: 'text',
    },
    type: {
      control: 'select',
      options: ['number', 'text', 'email', 'password'],
    },
  },
};

export const Default: ComponentStory<typeof Input> = (arg) => <Input {...arg} />;
Default.args = {
  value: '0.00',
  type: 'number',
};
