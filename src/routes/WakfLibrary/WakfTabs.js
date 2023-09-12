import React from 'react';
import { Tabs } from 'antd';
import AllPosts from './AllPosts';
const onChange = (key) => {
  console.log(key);
};
const items = [
  {
    key: '1',
    label: 'المقالات',
    children: <AllPosts/>,
  },
  {
    key: '2',
    label: 'المرئيات',
    children: 'Content of Tab Pane 2',
  },
  {
    key: '3',
    label: 'الصور',
    children: 'Content of Tab Pane 3',
  },
];
const WakfTabs = () => <Tabs defaultActiveKey="1" items={items} onChange={onChange} />;
export default WakfTabs;