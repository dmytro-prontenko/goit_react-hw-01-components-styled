import PropTypes from 'prop-types';
import { StyledStatContainer, StyledStatItem, StyledStatItemTitle, StyledStatList, StyledStatSection } from './Statistic.Styled';

const Statistics = props => {
  const dataToInsert = props.stats.map(({ label, percentage, id }) => {
    return (
      <StyledStatItem key={id} id={id}>
        <StyledStatItemTitle>{label}</StyledStatItemTitle>
        <span className="percentage">{percentage}</span>
      </StyledStatItem>
    );
  });
  return (
    <StyledStatSection>
      <StyledStatContainer>
        {props.title && <h2 className="title">Upload stats</h2>}
        <StyledStatList>{dataToInsert}</StyledStatList>
      </StyledStatContainer>
    </StyledStatSection>
  );
};


Statistics.propTypes = {
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      percentage: PropTypes.number,
      id: PropTypes.string,
    })
  ),
};

export default Statistics;
