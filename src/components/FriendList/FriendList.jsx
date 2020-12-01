import PropTypes from 'prop-types';
import FriendItem from './FriendItem';
import styles from './Friends.module.css';

function FriendList({ friends }) {
  return (
    <ul className={styles.list}>
      {/* перебираем масив друзей */}
      {friends.map(({ avatar, name, isOnline, id }) => (
        //   подставляем значения в FriendItem
        <FriendItem key={id} avatar={avatar} name={name} isOnline={isOnline} />
      ))}
    </ul>
  );
}

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }),
  ),
};

export default FriendList;
