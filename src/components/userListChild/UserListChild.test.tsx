import { render, screen, fireEvent } from '@testing-library/react';
import { UserListChild } from './UserListChild';
import '@testing-library/jest-dom'


const user = {
    username: 'John Doe',
    userImg: 'https://example.com/user.jpg',
    userColor: '#ff0000',
    description: 'A user',
    totalPoints: 100,
    level: 2,
    contactsNumber: 10,
    currentTasks: 3,
  };

test('renders user details', () => {
    render(<UserListChild user={user} onClick={() => {}} />);
    const username = screen.getByTestId('username');
    expect(username.textContent).toEqual(user.username);
  
    const userImg = screen.getByRole('img');
    expect(userImg).toHaveAttribute('src', user.userImg);
    expect(userImg.parentElement).toHaveStyle(`border-color: ${user.userColor};`);
  
  });
  

  test('renders with custom background and text colors', () => {
    const backgroundColor = '#ffffff';
    const textColor = '#000000';
    render(<UserListChild user={user} onClick={() => {}} backgroundColor={backgroundColor} textColor={textColor} />);
  
    const userContainer = screen.getByTestId('container');
    expect(userContainer).toHaveStyle(`background-color: ${backgroundColor}`);
  
    const usernameText = screen.getByTestId('username');
    expect(usernameText).toHaveStyle(`color: ${textColor}`);
  });

  
  test('calls the onClick function when the button is clicked', () => {
    const onClickMock = jest.fn();
    render(<UserListChild user={user} onClick={onClickMock} />);
    const button = screen.getByTestId('clickable-div');
    fireEvent.click(button);
    expect(onClickMock).toHaveBeenCalled();
  });





  