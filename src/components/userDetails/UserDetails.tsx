import './userDetails.scss';
import { UserPhoto } from '../userPhoto/UserPhoto';

export interface UserDetailsProps {
  user: {
    username: string;
    description: string;
    profileColor: string;
    img: string;
  };
}

export const UserDetails = (props: UserDetailsProps) => {
  const { user } = props;

  return (
    <div className="user-details">
      <div className="user-details__pic">
        <UserPhoto imageSrc={user.img} borderColor={user.profileColor} />
      </div>
      <div className="user-details__info">
        <div className="user-details__info__top">
          <div className="user-details__info__top__username-star">
            {user.username}
          </div>
        </div>
        <div className="user-details__info__bottom">
          <div className="user-details__info__bottom_description">
            <p>{user.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
