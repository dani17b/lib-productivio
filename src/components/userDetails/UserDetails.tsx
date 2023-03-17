import './userDetails.scss';

export interface UserDetailsProps {
  user: {
    username: string;
    description: string;
    score: number; // TODO: if stars are deleted, delete this
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
        <img src={user.img} alt="User Profile" />
      </div>
      <div className="user-details__info">
        <div className="user-details__info__top">
          <div className="user-details__info__top__username-star">
            <p>{user.username}</p>
      {/* TODO: implementar componente estrellas o borrarlo (como en el prototipo)*/}
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
