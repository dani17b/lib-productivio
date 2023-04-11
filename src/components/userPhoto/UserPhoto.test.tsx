import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { UserPhoto } from './UserPhoto';
import { BrowserRouter as Router } from 'react-router-dom';



test('renders the image with the provided src and border color', () => {
  render(
 
      <Router>
        <UserPhoto imageSrc="test-image.jpg" borderColor="red" />
      </Router>
 
  );

  const image = screen.getByTestId('User') as HTMLImageElement;
  expect(image.src).toContain('test-image.jpg');

  const circle = screen.getByTestId('user-photo').querySelector('.user-photo__circle');
  expect(circle).toHaveStyle({ borderColor: 'red' });
});

test('renders the image with the provided src and alt text', () => {
  render(
    <Router>
      <UserPhoto imageSrc="test-image.jpg" borderColor="red" />
    </Router>
  );

  const image = screen.getByTestId('User') as HTMLImageElement;
  expect(image).toBeInTheDocument();
  expect(image.src).toContain('test-image.jpg');
  expect(image.alt).toBe('User');
});



