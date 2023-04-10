import React from 'react';
import { render, screen } from '@testing-library/react';
import { Loading } from './Loading';

describe('Loading component', () => {
  test('renders the animation on mount', () => {
    render(<Loading />);
    const animationElement = screen.getByTestId('LoadingAnimation');
    expect(animationElement).toBeInTheDocument();
    expect(animationElement).toHaveAttribute('data-testid', 'LoadingAnimation');
  });
});
