import React from 'react';
import { Meta, Story } from '@storybook/react';
import Card from './Card';

export default {
  title: 'Card',
  component: Card,
} as Meta;

const Template: Story<React.ComponentProps<typeof Card>> = (args) => <Card {...args} />;

export const Basic = Template.bind({});
Basic.args = {
  title: 'Card Title',
  content: 'This is a simple card with a title and content.',
};

export const Custom = Template.bind({});
Custom.args = {
  title: 'Custom Card',
  content: 'This card can be customized with different content.',
};
