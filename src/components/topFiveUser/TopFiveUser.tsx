import './topFiveUser.scss';
import { UserPhoto } from '../userPhoto/UserPhoto';

export interface TopFiveUserProps {
  userImg: string;
  username: string;
  userColor: string;
  points: string;
  position: string;
}

export const TopFiveUser = (props: TopFiveUserProps) => {
  const { userImg, username, points, userColor, position } = props;
  return (
    <div className="user">
      <div className="user-position">{position}</div>
      <div className="user-photo">
        <UserPhoto imageSrc={userImg} borderColor={userColor} />
      </div>
      <div className="user-username">{username}</div>
      <div className="user-points">{points} pts</div>
    </div>
  );
};
