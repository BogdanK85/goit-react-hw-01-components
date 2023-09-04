import { FriendsListAvatar, FriendsName } from "components/FriendsList/FriendsList.styled";
import { FriendPerson, FriendsStatus } from "components/FriendsListItem/FriendsListItem.styled"

const FriendsListItem = ({ id, avatar, name, isOnline }) => {
    return (
        <FriendPerson key={id}>           
            <FriendsStatus isOnline={isOnline}></FriendsStatus>
            <FriendsListAvatar src={avatar} alt={name} width="48" />
            <FriendsName>{name}</FriendsName>
        </FriendPerson>  
    )
    
}

export default FriendsListItem;
