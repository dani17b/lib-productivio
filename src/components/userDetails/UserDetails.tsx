import './userDetails.scss';
import { UserPhoto } from '../userPhoto/UserPhoto';

export interface UserDetailsProps {
  username: string;
  description: string;
  profileColor: string;
  userImg: string;
}

export const UserDetails = ({ user }: { user: UserDetailsProps }) => {
  const { username, description, profileColor, userImg } = user;

  return (
    <div className="user-details">
      <div className="user-details__pic">
        <UserPhoto imageSrc={userImg} borderColor={profileColor} />
      </div>
      <div className="user-details__info">
        <div className="user-details__info__top">
          <div className="user-details__info__top__username">{username}</div>
        </div>
        <div className="user-details__info__bottom">
          <div className="user-details__info__bottom_description">
            <p>{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
