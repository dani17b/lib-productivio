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
    <div className="top-five-user">
      <div className="top-five-user__position">{position}</div>
      <div className="top-five-user__photo">
        <UserPhoto imageSrc={userImg} borderColor={userColor} />
      </div>
      <div className="top-five-user__username">{username}</div>
      <div className="top-five-user__points">{points} pts</div>
    </div>
  );
};
