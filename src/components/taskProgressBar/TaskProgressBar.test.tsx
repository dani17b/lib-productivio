import { render, screen } from '@testing-library/react';
import { TaskProgressBar } from './TaskProgressBar';
import '@testing-library/jest-dom'


test('TaskProgressBar renders with default colors when no colors are passed', () => {
    render(<TaskProgressBar percentage={50} />);
    const parent = screen.getByTestId('progress-bar_parent');
    const child = screen.getByTestId('progress-bar_child');
    expect(parent).toHaveStyle('background-color: #96ff9d');
    expect(child).toHaveStyle('background-color: #00d715');

});

test('TaskProgressBar renders with custom colors when colors are passed', () => {
    render(
        <TaskProgressBar
          percentage={50}
          parentBackgroundColor="#ccc"
          childBackgroundColor="#333"
        />
      );
      const parent = screen.getByTestId('progress-bar_parent');
      const child = screen.getByTestId('progress-bar_child');
      expect(parent).toHaveStyle('background-color: #ccc');
      expect(child).toHaveStyle('background-color: #333');
});

test('TaskProgressBar limits percentage to 0 if percentage is less than 0', () => {
    render(
        <TaskProgressBar
          percentage={-50}
        />
      );
      const child = screen.getByTestId('progress-bar_child');
      expect(child).toHaveStyle('width: 0%');
});

test('TaskProgressBar limits percentage to 100 if percentage is greater than 100', () => {
    render(
        <TaskProgressBar
          percentage={150}
        />
      );
      const child = screen.getByTestId('progress-bar_child');
      expect(child).toHaveStyle('width: 100%');
});

test('should fix optical illusion by adding 5 from percentage if percentage is less than 100', () => {
  render(
      <TaskProgressBar
        percentage={90}
      />
    );
    const child = screen.getByTestId('progress-bar_child');
    expect(child).toHaveStyle('width: 95%');
});

test('should not fix optical illusion by subtracting 5 from percentage if percentage is less than 35', () => {
  render(
      <TaskProgressBar
        percentage={34}
      />
    );
    const child = screen.getByTestId('progress-bar_child');
    expect(child).toHaveStyle('width: 34%');
});

test('should not fix optical illusion by subtracting 5 from percentage if percentage is greater than 95', () => {
  render(
      <TaskProgressBar
        percentage={96}
      />
    );
    const child = screen.getByTestId('progress-bar_child');
    expect(child).toHaveStyle('width: 96%');
});






