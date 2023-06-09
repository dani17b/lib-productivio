import './topOne.scss';
import { UserPhoto } from '../userPhoto/UserPhoto';
import { Player } from '@lottiefiles/react-lottie-player';

export interface TopOneProps {
  userPicUrl: string;
  name: string;
  userColor: string;
  points: string;
}

export const TopOne = (props: TopOneProps) => {
  const { userPicUrl, name, points, userColor } = props;

  return (
    <div className="top-one">
      <div className="top-one__photo">
        <UserPhoto imageSrc={userPicUrl} borderColor={userColor} />
      </div>

      <div>
        <div className="top-one-animation-details">
          <Player
            className="top-one-animation-details__animation"
            src="https://assets5.lottiefiles.com/packages/lf20_jR229r.json"
            autoplay
          ></Player>
          <div className="top-one-animation-details__details">
            <div className="top-one__username">{name}</div>
            <div className="top-one__position">1</div>
            <div className="top-one__points">{points} puntos</div>
          </div>
          <Player
            className="top-one-animation-details__animation"
            src="https://assets5.lottiefiles.com/packages/lf20_jR229r.json"
            autoplay
          ></Player>
        </div>
      </div>
    </div>
  );
};
