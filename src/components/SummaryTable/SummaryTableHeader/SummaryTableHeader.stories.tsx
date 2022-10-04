import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import SummaryTableHeader from "./SummaryTableHeader";

export default {
  title: "Summary table/Summary Table Header",
  component: SummaryTableHeader,
} as ComponentMeta<typeof SummaryTableHeader>;

const Template: ComponentStory<typeof SummaryTableHeader> = (args) => (
  <SummaryTableHeader {...args} />
);

export const Summary = Template.bind({});

Summary.args = {
  title: "Summary",
};
