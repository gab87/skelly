import type { Meta, StoryObj } from '@storybook/react';
import { SkellyProfile } from '../src/components/SkellyProfile/SkellyProfile';

const meta: Meta<typeof SkellyProfile> = {
  title: 'Components/SkellyProfile',
  component: SkellyProfile,
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
  decorators: [
    (Story) => (
      <div style={{ width: 280 }}>
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof SkellyProfile>;

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
