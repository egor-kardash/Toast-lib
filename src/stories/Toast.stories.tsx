import React from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';

import { ToastFactory } from '@/components/ToastFactory';
import theme from '@/theme';
import { ButtonType } from '@/types';

export default {
  title: 'Toast library',
  argTypes: {
    type: {
      options: ['Info', 'Warning', 'Error', 'Success'],
      control: {
        type: ButtonType.InlineRadio,
      },
    },
    position: {
      options: ['left', 'center', 'right'],
      control: {
        type: ButtonType.InlineRadio,
      },
    },
    isAutoDeleted: {
      control: {
        type: 'boolean',
      },
    },
    showDuration: {
      defaultValue: 3000,
      options: Object.values(theme.durations.millisecond),
      control: {
        type: ButtonType.InlineRadio,
      },
    },
    animationType: {
      options: [
        'right-to-left',
        'left-to-right',
        'top-to-bottom',
        'bottom-to-top',
      ],
      control: {
        type: ButtonType.InlineRadio,
      },
    },
    animationDuration: {
      defaultValue: 0.5,
      options: Object.values(theme.durations.second),
      control: {
        type: ButtonType.InlineRadio,
      },
    },
    spaces: {
      defaultValue: 0,
      options: Object.values(theme.spaces),
      control: {
        type: ButtonType.InlineRadio,
      },
    },
    title: {
      defaultValue: '',
      type: 'string',
    },
    description: {
      defaultValue: '',
      type: 'string',
    },
    color: {
      control: {
        type: 'color',
      },
    },
  },
} as ComponentMeta<typeof ToastFactory>;

const Template: ComponentStory<typeof ToastFactory> = (args) => (
  <ToastFactory {...args} />
);

export const Toast = Template.bind({});
Toast.args = {
  type: 'Success',
  position: 'left',
  isAutoDeleted: true,
  showDuration: 3000,
  animationType: 'top-to-bottom',
};
