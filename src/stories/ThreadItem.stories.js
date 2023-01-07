import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ThreadItem } from '../components/Threads';

const stories = {
  title: 'Thread Item',
  component: ThreadItem,
};

export default stories;

const TemplateStory = (args) => (
  <BrowserRouter>
    <ThreadItem {...args} />
  </BrowserRouter>
);

const threadData = {
  id: 'thread-id',
  title: 'Bagaimana pengalaman belajar kelas React di Dicoding? Apakah mudah ataukah sulit?',
  body: 'Menurut teman-teman, bagaimana pengalaman belajar kelas React di Dicoding? Apakah mudah ataukah sulit? Yuk, ceritakan di sini. Menurut teman-teman, bagaimana pengalaman belajar kelas React di Dicoding? Apakah mudah ataukah sulit? Yuk, ceritakan di sini.',
  category: 'React',
  createdAt: '2023-06-21T07:00:00.000Z',
  user: {
    name: 'Laksmana Yudha',
    email: 'yudha@yudha.com',
    avatar: 'https://ui-avatars.com/api/?name=Laksmana Yudha&background=random',
  },
  upVotesCount: 23,
  downVotesCount: 9,
  isDownVote: false,
  isUpVote: false,
  totalComments: 15,
  truncate: false,
  detailPage: '/',
  onVotes: () => {},
};

const withNeutralVotes = TemplateStory.bind({});
withNeutralVotes.args = { ...threadData };

const withUpVotes = TemplateStory.bind({});
withUpVotes.args = { ...threadData, isUpVote: true };

const withDownVotes = TemplateStory.bind({});
withDownVotes.args = { ...threadData, isDownVote: true };

const withTruncated = TemplateStory.bind({});
withTruncated.args = { ...threadData, truncate: true };

export {
  withNeutralVotes,
  withUpVotes,
  withDownVotes,
  withTruncated,
};
