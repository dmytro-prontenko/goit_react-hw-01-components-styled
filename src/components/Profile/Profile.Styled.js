import styled from 'styled-components';

export const StyledSection = styled.div``;

export const StyledContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 30px auto;
`;

export const StyledProfile = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1.5px solid #787676;

  margin: 30px;
  width: 400px;

  border-radius: 20px;
  overflow: hidden;
`;

export const StyledImg = styled.img`
  width: 200px;
  margin-top: 30px;
`;

export const StyledProfileInfo = styled.div`
  box-sizing: border-box;
  background-color: #fff;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

export const StyledProfileRows = styled.p`
  color: #787676;
`;

export const StyledProfileStats = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 1fr;
  grid-column-gap: 0px;
  grid-row-gap: 0px;

  padding: 0;
  margin: 0;
  list-style: none;
  width: 100%;
  border-top: 1.5px solid #787676;

  background-color: #c1bcbc;
`;

export const StyledStatItem = styled.li`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-template-rows: 2fr;
  grid-column-gap: 0px;
  grid-row-gap: 10px;
  place-items: center;

  padding: 20px;

  &:not(:first-of-type) {
    border-left: 1.5px solid #787676;
  }
`;

export const StyledStatQuant = styled.span`
  font-weight: bold;
`;

export const StyledStatCategory = styled.span`
  &::first-letter {
  text-transform: uppercase;
}
`;