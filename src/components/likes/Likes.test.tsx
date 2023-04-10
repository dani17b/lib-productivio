import { render, screen, fireEvent } from '@testing-library/react';
import { Likes } from './Likes';
import '@testing-library/jest-dom';

describe('Likes component', () => {
  const initialLikes = 10;
  const renderLikes = (isLikedByMe = false) =>
    render(<Likes totalLikes={initialLikes} likedByMe={isLikedByMe} />);

  test('should display initial likes count correctly', () => {
    renderLikes();

    expect(screen.getByText(`${initialLikes} Likes`)).toBeInTheDocument();
  });

  test('should display empty heart icon when not liked by user', () => {
    renderLikes();

    expect(screen.getByLabelText(/empty heart/i)).toBeInTheDocument();
  });

  test('should change to full heart icon and increase likes count when clicking empty heart', () => {
    renderLikes();

    fireEvent.click(screen.getByLabelText(/empty heart/i));

    expect(screen.getByLabelText(/full heart/i)).toBeInTheDocument();
    expect(screen.getByText(`${initialLikes + 1} Likes`)).toBeInTheDocument();
  });

  test('should change to empty heart icon and decrease likes count when clicking filled heart', () => {
    renderLikes(true);

    fireEvent.click(screen.getByLabelText(/full heart/i));

    expect(screen.getByLabelText(/empty heart/i)).toBeInTheDocument();
    expect(screen.getByText(`${initialLikes - 1} Likes`)).toBeInTheDocument();
  });
});
