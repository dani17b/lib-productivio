import { UserImage } from '../userPhoto/UserPhoto';
import './userDetails.scss';

export interface UserDetailsProps {
  user: {
    username: string;
    description: string;
    score: number;
    profileColor: string;
    img: string;
  };
}

export const UserDetails = (props: UserDetailsProps) => {
  const { user } = props;

  return (
    <div className="user-details">
      {/* TODO implementar el componente de la foto de prefil */}
      <div className="user-details__pic">
        <UserImage imageSrc={user.img} borderColor={user.profileColor} />
      </div>
      <div className="user-details__info">
        <div className="user-details__info__top">
          <div className="user-details__info__top__username-star">
            <p>{user.username}</p>
            <p>estrellas</p>
          </div>
          <div className="user-details__info__bottom">
            <p>{user.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
