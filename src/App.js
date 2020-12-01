import Profile from './components/Profile/Profile.jsx';
import user from './data/user.json';

import Statistics from './components/Statistics/Statistics.jsx';
import statisticalData from './data/statistical-data.json';

import FriendList from './components/FriendList/FriendList.jsx';
import friends from './data/friends.json';

import TransactionHistory from './components/TransactionHistory/TransactionHistory.jsx';
import transactions from './data/transactions.json';

export default function App() {
  return (
    <div>
      <h1>Task 1</h1>
      <Profile
        name={user.name}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        followers={user.stats.followers}
        views={user.stats.views}
        likes={user.stats.likes}
      />
      <h2>Task 2</h2>
      <Statistics title="Upload stats" stats={statisticalData} />
      {/* <Statistics stats={statisticalData} /> */}
      <h2>Task 3</h2>
      <FriendList friends={friends} />
      <h2>Task 4</h2>
      <TransactionHistory items={transactions} />
    </div>
  );
}
