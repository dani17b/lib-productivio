import React from 'react';
import { render, screen } from '@testing-library/react';
import { Loading, LoadingAnimationProps } from './Loading';

describe('Loading component', () => {
  const props: LoadingAnimationProps = {
    size: 150,
    loop: true,
    autoplay: true,
  };
  test('renders the animation on mount', () => {
    render(<Loading {...props}/>);
    const animationElement = screen.getByTestId('LoadingAnimation');
    expect(animationElement).toBeInTheDocument();
    expect(animationElement).toHaveAttribute('data-testid', 'LoadingAnimation');
    

    const animationSVG = screen.getByTestId('AnimationSVG');
    expect(animationSVG).toBeInTheDocument();
  });
});
