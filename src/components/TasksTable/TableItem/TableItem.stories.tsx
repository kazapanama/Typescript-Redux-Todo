import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import TableItem from "./TableItem";

export default {
  title: "Tasks table/Table Item",
  component: TableItem,
} as ComponentMeta<typeof TableItem>;

const mockItem = {
  id: 1,
  name: "CreateToDOs",
  createdAt: "13.09.2022",
  category: "task",
  isArchive: false,
  content:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy",
};
const Template: ComponentStory<typeof TableItem> = (args) => (
  <TableItem {...args} />
);

export const Single = Template.bind({});

Single.args = {
  item: mockItem,
};
