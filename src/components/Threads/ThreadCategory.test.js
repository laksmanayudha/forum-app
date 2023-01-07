/**
 * test scenario ThreadCategory Component
 *
 * should call action function when user clicked
 * should show indication when actived
 */
import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import ThreadCategory from './ThreadCategory';

describe('ThreadCategory Component', () => {
  it('should call action function when user clicked', async () => {
    // arrange
    const action = jest.fn();
    render(<ThreadCategory label="categoryLabel" active={false} action={action} />);
    const threadCategory = await screen.getByText('categoryLabel');
    // action
    await userEvent.click(threadCategory);
    // assert
    expect(action).toHaveBeenCalledWith(false, 'categoryLabel');
  });

  it('should show indication when actived', async () => {
    // arrange
    render(<ThreadCategory label="categoryLabel" active action={() => {}} />);
    const threadCategory = await screen.getByText('categoryLabel');
    // assert
    expect(threadCategory).toHaveClass('category--active');
  });
});
