import React from 'react';
import { Input } from '../components/Form';
import { ThreadCategory, ThreadCategoryContainer, ThreadLists } from '../components/Threads';
import { UserProfile } from '../components/UserProfile';
import '../styles/pages/threads-page.css';

function ThreadsPage() {
  const threads = [
    {
      id: 'thread-1',
      title: 'Thread Pertama rule is a formatting or documenting rule is a formatting or documenting ?',
      body: 'This rule is a formatting/documenting preference and not following it wont negatively affect the quality of your code. This rule encourages prop types that more specifically document their usage.',
      category: 'python',
      createdAt: '2022-12-21T07:00:00.000Z',
      ownerId: 'john_doe',
      upVotesBy: [],
      downVotesBy: [],
      totalComments: 3,
    },
    {
      id: 'thread-2',
      title: 'Thread Kedua rule is a formatting or documenting is a formatting or documenting rule is a formatting or documenting  ?',
      body: 'This rule is a formatting/documenting preference and not following it wont negatively affect the quality of your code. This rule encourages prop types that more specifically document their usage.',
      category: 'github',
      createdAt: '2022-12-21T07:00:00.000Z',
      ownerId: 'jane_doe',
      upVotesBy: ['john_doe'],
      downVotesBy: [],
      totalComments: 2,
    },
    {
      id: 'thread-3',
      title: 'Thread Ketiga rule is a formatting or documenting ?',
      body: 'This rule is a formatting/documenting preference and not following it wont negatively affect the quality of your code. This rule encourages prop types that more specifically document their usage.',
      category: 'github',
      createdAt: '2022-09-21T07:00:00.000Z',
      ownerId: 'jane_doe',
      upVotesBy: [],
      downVotesBy: [],
      totalComments: 23,
    },
    {
      id: 'thread-4',
      title: 'Thread Keempat rule is a formatting or documenting ?',
      body: 'This rule is a formatting/documenting preference and not following it wont negatively affect the quality of your code. This rule encourages prop types that more specifically document their usage.',
      category: 'github',
      createdAt: '2022-09-21T07:00:00.000Z',
      ownerId: 'jane_doe',
      upVotesBy: [],
      downVotesBy: [],
      totalComments: 23,
    },
    {
      id: 'thread-5',
      title: 'Thread Kelima rule is a formatting or documenting ?',
      body: 'This rule is a formatting/documenting preference and not following it wont negatively affect the quality of your code. This rule encourages prop types that more specifically document their usage.',
      category: 'github',
      createdAt: '2022-09-21T07:00:00.000Z',
      ownerId: 'jane_doe',
      upVotesBy: [],
      downVotesBy: [],
      totalComments: 23,
    },
    {
      id: 'thread-6',
      title: 'Thread Keenam rule is a formatting or documenting ?',
      body: 'This rule is a formatting/documenting preference and not following it wont negatively affect the quality of your code. This rule encourages prop types that more specifically document their usage.',
      category: 'github',
      createdAt: '2022-09-21T07:00:00.000Z',
      ownerId: 'jane_doe',
      upVotesBy: [],
      downVotesBy: [],
      totalComments: 23,
    },
    {
      id: 'thread-7',
      title: 'Thread Keenam rule is a formatting or documenting ?',
      body: 'This rule is a formatting/documenting preference and not following it wont negatively affect the quality of your code. This rule encourages prop types that more specifically document their usage.',
      category: 'github',
      createdAt: '2022-09-21T07:00:00.000Z',
      ownerId: 'jane_doe',
      upVotesBy: [],
      downVotesBy: [],
      totalComments: 23,
    },
    {
      id: 'thread-8',
      title: 'Thread Keenam rule is a formatting or documenting ?',
      body: 'This rule is a formatting/documenting preference and not following it wont negatively affect the quality of your code. This rule encourages prop types that more specifically document their usage.',
      category: 'github',
      createdAt: '2022-09-21T07:00:00.000Z',
      ownerId: 'jane_doe',
      upVotesBy: [],
      downVotesBy: [],
      totalComments: 23,
    },
  ];

  const users = [
    {
      id: 'john_doe',
      name: 'John Doe',
      email: 'john@example.com',
      avatar: 'https://generated-image-url.jpg',
    },
    {
      id: 'jane_doe',
      name: 'Jane Doe',
      email: 'jane@example.com',
      avatar: 'https://generated-image-url.jpg',
    },
    {
      id: 'fulan',
      name: 'Si Fulan',
      email: 'fulan@example.com',
      avatar: 'https://generated-image-url.jpg',
    },
  ];

  const authUser = {
    id: 'john_doe',
    name: 'John Doe',
    email: 'john@example.com',
    avatar: 'https://ui-avatars.com/api/?name=Hasan&background=random',
  };

  const categories = ['python', 'github', 'react', 'javascript', 'git', 'redux'];

  const threadCategory = ['python'];

  const threadLists = threads.map((thread) => ({
    ...thread,
    user: users.find((user) => user.id === thread.ownerId),
    upVotesCount: thread.upVotesBy.length,
    downVotesCount: thread.downVotesBy.length,
    isUpVote: thread.upVotesBy.includes(authUser.id),
    isDownVote: thread.downVotesBy.includes(authUser.id),
  }));

  return (
    <section className="threads-page page page--aside">
      <div className="threads-page__main">
        <div className="thread-lists-container">
          <ThreadLists threads={threadLists} />
        </div>
        <aside className="thread-side-contents">
          <div className="profile-content">
            <UserProfile {...authUser} />
          </div>
          <h4 className="find-categories">Find Categories</h4>
          <Input type="text" placeholder="Search category" />
          <div className="categories-content">
            <ThreadCategoryContainer>
              {categories.map((category) => (
                <ThreadCategory
                  label={category}
                  isActive={threadCategory.includes(category)}
                  key={category}
                />
              ))}
            </ThreadCategoryContainer>
          </div>
        </aside>
      </div>
    </section>
  );
}

export default ThreadsPage;
