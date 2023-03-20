import './topOne.scss';

export interface TopOneProps {
  avatar: string;
  username: string;
  points: string;
}

export const TopOne = (props: TopOneProps) => {
  const { avatar, username, points } = props;
  return (
    <div className="top-one">
      <img className="top-one-photo" src={avatar}></img>
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
