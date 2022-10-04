import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import ModalForm from "./ModalForm";

export default {
  title: "Modal Form",
  component: ModalForm,
} as ComponentMeta<typeof ModalForm>;

const mockItem1 = {
  id: 1,
  name: "",
  createdAt: "",
  category: "task",
  isArchive: false,
  content: "",
};

const mockItem2 = {
  id: 1,
  name: "CreateToDOs",
  createdAt: "13.09.2022",
  category: "task",
  isArchive: false,
  content:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy",
};

const Template: ComponentStory<typeof ModalForm> = (args) => (
  <ModalForm {...args} />
);

export const Empty = Template.bind({});

Empty.args = {
  item: mockItem1,
};

export const Active = Template.bind({});

Active.args = {
  item: mockItem2,
};
