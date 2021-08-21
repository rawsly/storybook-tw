import React from 'react';
import Button from './Button';


export default {
  component: Button,
  title: 'Button',
  argTypes: {
    color: {
      options: [
        "red",
        "blue"
      ],
      control: { type: "select" }
    },
    type: {
      options: [
        "primary",
        "secondary",
        "outlined",
      ],
      control: { type: "select" }
    }
  }
};

const Template = args => <Button {...args} />;
const TemplateWithBackground = args => (
  <div style={{ backgroundColor: '#959595', height: '100%', padding: 20 }}>
    <Button {...args} />
  </div>
)

export const DefaultButton = Template.bind({});
DefaultButton.args = {
  onClick: () => { },
  content: 'Click Me!',
  dense: false,
};

export const PrimaryButton = Template.bind({});
PrimaryButton.args = {
  ...DefaultButton.args,
  type: 'primary',
  dense: false,
};

export const SecondaryButton = TemplateWithBackground.bind({});
SecondaryButton.args = {
  ...DefaultButton.args,
  type: 'secondary',
  dense: false,
};

export const OutlinedButton = Template.bind({});
OutlinedButton.args = {
  ...DefaultButton.args,
  color: "red",
  type: 'outlined',
  dense: false,
};

export const Colored = Template.bind({});
Colored.args = {
  ...DefaultButton.args,
  color: "red",
  dense: false,
};