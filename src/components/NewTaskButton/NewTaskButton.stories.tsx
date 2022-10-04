import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import NewTaskButton from "./NewTaskButton";

export default {
  title: "New Task Button",
  component: NewTaskButton,
} as ComponentMeta<typeof NewTaskButton>;

const Template: ComponentStory<typeof NewTaskButton> = (args) => (
  <NewTaskButton {...args}/>
);

export const Regular = Template.bind({});

Regular.args = {
  text: "+ Add new Task",
};
