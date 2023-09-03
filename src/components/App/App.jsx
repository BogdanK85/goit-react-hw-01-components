import user from '../../Json/user.json';
import { Profile } from '../Profile/Profile';
import { Statistics } from '../Statistics/Statistics';
import data from '../../Json/data.json'
import friends from '../../Json/friends.json'
import { FriendsList } from '../FriendsList/FriendsList';
import transactions from '../../Json/transactions.json';
import { TransactionHistory } from '../TransactionHistory/TransactionHistory';

export const App = () => {
  return (
    <main className='main'>
      <h1 hidden className='h1'>React homework 1</h1>

      <section className='section-profile'>
        <Profile
          username={user.username}
          tag={user.tag}
          location={user.location}
          avatar={user.avatar}
          stats={user.stats}
        />
      </section>

      <section className='sectoin-statistics'>
        <Statistics title='Upload stats' stats={data} />
      </section>

      <section className='Friend List'>
        <FriendsList friends={friends} />
      </section>

      <section className='Transaction history'>
        <TransactionHistory items={transactions} />
      </section>
    </main>
  );
};
