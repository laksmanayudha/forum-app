import React from 'react';
import '../styles/pages/threads-page.css';

function ThreadsPage() {
  return (
    <section className="threads-page page">
      <div className="thread-lists">
        <article className="thread">
          <div className="thread__votes">
            votes
          </div>
          <div className="thread__data-container">
            <div className="thread__title-desc">
              <h4>How to import .zip file from github to Google Colab ?</h4>
              <div>
                How to import .zip file from github to Google ColabHow to import .zip file from.
              </div>
            </div>
            <div className="thread__categories">
              category
            </div>
            <div className="thread__etc">
              comments, created_at
            </div>
          </div>
        </article>
      </div>
      <aside>
        <div>
          profile
        </div>
        <div>
          <div>category</div>
          <div>category</div>
          <div>category</div>
        </div>
      </aside>
    </section>
  );
}

export default ThreadsPage;
