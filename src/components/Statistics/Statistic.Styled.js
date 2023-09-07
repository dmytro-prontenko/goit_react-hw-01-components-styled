import styled from 'styled-components';

export const StyledStatSection = styled.section`
  width: 400px;
  margin: 0 auto;
`;
export const StyledStatContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 30px auto;
`;

export const StyledStatList = styled.ul`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: 1fr;
  grid-column-gap: 0px;
  grid-row-gap: 0px;
  /* place-items: center; */

  padding: 0;
  margin: 0;
  list-style: none;
  width: 100%;
  border: 1.5px solid #787676;
  border-radius: 20px;

  background-color: #c1bcbc;
`;

export const StyledStatItem = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  padding: 10px;

  &:not(:first-of-type) {
    border-left: 1.5px solid #787676;
  }
`;

export const StyledStatItemTitle = styled.span`
  color: ${({ theme }) => theme.colors.black};
  font-weight: bold;
`;
