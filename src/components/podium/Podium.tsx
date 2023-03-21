import './podium.scss';
import { UserPhoto } from '../userPhoto/UserPhoto';

interface PodiumProps {
  userImg: string;
  username: string;
  userColor: string;
  points: string;
}

export const Podium = (props: PodiumProps) => {
  const { userImg, username, points, userColor } = props;
  return (
    <div className="podium">
      <div className="podium-bars podium-third-position">
        <UserPhoto imageSrc={userImg} borderColor={userColor}></UserPhoto>
        <div className="podium-username">{username}</div>
        <div className="podium-position">3</div>
        <div className="podium-points">{points} puntos</div>
      </div>
      <div className="podium-bars podium-second-position">
        <UserPhoto imageSrc={userImg} borderColor={userColor}></UserPhoto>
        <div className="podium-username">{username}</div>
        <div className="podium-position">2</div>
        <div className="podium-points">{points} puntos</div>
      </div>
      <div className="podium-bars podium-forth-position">
        <UserPhoto imageSrc={userImg} borderColor={userColor}></UserPhoto>
        <div className="podium-username">{username}</div>
        <div className="podium-position">4</div>
        <div className="podium-points">{points} puntos</div>
      </div>
    </div>
  );
};
