import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { getSummaryInfo } from "../../../utils/utils";
import SummaryTableItem from "./SummaryTableItem";

export default {
  title: "Summary table/Summary Table Item",
  component: SummaryTableItem,
} as ComponentMeta<typeof SummaryTableItem>;

const Template: ComponentStory<typeof SummaryTableItem> = (args) => (
  <SummaryTableItem {...args} />
);

export const Single = Template.bind({});

Single.args = {
  active: 1,
  archive: 2,
  category: "Idea",
};
