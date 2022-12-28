import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Button } from 'components';

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
    color: { description: 'The global look of the button.' },
    size: { description: 'The size of the button.' },
    icon: {
      mapping: icons,
      options: Object.keys(icons),
      description:
        "An icon to be displayed in front of the button's text. I advise using AntDesign's icons.",
    },
    iconPosition: { description: 'The position of the icon.' },
    fullWidth: {
      defaultValue: false,
      description:
        'Define if the button has to take the whole width available.',
    },
    disabled: {
      defaultValue: false,
      description: 'Define the availability of the button.',
    },
    loading: {
      defaultValue: false,
      description: 'Define if the availability of the button is loading.',
    },
    htmlType: { description: 'The HTML type attribute.' },
    children: {
      defaultValue: 'Button',
      description: 'The text that will be displayed in the button.',
    },
    onClick: {
      defaultValue: undefined,
      description: 'A function to be executed on click.',
    },
  },
  parameters: {
    layout: 'centered',
  },
} as ComponentMeta<typeof Button>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

const WithContainer: ComponentStory<typeof Button> = (args) => (
  <div style={{ width: '300px', height: '100px', border: '1px solid red' }}>
    <Button {...args} />
  </div>
);

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  children: 'Primary',
};
export const Small = Template.bind({});
Small.args = {
  size: 'small',
  children: 'Small',
};
export const Large = Template.bind({});
Large.args = {
  size: 'large',
  children: 'Large',
};
export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
  children: 'Disabled',
};
export const Loading = Template.bind({});
Loading.args = {
  loading: true,
  children: 'Loading',
};
export const OnClick = Template.bind({});
OnClick.args = {
  onClick: () => {
    alert('You clicked me!');
  },
  children: 'Click-me!',
};

export const Secondary = Template.bind({});
Secondary.args = {
  color: 'secondary',
  children: 'Secondary',
};
Secondary.parameters = {
  backgrounds: { default: 'dark' },
};
export const Tertiary = Template.bind({});
Tertiary.args = {
  color: 'tertiary',
  children: 'Tertiary',
};

export const Check = Template.bind({});
Check.args = {
  color: 'check',
  children: 'Check',
  icon: icons.Check,
};
export const Warning = Template.bind({});
Warning.args = {
  color: 'warning',
  children: 'Warning',
  icon: icons.Warning,
};
export const Alert = Template.bind({});
Alert.args = {
  color: 'alert',
  children: 'Alert',
  icon: icons.Close,
};
export const Info = Template.bind({});
Info.args = {
  color: 'info',
  children: 'Info',
  icon: icons.Info,
};

export const FullWidth = WithContainer.bind({});
FullWidth.args = {
  fullWidth: true,
  children: 'Full width',
};
