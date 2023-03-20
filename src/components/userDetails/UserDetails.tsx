import './userDetails.scss';

export interface UserDetailsProps {
    username: string;
    description: string;
    score: number; // TODO: if stars are deleted, delete this
    profileColor: string;
    img: string;
}

export const UserDetails = ({ user }: { user: UserDetailsProps }) => {
  const { username, description, img } = user;

  return (
    <div className="user-details">
      {/* TODO implementar el componente de la foto de prefil */}
      <div className="user-details__pic">
        <img src={img} alt="User Profile" />
      </div>
      <div className="user-details__info">
        <div className="user-details__info__top">
          <div className="user-details__info__top__username-star">
            <p>{username}</p>
            {/* TODO: implementar componente estrellas o borrarlo (como en el prototipo)*/}
            <p>estrellas</p>
          </div>
          <div className="user-details__info__bottom">
            <p>{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
