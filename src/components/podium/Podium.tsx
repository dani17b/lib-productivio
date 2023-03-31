import './podium.scss';
import { UserPhoto } from '../userPhoto/UserPhoto';

interface User {
  userImg: string;
  username: string;
  userColor: string;
  userPoints: string;
}

interface PodiumProps {
  /**
   * List of users to show in the podium.
   */
  users: User[];
}

const setIndex = (index: number) => {
  return index == 0 ? 3 : index == 1 ? 2 : 4;
};

export const Podium = (props: PodiumProps) => {
  const { users } = props;
  return (
    <div className="podium">
      {users.map((user, index) => (
        <div
          key={index}
          className={`podium__bars podium__${setIndex(index)}-position`}
        >
          <div className="podium__userphoto">
            <UserPhoto imageSrc={user.userImg} borderColor={user.userColor} />
          </div>
          <div className="podium__username">{user.username}</div>
          <div className="podium__position">{setIndex(index)}</div>
          <div className="podium__points">{user.userPoints} puntos</div>
        </div>
      ))}
    </div>
  );
};
