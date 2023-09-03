import PropTypes from 'prop-types';
import { FriendList, FriendsListAvatar, FriendsListItem, FriendsName } from './FriendsList.styled';
import { online, offline } from './FriendsList.styled';
export const FriendsList = ({ friends }) => {
    return (
        <FriendList>
            {friends.map(({ id, avatar, name, isOnline }) => (
                <FriendsListItem key={id}>
                    <span className={`status ${isOnline ? online : offline}`}></span>
                    <FriendsListAvatar src={avatar} alt={name} width="48" />
                    <FriendsName>{name}</FriendsName>
                </FriendsListItem>
            ))}
        </FriendList>
    )
}

FriendsList.propTypes = {
    friends: PropTypes.arrayOf(
        PropTypes.exact({
          id: PropTypes.number.isRequired,
          avatar: PropTypes.string.isRequired,
          name: PropTypes.string.isRequired,
          isOnline: PropTypes.bool.isRequired,
        }).isRequired
    ).isRequired,
}