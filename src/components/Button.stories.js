import React from 'react';
import Button from './Button';


export default {
  component: Button,
  title: 'Button',
  argTypes: {
    color: {
      options: [
        "primary",
        "secondary",
        "red",
        "blue"
      ],
      control: { type: "select" }
    },
    type: {
      options: [
        "primary",
        "secondary",
        "outline",
      ],
      control: { type: "select" }
    }
  }
};

const Template = args => {
  console.log(args);
  return (
    <Button {...args} />
  )
};
const TemplateWithBackground = args => (
  <div style={{ backgroundColor: '#959595', height: '100%', padding: 20 }}>
    <Button {...args} />
  </div>
)

export const DefaultButton = Template.bind({});
DefaultButton.args = {
  onClick: () => { },
  content: 'Click',
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

export const OutlineButton = Template.bind({});
OutlineButton.args = {
  ...DefaultButton.args,
  color: "red",
  type: 'outline',
  dense: false,
};

export const DenseButton = Template.bind({});
DenseButton.args = {
  ...DefaultButton.args,
  dense: true,  
}