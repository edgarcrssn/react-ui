import React, { useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Input } from 'components';

export default {
  title: 'Atoms/Input',
  component: Input,
  argTypes: {},
  parameters: {
    layout: 'centered',
  },
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => {
  const [value, setValue] = useState<string>('');
  return (
    <div style={{ width: '300px' }}>
      <Input {...args} value={value} setValue={setValue} />
    </div>
  );
};

export const Primary = Template.bind({});
Primary.args = {
  placeholder: 'Votre nom',
};
export const WithLabel = Template.bind({});
WithLabel.args = {
  label: 'Votre nom',
};
export const WithLabelInRow = Template.bind({});
WithLabelInRow.args = {
  label: 'Votre nom',
  direction: 'row',
};

export const TypeNumber = Template.bind({});
TypeNumber.args = {
  label: 'Saisissez un nombre',
  type: 'number',
};
export const TypeTel = Template.bind({});
TypeTel.args = {
  label: 'Votre numéro de téléphone',
  type: 'tel',
};
export const TypeEmail = Template.bind({});
TypeEmail.args = {
  label: 'Votre adresse email',
  type: 'email',
};
export const TypeSearch = Template.bind({});
TypeSearch.args = {
  label: 'Votre recherche',
  type: 'search',
};
export const TypePassword = Template.bind({});
TypePassword.args = {
  label: 'Votre mot de passe',
  type: 'password',
};

export const Disabled = Template.bind({});
Disabled.args = {
  label: 'Champ interdit',
  disabled: true,
};
