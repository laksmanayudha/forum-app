import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { FormSubmit, Textarea, Form } from '../components/Form';
import withSidebar from '../hoc/withSidebar';
import ThreadItem from '../components/Threads/ThreadItem';
import { UserProfile } from '../components/UserProfile';
import '../styles/pages/thread-detail-page.css';
import { CommentsBranch, CommentsLists } from '../components/Comments';
import { asyncPopulateThreadDetailAndThreads } from '../states/shared/action';
import useInput from '../hooks/useInput';
import {
  asyncAddComment,
  asyncDownvoteComment,
  asyncDownvoteThreadDetail,
  asyncNeutralvoteComment,
  asyncNeutralvoteThreadDetail,
  asyncUpvoteComment,
  asyncUpvoteThreadDetail,
} from '../states/threadDetail/action';

function ThreadDetailPage() {
  const { threadId } = useParams();
  const { threadDetail = null, authUser, threads = [] } = useSelector((states) => states);
  const [content, setContent] = useInput();
  const dispatch = useDispatch();
  const textArea = useRef();
  const onCommentSubmit = (e) => {
    e.preventDefault();
    dispatch(asyncAddComment(threadId, content));
    textArea.current.innerHTML = '';
  };
  const onThreadVotes = (votesType, id) => {
    if (!authUser) return;
    if (votesType === 'upVotes') dispatch(asyncUpvoteThreadDetail(id));
    if (votesType === 'downVotes') dispatch(asyncDownvoteThreadDetail(id));
    if (votesType === 'neutralVotes') dispatch(asyncNeutralvoteThreadDetail(id));
  };
  const onCommentVotes = (votesType, commentId) => {
    if (!authUser) return;
    if (votesType === 'upVotes') dispatch(asyncUpvoteComment(threadDetail.id, commentId));
    if (votesType === 'downVotes') dispatch(asyncDownvoteComment(threadDetail.id, commentId));
    if (votesType === 'neutralVotes') dispatch(asyncNeutralvoteComment(threadDetail.id, commentId));
  };

  useEffect(() => {
    dispatch(asyncPopulateThreadDetailAndThreads(threadId));
  }, [threadId, dispatch]);

  if (!threadDetail) return null;
  if (threadDetail.id !== threadId) return null;

  const threadDetailDisplay = {
    ...threadDetail,
    user: threadDetail.owner,
    upVotesCount: threadDetail.upVotesBy.length,
    downVotesCount: threadDetail.downVotesBy.length,
    isUpVote: authUser ? threadDetail.upVotesBy.includes(authUser.id) : false,
    isDownVote: authUser ? threadDetail.downVotesBy.includes(authUser.id) : false,
    totalComments: threadDetail.comments.length,
    onVotes: onThreadVotes,
  };

  const comments = threadDetail.comments.map((comment) => ({
    ...comment,
    owner: { ...comment.owner, email: '' },
    upVotesCount: comment.upVotesBy.length,
    downVotesCount: comment.downVotesBy.length,
    isUpVote: authUser ? comment.upVotesBy.includes(authUser.id) : false,
    isDownVote: authUser ? comment.downVotesBy.includes(authUser.id) : false,
    onVotes: onCommentVotes,
  }));

  const relatedThreads = threads.filter((thread, index) => index < 4);

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
              <CommentsBranch>
                <CommentsLists comments={comments} />
              </CommentsBranch>
            </div>
            <div className="thread-comment-input">
              <h4>Your comment</h4>
              {
                authUser
                  ? (
                    <Form onSubmit={onCommentSubmit}>
                      <Textarea placeholder="Your commment here" onInput={setContent} reference={textArea} />
                      <FormSubmit label="Send" />
                    </Form>
                  )
                  : <h4 className="no-login-text-display"><Link to="/login">Login to add comment</Link></h4>
              }
            </div>
          </div>
        </div>
        <div className="thread-detail-side-contents">
          <div className="threads-content">
            <h4>Related Threads</h4>
            <ul>
              {relatedThreads && relatedThreads.map((thread) => (
                <li key={thread.id}>
                  <Link to={`/thread/${thread.id}`}>
                    {thread.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default withSidebar(ThreadDetailPage);
