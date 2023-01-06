/**
 * test scenario for Votes Component
 *
 * should handle correctly vote type when clicked
 */
import React from 'react';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import Votes from './Votes';

describe('Votes Component', () => {
  it('should handle correctly vote type when clicked', async () => {
    // arrange
    const onVotes = jest.fn();
    const { container } = render(
      <Votes
        upVotesCount={1}
        downVotesCount={1}
        isDownVote={false}
        isUpVote={false}
        onVotes={onVotes}
        id="test-id"
      />,
    );
    const upVotesButton = container.querySelector('.up-votes');
    const downVotesButton = container.querySelector('.down-votes');
    // action: up votes click
    await userEvent.click(upVotesButton);
    // assert
    expect(onVotes).toHaveBeenCalledWith('upVotes', 'test-id');
    // action: down votes click
    await userEvent.click(downVotesButton);
    // assert
    expect(onVotes).toHaveBeenCalledWith('downVotes', 'test-id');
  });
});
