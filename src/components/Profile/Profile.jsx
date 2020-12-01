import PropTypes from 'prop-types';
import style from './Profile.module.css';
import defaultImage from './monkeys.jpg';
import randomColor from '../../secondaryFunctions/randomColor';

export default function Profile(props) {
  const {
    name,
    tag,
    location,
    avatar,
    followers,
    views,
    likes,
  } = props;
  return (
    <div className={style.profile}>
      <div className={style.description}>
        <img src={avatar} alt={name} className={style.avatar} />
        <p className={style.name}>{name}</p>
        <p className={style.tag}>{tag}</p>
        <p className={style.location}>{location}</p>
      </div>

      <ul className={style.stats}>
        <li style={{ backgroundColor: randomColor() }}>
          <span className={style.label}>Followers</span>
          <span className={style.quantity}>{followers}</span>
        </li>
        <li style={{ backgroundColor: randomColor() }}>
          <span className={style.label}>Views</span>
          <span className={style.quantity}>{views}</span>
        </li>
        <li style={{ backgroundColor: randomColor() }}>
          <span className={style.label}>Likes</span>
          <span className={style.quantity}>{likes}</span>
        </li>
      </ul>
    </div>
  );
}
Profile.defaultProps = {
  name: 'Не известно',
  location: 'Не определено',
  avatar: defaultImage,
}



Profile.propTypes = {
  name: PropTypes.string,
  tag: PropTypes.string,
  location: PropTypes.string,
  avatar: PropTypes.string,
  followers: PropTypes.number,
  views: PropTypes.number,
  likes: PropTypes.number,
};
