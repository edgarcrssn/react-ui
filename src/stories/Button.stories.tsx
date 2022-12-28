import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Button } from '../components';

import {
  CheckCircleOutlined,
  CloseCircleOutlined,
  InfoCircleOutlined,
  WarningOutlined,
} from '@ant-design/icons';

const icons = {
  Check: <CheckCircleOutlined />,
  Info: <InfoCircleOutlined />,
  Warning: <WarningOutlined />,
  Close: <CloseCircleOutlined />,
};

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Atoms/Button',
  component: Button,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    icon: { mapping: icons, options: Object.keys(icons) },
  },
  parameters: {
    layout: 'centered',
  },
} as ComponentMeta<typeof Button>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  color: 'primary',
  children: 'Primary',
};

export const Secondary = Template.bind({});
Secondary.args = {
  color: 'secondary',
  children: 'Secondary',
};
Secondary.parameters = {
  backgrounds: { default: 'dark' },
};

export const Warning = Template.bind({});
Warning.args = {
  color: 'warning',
  children: 'Warning',
  icon: icons.Warning,
};
