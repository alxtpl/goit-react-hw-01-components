import PropTypes from "prop-types";

import s from "../Profile/Profile.module.scss";


const Profile = (props) => {
  const { username, tag, location, avatar, stats } = props
  return (
    <>
      <div className={s.profile}>
        <div className={s.description}>
          <img
            src={avatar}
            alt="User avatar" 
            className={s.avatar}
          />
          <p className={s.name}>{username}</p>
          <p className={s.tag}>@{tag}</p>
          <p className={s.location}>{location}</p>
        </div>

        <ul className={s.stats}>
          <li>
            <span className={s.label}>Followers</span>
            <span className={s.quantity}>{stats.followers}</span>
          </li>
          <li>
            <span className={s.label}>Views</span>
            <span className={s.quantity}>{stats.views}</span>
          </li>
          <li>
            <span className={s.label}>Likes</span>
            <span className={s.quantity}>{stats.likes}</span>
          </li>
        </ul>
      </div>
    </>
  );
};
Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string,
  location: PropTypes.string,
  avatar: PropTypes.string,
  stats: PropTypes.shape({
    followers: PropTypes.number,
    views: PropTypes.number,
    likes: PropTypes.number,
  }),
};

Profile.defaultProps = {
  username: null,
  tag:null,
  location: null,
  avatar: null,
  stats: null,
  }
export default Profile;