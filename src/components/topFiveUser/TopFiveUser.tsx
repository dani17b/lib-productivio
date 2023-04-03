import './topFiveUser.scss';
import { UserPhoto } from '../userPhoto/UserPhoto';

export interface TopFiveUserProps {
  userPicUrl: string;
  name: string;
  userColor: string;
  points: string;
  position: string;
}

export const TopFiveUser = (props: TopFiveUserProps) => {
  const { userPicUrl, name, points, userColor, position } = props;
  return (
    <div className="top-five-user">
      <div className="top-five-user__position">{position}</div>
      <div className="top-five-user__photo">
        <UserPhoto imageSrc={userPicUrl} borderColor={userColor} />
      </div>
      <div className="top-five-user__username">{name}</div>
      <div className="top-five-user__points">{points} pts</div>
    </div>
  );
};
