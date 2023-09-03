import PropTypes from 'prop-types';
import { ProfileDescription, ProfileDiv, ProfileImage, ProfileLocation, ProfileTag, ProfileUserName, StaticLabel, StaticListItem, StaticQuantity, StatsList } from './Profile.styled';
  
export const Profile = ({ username, tag, location, avatar, stats: { followers, views, likes } }) => {
  return (
    <ProfileDiv>
      <ProfileDescription>
        <ProfileImage
          src={avatar}
          alt={username}
          className="avatar"
        />
        <ProfileUserName>{username}</ProfileUserName>
        <ProfileTag>@{tag}</ProfileTag>
        <ProfileLocation>{location}</ProfileLocation>
      </ProfileDescription>

      <StatsList>
        <StaticListItem>
          <StaticLabel>Followers</StaticLabel>
          <StaticQuantity>{followers}</StaticQuantity>
        </StaticListItem>
        <StaticListItem>
          <StaticLabel>Views</StaticLabel>
          <StaticQuantity>{views}</StaticQuantity>
        </StaticListItem>
        <StaticListItem>
          <StaticLabel>Likes</StaticLabel>
          <StaticQuantity>{likes}</StaticQuantity>
        </StaticListItem>
      </StatsList>
    </ProfileDiv>
  )
}

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.exact({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }),
}