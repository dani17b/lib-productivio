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
      <div className="top-five-user__position" data-testid="user-position">
        {position}
      </div>
      <div className="top-five-user__photo" data-testid="user-test-photo">
        <UserPhoto imageSrc={userPicUrl} borderColor={userColor} />
      </div>
      <div className="top-five-user__username" data-testid="user-name">
        {name}
      </div>
      <div
        className="top-five-user__points"
        data-testid="user-points"
      >{`${points} puntos`}</div>
    </div>
  );
};
