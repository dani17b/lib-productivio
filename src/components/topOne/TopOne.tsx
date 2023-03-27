import './topOne.scss';
import { UserPhoto } from '../userPhoto/UserPhoto';
import { Player } from '@lottiefiles/react-lottie-player';

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
        <div className="top-one-animation-details">
          <Player
            className="top-one-animation"
            src="https://assets5.lottiefiles.com/packages/lf20_jR229r.json"
            autoplay
            loop
          ></Player>
          <div className="top-one-details">
            <div className="top-one-username">{username}</div>
            <div className="top-one-position">1</div>
            <div className="top-one-points">{points} puntos</div>
          </div>
          <Player
            className="top-one-animation"
            src="https://assets5.lottiefiles.com/packages/lf20_jR229r.json"
            autoplay
            loop
          ></Player>
        </div>
      </div>
    </div>
  );
};
