import './App.css';
import Profile from './Components/Profile/Profile';
import Statistics from './Components/Statistics/Statistics.jsx';
import FriendList from './Components/FriendList/FriendList.jsx';
import user from './data/user.json';
import data from './data/data.json';
import friends from './data/friends.json';

;



function App() {
  return (
    <>
      <Profile username={user.username} tag={user.tag} location={user.location} avatar={user.avatar} stats={user.stats} />
      <Statistics title="Upload stats" stats={data} />
      {/* <Statistics stats={data} /> */}
      <FriendList friends={friends} />;
    </>

  );
}

export default App;
