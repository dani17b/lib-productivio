import './topOne.scss';
import { UserPhoto } from '../userPhoto/UserPhoto';

export interface TopOneProps {
  userImg: string;
  username: string;
  userColor: string;
  points: string;
}

export const TopOne = (props: TopOneProps) => {
  const { userImg, username, points, userColor } = props;
  return (
    <div className="top-one">
      <div className="top-one-photo">
        <UserPhoto imageSrc={userImg} borderColor={userColor} />
      </div>

      <div>
        <div className="top-one-icon">
          <img
            className="top-one-icon-img"
            src={require('./img/fireworks.png')}
          ></img>

          <div className="top-one-details">
            <div className="top-one-username">{username}</div>
            <div className="top-one-position">1</div>
            <div className="top-one-points">{points} puntos</div>
          </div>
          <img
            className="top-one-icon-img"
            src={require('./img/fireworks.png')}
          ></img>
        </div>
      </div>
    </div>
  );
};
