import React from 'react';
import { Link } from 'react-router-dom';
import { FormSubmit, Textarea, Form } from '../components/Form';
import withSidebar from '../components/hoc/withSidebar';
import ThreadItem from '../components/Threads/ThreadItem';
import { UserProfile } from '../components/UserProfile';
import { Votes } from '../components/Votes';
import '../styles/pages/thread-detail-page.css';
import { postedAt } from '../utils';

function ThreadDetail() {
  const threadDetail = {
    id: 'thread-1',
    title: 'Thread Keenam rule is a formatting or documenting ?',
    body: 'This rule is a formatting/documenting preference and not following it wont negatively affect the quality of your code. This rule encourages prop types that more specifically document their usage. specifically document their usage.',
    category: 'General',
    createdAt: '2022-12-23T07:00:00.000Z',
    owner: {
      id: 'users-1',
      name: 'John Doe',
      avatar: 'https://ui-avatars.com/api/?name=JohnDoe&background=random',
    },
    upVotesBy: ['john_doe'],
    downVotesBy: [],
    comments: [
      {
        id: 'comment-1',
        content: 'Ini adalah komentar pertama',
        createdAt: '2022-12-21T07:00:00.000Z',
        owner: {
          id: 'john_doe',
          name: 'John Doe',
          avatar: 'https://ui-avatars.com/api/?name=JohnDoe&background=random',
        },
        upVotesBy: ['john_doe'],
        downVotesBy: [],
      },
      {
        id: 'comment-2',
        content: 'Ini adalah komentar kedua',
        createdAt: '2022-06-21T07:00:00.000Z',
        owner: {
          id: 'john_doe',
          name: 'John Doe',
          avatar: 'https://ui-avatars.com/api/?name=JohnDoe&background=random',
        },
        upVotesBy: [],
        downVotesBy: [],
      },
    ],
  };

  const authUser = {
    id: 'john_doe',
    name: 'John Doe',
    email: 'john@example.com',
    avatar: 'https://ui-avatars.com/api/?name=Hasan&background=random',
  };

  const threadDetailDisplay = {
    ...threadDetail,
    user: threadDetail.owner,
    upVotesCount: threadDetail.upVotesBy.length,
    downVotesCount: threadDetail.downVotesBy.length,
    isUpVote: threadDetail.upVotesBy.includes(authUser.id),
    isDownVote: threadDetail.downVotesBy.includes(authUser.id),
    totalComments: threadDetail.comments.length,
  };

  const comments = threadDetail.comments.map((comment) => ({
    ...comment,
    upVotesCount: comment.upVotesBy.length,
    downVotesCount: comment.downVotesBy.length,
    isUpVote: comment.upVotesBy.includes(authUser.id),
    isDownVote: comment.downVotesBy.includes(authUser.id),
  }));

  return (
    <section className="thread-detail-page page--aside">
      <div className="thread-detail-page__main">
        <div className="thread-detail-container">
          <div>
            <div className="thread-detail">
              <UserProfile {...threadDetail.owner} />
              <ThreadItem {...threadDetailDisplay} />
            </div>
            <div className="thread-comments">
              <div className="comments-branch">
                <div className="comments-lists">
                  {comments.map((comment) => (
                    <div className="comment" key={comment.id}>
                      <UserProfile {...comment.owner} />
                      <div className="comment-body">
                        <Votes {...comment} />
                        <div className="comment-content">
                          <div className="content">
                            {comment.content}
                          </div>
                          <div className="created-at">
                            <span>{postedAt(comment.createdAt)}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="thread-comment-input">
              <h4>Your comment</h4>
              <Form>
                <Textarea placeholder="Your commment here" />
                <FormSubmit label="Send" />
              </Form>
            </div>
          </div>
        </div>
        <div className="thread-detail-side-contents">
          <div className="threads-content">
            <h4>Related Threads</h4>
            <ul>
              <li>
                <Link to="/">
                  related tthread related thread realted thread ?
                </Link>
              </li>
              <li>
                <Link to="/">
                  related tthread related thread realted thread ?
                </Link>
              </li>
              <li>
                <Link to="/">
                  related tthread related thread realted thread ?
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default withSidebar(ThreadDetail);
