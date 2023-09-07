// import clsx from 'clsx';
import PropTypes from 'prop-types';
import { StyledFriendStatus, StyledFriendsContainer, StyledFriendsItem, StyledFriendsList, StyledFriendsSection } from './FriendList.Styled';

const FriendList = props => {
  const dataToInsert = props.friends.map(({ avatar, name, isOnline, id }) => {
    return (
      <StyledFriendsItem key={id} id={id}>
        <StyledFriendStatus online = {isOnline}></StyledFriendStatus>
        {/* <span className={isOnline ? 'online' : 'offline'}></span> */}
        {/* <span className={clsx('status', 'ok', 'style', isOnline ? 'online':'offline')}></span> */}
        <img className="avatar" src={avatar} alt="User avatar" width="48" />
        <p>{name}</p>
      </StyledFriendsItem>
    );
  });

  return (
    <StyledFriendsSection>
      <StyledFriendsContainer>
        <StyledFriendsList>{dataToInsert}</StyledFriendsList>
      </StyledFriendsContainer>
    </StyledFriendsSection>
  );
};



FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string,
      name: PropTypes.string,
      isOnline: PropTypes.bool,
      id: PropTypes.number,
    })
  ),
};

export default FriendList;
