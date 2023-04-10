import { render, screen } from '@testing-library/react';
import { TimeAgo } from './TimeAgo';
import '@testing-library/jest-dom';

const dateNow = Date.now();

test('renders without crashing with required props', () => {
  render(<TimeAgo createdAt={new Date(dateNow)} />);
  const timeAgo = screen.getByTestId('time-ago');
  expect(timeAgo).toBeInTheDocument();
});

test('displays the time ago in the correct format', () => {
  const date = new Date(dateNow - 60000);
  render(<TimeAgo createdAt={date} />);
  const timeAgo = screen.getByTestId('time-ago');
  expect(timeAgo.textContent).toEqual('hace 1 minuto');
});

test('sets the text color when the "textColor" prop is provided', () => {
  render(<TimeAgo createdAt={new Date(dateNow)} textColor="red" />);
  const timeAgo = screen.getByTestId('time-ago');
  expect(timeAgo).toHaveStyle('color: red');
});

test('throws an error if the "createdAt" prop is not provided', () => {
  expect(() => {
    render(<TimeAgo />);
  }).toThrow('Invalid time value');
});

test('throws an error if the "createdAt" prop is not a valid Date object', () => {
  expect(() => {
    render(<TimeAgo createdAt="not a date" />);
  }).toThrow('Invalid time value');
});
