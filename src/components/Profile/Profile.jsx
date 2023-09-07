import PropTypes from 'prop-types';
import { StyledContainer, StyledImg, StyledProfile, StyledProfileInfo, StyledProfileRows, StyledProfileStats, StyledSection, StyledStatCategory, StyledStatItem, StyledStatQuant } from './Profile.Styled';



const Profile = ({ username, tag, location, avatar, stats }) => {
  const statArray = Object.entries(stats);
  const dataToInsert = statArray.map((stat, idx, arr) => {
    return (
      <StyledStatItem key={statArray[idx][0]}>
        <StyledStatCategory>{statArray[idx][0]}</StyledStatCategory>
        <StyledStatQuant>{statArray[idx][1]}</StyledStatQuant>
      </StyledStatItem>
    );
  });

  return (
    <StyledSection>
      <StyledContainer>
        <StyledProfile>
          <StyledProfileInfo>
            <StyledImg src={avatar} alt="" />
            <StyledProfileRows>{username}</StyledProfileRows>
            <StyledProfileRows>@{tag}</StyledProfileRows>
            <StyledProfileRows>{location}</StyledProfileRows>
          </StyledProfileInfo>
          <StyledProfileStats>{dataToInsert}</StyledProfileStats>
        </StyledProfile>
      </StyledContainer>
    </StyledSection>
  );
};


Profile.propTypes = {
  username: PropTypes.string,
  tag: PropTypes.string,
  location: PropTypes.string,
  avatar: PropTypes.string,
  stats: PropTypes.object,
};

export default Profile;
