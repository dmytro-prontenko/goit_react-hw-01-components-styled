import styled from 'styled-components';

export const StyledFriendsSection = styled.section`
  width: 400px;
  margin: 0 auto;
`;

export const StyledFriendsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 30px auto;
`;

export const StyledFriendsList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 20px;
  list-style: none;
  width: 100%;
  padding: 0;
`;

export const StyledFriendsItem = styled.li`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
  width: 96%;
  border-radius: 10px;
  padding: 7px;
  border: 2px solid #787676;
`;

export const StyledFriendStatus = styled.span`
  display: block;
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background-color: ${props => (props.online ? 'green' : 'red')};
`;
