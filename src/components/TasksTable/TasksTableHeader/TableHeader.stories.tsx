import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import TableHeader from "./TableHeader";

export default {
  title: "Tasks table/Table Header",
  component: TableHeader,
} as ComponentMeta<typeof TableHeader>;

const Template: ComponentStory<typeof TableHeader> = (args) => (
  <TableHeader {...args} />
);

export const Active = Template.bind({});

Active.args = {
  title: "Active tasks",
};
