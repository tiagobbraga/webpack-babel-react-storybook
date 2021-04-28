import React from "react";

import HelloWorld from "./HelloWorld";

export default {
  title: "Components/HelloWorld",
  component: HelloWorld,
  argTypes: {},
};

const Template = (args) => <HelloWorld {...args} />;

export const Simple = Template.bind({});
Simple.args = {};
