import './podium.scss';
import { UserPhoto } from '../userPhoto/UserPhoto';

interface User {
  userImg: string;
  username: string;
  userColor: string;
  userPoints: string;
}

interface PodiumProps {
  users: User[];
}

export const Podium = (props: PodiumProps) => {
  const { users } = props;
  debugger;
  return (
    <div className="podium">
      {users.map((user, index) => (
        <div
          key={index}
          className={`podium-bars podium-${
            index == 0 ? 3 : index == 1 ? 2 : 4
          }-position`}
        >
          <UserPhoto imageSrc={user.userImg} borderColor={user.userColor} />
          <div className="podium-username">{user.username}</div>
          <div className="podium-position">
            {index == 0 ? 3 : index == 1 ? 2 : 4}
          </div>
          <div className="podium-points">{user.userPoints} puntos</div>
        </div>
      ))}
    </div>
  );
};
