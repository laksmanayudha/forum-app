import React from 'react';
import { UserProfile } from '../components/UserProfile';

const stories = {
  title: 'User Profile',
  component: UserProfile,
};

const TemplateStory = (args) => (<UserProfile {...args} />);
const userProfile = TemplateStory.bind({});
userProfile.args = {
  avatar: 'https://ui-avatars.com/api/?name=Laksmana Yudha&background=random',
  name: 'Laksmana Yudha',
  email: 'yudha@yudha.com',
};

export default stories;
export { userProfile };
