import { render } from '@testing-library/react';
import { TopFiveUser, TopFiveUserProps } from './TopFiveUser';
import '@testing-library/jest-dom';

describe('TopFiveUser component', () => {
  const props: TopFiveUserProps = {
    userPicUrl:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTX48DTma6JzBvRjAy2fQRZMXZmWq5iNlVryn0S7oc&s',
    name: 'John Doe',
    userColor: '#ff0000',
    points: '1000',
    position: '5',
  };

  test('should render the user photo', () => {
    const { getByTestId } = render(<TopFiveUser {...props} />);
    expect(getByTestId('user-test-photo'));
  });

  test('should render the user name', () => {
    const { getByTestId } = render(<TopFiveUser {...props} />);
    expect(getByTestId('user-name')).toBeInTheDocument();
  });

  test('should render the user points', () => {
    const { getByTestId } = render(<TopFiveUser {...props} />);
    expect(getByTestId('user-points')).toBeInTheDocument();
  });
});
