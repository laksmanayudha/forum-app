import React from 'react';
import { ThreadCategory } from '../components/Threads';

const stories = {
  title: 'Thread Category',
  component: ThreadCategory,
};

const TemplateStory = (args) => <ThreadCategory {...args} />;
const defaultCategory = TemplateStory.bind({});
defaultCategory.args = {
  label: 'default category',
  active: false,
  action: () => {},
};

const activeCategory = TemplateStory.bind({});
activeCategory.args = {
  label: 'actived category',
  active: true,
  action: () => {},
};

export default stories;
export {
  defaultCategory,
  activeCategory,
};
