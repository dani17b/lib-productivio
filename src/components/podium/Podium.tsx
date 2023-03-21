import './podium.scss';
import { UserPhoto } from '../userPhoto/UserPhoto';

interface PodiumProps {
  secondUserImg: string;
  secondUsername: string;
  secondUserColor: string;
  secondUserPoints: string;

  thirdUserImg: string;
  thirdUsername: string;
  thirdUserColor: string;
  thirdUserPoints: string;

  forthUserImg: string;
  forthUsername: string;
  forthUserColor: string;
  forthUserpoints: string;
}

export const Podium = (props: PodiumProps) => {
  const {
    secondUserImg,
    secondUsername,
    secondUserColor,
    secondUserPoints,
    thirdUserImg,
    thirdUsername,
    thirdUserColor,
    thirdUserPoints,
    forthUserImg,
    forthUsername,
    forthUserColor,
    forthUserpoints,
  } = props;
  return (
    <div className="podium">
      <div className="podium-bars podium-third-position">
        <UserPhoto
          imageSrc={thirdUserImg}
          borderColor={thirdUserColor}
        ></UserPhoto>
        <div className="podium-username">{thirdUsername}</div>
        <div className="podium-position">3</div>
        <div className="podium-points">{thirdUserPoints} puntos</div>
      </div>
      <div className="podium-bars podium-second-position">
        <UserPhoto
          imageSrc={secondUserImg}
          borderColor={secondUserColor}
        ></UserPhoto>
        <div className="podium-username">{secondUsername}</div>
        <div className="podium-position">2</div>
        <div className="podium-points">{secondUserPoints} puntos</div>
      </div>
      <div className="podium-bars podium-forth-position">
        <UserPhoto
          imageSrc={forthUserImg}
          borderColor={forthUserColor}
        ></UserPhoto>
        <div className="podium-username">{forthUsername}</div>
        <div className="podium-position">4</div>
        <div className="podium-points">{forthUserpoints} puntos</div>
      </div>
    </div>
  );
};
