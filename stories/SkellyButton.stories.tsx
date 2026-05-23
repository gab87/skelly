import type { Meta, StoryObj } from '@storybook/react';
import { SkellyButton } from '../src/components/SkellyButton/SkellyButton';

const meta: Meta<typeof SkellyButton> = {
  title: 'Components/SkellyButton',
  component: SkellyButton,
  argTypes: {
    animation: {
      control: 'select',
      options: ['none', 'shiny', 'flicker'],
    },
    speed: { control: 'number' },
    background: { control: 'color' },
    color: { control: 'color' },
    border: { control: 'text' },
  },
};

export default meta;
type Story = StoryObj<typeof SkellyButton>;

export const Default: Story = {};

export const WithShiny: Story = {
  args: {
    animation: 'shiny',
    speed: 1500,
  },
};

export const WithFlicker: Story = {
  args: {
    animation: 'flicker',
    speed: 2000,
  },
};

export const CustomColor: Story = {
  args: {
    color: '#a0c4ff',
    border: '2px solid #6495ed',
  },
};
