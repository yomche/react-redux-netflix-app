import styled from 'styled-components';

const FONT_COLOR = '#000000';
const SECONDARY_FONT_COLOR = '#808080';

export const StyledMovieCard = styled.li`
  width: 250px;
  height: 400px;
  list-style: none;
  cursor: pointer;
`;

export const MovieCardPoster = styled.img`
  width: 250px;
  height: 350px;
`;

export const StyledMovieCardTitle = styled.h3`
  color: ${FONT_COLOR};
  font-weight: bold;
  font-size: 16px;
  text-align: left;
  text-transform: uppercase;
`;

export const StyledMovieCardGenre = styled.p`
  color: ${FONT_COLOR};
  font-size: 13px;
  margin-top: -15px;
  text-align: left;
`;

export const StyledMovieCardDate = styled.p`
  color: ${SECONDARY_FONT_COLOR};
  width: 100px;
  font-size: 13px;
  margin-top: -15px;
  text-align: center;
  border: 2px solid ${SECONDARY_FONT_COLOR};
`;

export const StyledMovieCardInfo = styled.div`
  width: 250px;
  height: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
