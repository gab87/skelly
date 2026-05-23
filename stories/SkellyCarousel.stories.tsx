import type { Meta, StoryObj } from '@storybook/react';
import { SkellyCarousel } from '../src/components/SkellyCarousel/SkellyCarousel';

const meta: Meta<typeof SkellyCarousel> = {
  title: 'Components/SkellyCarousel',
  component: SkellyCarousel,
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
      <div style={{ width: 350 }}>
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof SkellyCarousel>;

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
