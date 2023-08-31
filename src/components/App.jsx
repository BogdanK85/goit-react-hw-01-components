import user from './Json/user.json';
import { Profile } from '../components/Profile/Profile';
import { Statistics } from './Statistics/Statistics';
import data from './Json/data.json'
export const App = () => {
  return (
    <main className='main'>
      <h1 className='h1'>React homework 1</h1>

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

    </main>
  );
};
