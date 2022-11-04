import '../../index.css';
import ConfirmModal from './ConfirmModal';
import { ComponentStory } from '@storybook/react';

export default {
  title: 'Modal',
  component: ConfirmModal,
  argTypes: {
    backgroundColor: {
      type: 'string',
      control: 'text',
    },
    borderColor: {
      type: 'string',
      control: 'text',
    },
    borderThickness: {
      type: 'string',
      control: 'text',
    },
  },
};

export const Confirm: ComponentStory<typeof ConfirmModal> = (arg) => (
  <ConfirmModal {...arg} />
);
Confirm.args = {
  isConfirmModalShown: true,
  backgroundColor: '#fff',
  borderColor: 'transparent',
  borderThickness: '0',
};
