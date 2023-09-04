import FriendsListItem from 'components/FriendsListItem/FriendsListItem';
import PropTypes from 'prop-types';
import { FriendListContainer } from './FriendsList.styled';

// import { online, offline } from './FriendsList.styled';
export const FriendsList = ({ friends }) => {
    return (
        <FriendListContainer>
            {friends.map(friend => (
                <FriendsListItem
                    key={friend.id}
                    isOnline={friend.isOnline}
                    avatar={friend.avatar}
                    name={friend.name}
                />
            ))}
        </FriendListContainer>
    )
}

FriendsList.propTypes = {
    friends: PropTypes.arrayOf(
        PropTypes.exact({
          id: PropTypes.number.isRequired,
          avatar: PropTypes.string.isRequired,
          name: PropTypes.string.isRequired,
          isOnline: PropTypes.bool.isRequired,
        })
    ).isRequired,
}

