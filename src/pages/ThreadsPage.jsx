import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FiPlus } from 'react-icons/fi';
import { useNavigate, Outlet, Link } from 'react-router-dom';
import { Input } from '../components/Form';
import withSidebar from '../hoc/withSidebar';
import { ThreadCategory, ThreadCategoryContainer, ThreadLists } from '../components/Threads';
import { UserProfile } from '../components/UserProfile';
import '../styles/pages/threads-page.css';
import { asyncPopulateUsersThreadsCategories } from '../states/shared/action';
import { makeid } from '../utils';
import { asyncDownvoteThread, asyncNeutralvoteThread, asyncUpvoteThread } from '../states/threads/action';
import { setThreadCategoryActionCreator } from '../states/threadCategory/action';
import useInput from '../hooks/useInput';

function ThreadsPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [ctgSearch, setCtgSearch] = useInput();
  const {
    threads = [],
    users = [],
    authUser,
    threadCategory = [],
    threadCategories = [],
  } = useSelector((states) => states);

  const onVotes = (votesType, threadId) => {
    if (!authUser) return;
    if (votesType === 'upVotes') dispatch(asyncUpvoteThread(threadId));
    if (votesType === 'downVotes') dispatch(asyncDownvoteThread(threadId));
    if (votesType === 'neutralVotes') dispatch(asyncNeutralvoteThread(threadId));
  };
  const onCategoryClick = (active, category) => dispatch(setThreadCategoryActionCreator(category));
  const filterThreads = () => {
    let threadLists = threadCategory.length > 0
      ? threads.filter((thread) => threadCategory.includes(thread.category)) : threads;
    threadLists = threadLists.map((thread) => ({
      ...thread,
      user: users.find((user) => user.id === thread.ownerId) || {},
      upVotesCount: thread.upVotesBy.length,
      downVotesCount: thread.downVotesBy.length,
      isUpVote: authUser ? thread.upVotesBy.includes(authUser.id) : false,
      isDownVote: authUser ? thread.downVotesBy.includes(authUser.id) : false,
      detailPage: `/thread/${thread.id}`,
      onVotes,
    }));
    return threadLists;
  };

  useEffect(() => {
    dispatch(asyncPopulateUsersThreadsCategories());
  }, [dispatch]);

  const threadLists = filterThreads();
  const categories = threadCategories.filter((category) => category.includes(ctgSearch));
  return (
    <>
      <section className="threads-page page page--aside">
        <div className="threads-page__main">
          <div className="thread-lists-container">
            <div>
              <div className="create-thread-container">
                <h2 className="page-title">Latest Discussion</h2>
                {
                  authUser
                    ? (
                      <button type="button" className="create-thread" onClick={() => navigate('/threads/new')}>
                        <FiPlus />
                        { ' ' }
                        <span className="create-thread-label">New Thread</span>
                      </button>
                    )
                    : <h4 className="no-login-text-display"><Link to="/login">Login to explore</Link></h4>
                }
              </div>
              <ThreadLists threads={threadLists} threadTruncate />
            </div>
          </div>
          <aside className="thread-side-contents">
            <div className="profile-content">
              {authUser && <UserProfile {...authUser} />}
            </div>
            <h4 className="find-categories">Find Categories</h4>
            <Input type="text" placeholder="Search category" onChange={setCtgSearch} value={ctgSearch} />
            <div className="categories-content">
              <ThreadCategoryContainer>
                {categories.map((category) => (
                  <ThreadCategory
                    label={category}
                    active={threadCategory.includes(category)}
                    key={makeid(6)}
                    action={onCategoryClick}
                  />
                ))}
              </ThreadCategoryContainer>
            </div>
          </aside>
        </div>
      </section>
      <Outlet />
    </>
  );
}

export default withSidebar(ThreadsPage);
