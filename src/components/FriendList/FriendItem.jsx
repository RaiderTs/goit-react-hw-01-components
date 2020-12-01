import PropTypes from 'prop-types';
import defaultImage from './monkeys.jpg';
import styles from './FreandItem.module.css';

// Создаем разметку для одной карточки

function FriendItem({ avatar, name, isOnline }) {
  return (
    <li className={styles.item}>
      <span
        className={isOnline ? `${styles.isOnline}` : `${styles.isOffline}`}
      ></span>
      <img className={styles.avatar} src={avatar} alt={name} width="48" />
      <p className={styles.name}>{name}</p>
    </li>
  );
}
FriendItem.defaultProps = {
  avatar: defaultImage,
  name: 'Не известно',
  isOnline: true,
};

FriendItem.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string,
  isOnline: PropTypes.bool,
};

export default FriendItem;
