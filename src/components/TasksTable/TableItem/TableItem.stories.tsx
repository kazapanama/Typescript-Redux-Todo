import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import  TableItem  from './TableItem';
import { Provider } from 'react-redux';
import { store } from '../../../store';


export default {
  title: 'Tasks table/TableItem',
  component: TableItem,
  decorators: [
    (Story) => (
      <Provider store={store}>
        <Story />
      </Provider>
    ),
  ],

} as ComponentMeta<typeof TableItem>;


const Template: ComponentStory<typeof TableItem> = (args) => <TableItem {...args} />;

export const Primary = Template.bind({});

Primary.args = {
 item:{
  id:1, 
  name:"CreateToDOs",
  createdAt:"13.09.2022",
  category:"task",
  isArchive:false, 
  content:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy"
 }
  

};