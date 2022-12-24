import React from 'react';
import { IoTriangleOutline } from 'react-icons/io5';
import { Input } from '../components/Form';
import '../styles/pages/threads-page.css';

function ThreadsPage() {
  return (
    <section className="threads-page page">
      <div className="thread-lists-container">
        <div className="thread-lists">
          <article className="thread">
            <div className="thread__votes">
              <div className="votes">
                <div className="votes-container up-votes votes--voted">
                  <IoTriangleOutline />
                  <small className="votes-value">10</small>
                </div>
                <div className="votes-container down-votes">
                  <IoTriangleOutline className="down-votes" />
                  <small className="votes-value">100</small>
                </div>
              </div>
            </div>
            <div className="thread__data-container">
              <div className="thread__title-desc">
                <h3 className="thread--truncate">How to import .zip file from github to Google Colab ?</h3>
                <div className="thread--truncate">
                  How to import .zip file from github to Google ColabHow to import .zip file from.
                  How to import .zip file from github to Google ColabHow to import .zip file from.
                </div>
              </div>
              <div className="thread__categories">
                <div className="thread-categories-container">
                  <span className="thread-category category--active">python</span>
                  <span className="thread-category">github</span>
                  <span className="thread-category">category</span>
                  <span className="thread-category">category</span>
                  <span className="thread-category">category</span>
                  <span className="thread-category">category</span>
                  <span className="thread-category">category</span>
                  <span className="thread-category">category</span>
                </div>
              </div>
              <div className="thread__etc">
                <span>
                  3 minutes ago by
                  { ' ' }
                  <span className="username">YudhaLaks</span>
                  { ' ' }
                  - 3 comments
                </span>
              </div>
            </div>
          </article>
          <article className="thread">
            <div className="thread__votes">
              <div className="votes">
                <div className="votes-container up-votes votes--voted">
                  <IoTriangleOutline />
                  <small className="votes-value">10</small>
                </div>
                <div className="votes-container down-votes">
                  <IoTriangleOutline className="down-votes" />
                  <small className="votes-value">100</small>
                </div>
              </div>
            </div>
            <div className="thread__data-container">
              <div className="thread__title-desc">
                <h3 className="thread--truncate">How to import .zip file from github to Google Colab ?</h3>
                <div className="thread--truncate">
                  How to import .zip file from github to Google ColabHow to import .zip file from.
                  How to import .zip file from github to Google ColabHow to import .zip file from.
                </div>
              </div>
              <div className="thread__categories">
                <div className="thread-categories-container">
                  <span className="thread-category category--active">python</span>
                  <span className="thread-category">github</span>
                  <span className="thread-category">category</span>
                  <span className="thread-category">category</span>
                  <span className="thread-category">category</span>
                  <span className="thread-category">category</span>
                  <span className="thread-category">category</span>
                  <span className="thread-category">category</span>
                </div>
              </div>
              <div className="thread__etc">
                <span>
                  3 minutes ago by
                  { ' ' }
                  <span className="username">YudhaLaks</span>
                  { ' ' }
                  - 3 comments
                </span>
              </div>
            </div>
          </article>
          <article className="thread">
            <div className="thread__votes">
              <div className="votes">
                <div className="votes-container up-votes votes--voted">
                  <IoTriangleOutline />
                  <small className="votes-value">10</small>
                </div>
                <div className="votes-container down-votes">
                  <IoTriangleOutline className="down-votes" />
                  <small className="votes-value">100</small>
                </div>
              </div>
            </div>
            <div className="thread__data-container">
              <div className="thread__title-desc">
                <h3 className="thread--truncate">How to import .zip file from github to Google Colab ?</h3>
                <div className="thread--truncate">
                  How to import .zip file from github to Google ColabHow to import .zip file from.
                  How to import .zip file from github to Google ColabHow to import .zip file from.
                </div>
              </div>
              <div className="thread__categories">
                <div className="thread-categories-container">
                  <span className="thread-category category--active">python</span>
                  <span className="thread-category">github</span>
                  <span className="thread-category">category</span>
                  <span className="thread-category">category</span>
                  <span className="thread-category">category</span>
                  <span className="thread-category">category</span>
                  <span className="thread-category">category</span>
                  <span className="thread-category">category</span>
                </div>
              </div>
              <div className="thread__etc">
                <span>
                  3 minutes ago by
                  { ' ' }
                  <span className="username">YudhaLaks</span>
                  { ' ' }
                  - 3 comments
                </span>
              </div>
            </div>
          </article>
        </div>
      </div>
      <aside className="thread-side-contents">
        <div className="profile-content">
          <div className="profile">
            <img src="https://ui-avatars.com/api/?name=Dimas Saputra&background=random" alt="profile" />
            <div className="profile-body">
              <h4>Laksmana Yudha</h4>
              <p>laksmanayudha22@gmail.com</p>
            </div>
          </div>
        </div>
        <h4 className="top-categories">Find Categories</h4>
        <Input type="text" placeholder="Search category" />
        <div className="categories-content">
          <div className="thread-categories-container">
            <span className="thread-category">python</span>
            <span className="thread-category">python</span>
            <span className="thread-category">python</span>
            <span className="thread-category">git</span>
            <span className="thread-category">react</span>
            <span className="thread-category">javascript</span>
            <span className="thread-category">react-redux</span>
          </div>
        </div>
      </aside>
    </section>
  );
}

export default ThreadsPage;
