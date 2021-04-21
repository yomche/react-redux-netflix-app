import styled from 'styled-components';

export const StyledContainer = styled.section`
  width: 1200px;
  margin: auto;
`;

export const StyledMoviesList = styled.ul`
  width: 1000px;
  margin: auto;
  padding-left: 0;
  padding-top: 30px;
  padding-bottom: 50px;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  row-gap: 60px;
  column-gap: 100px;
`;

export const StyledMoviesNotFound = styled.h1`
  width: 1200px;
  margin: auto;
  color: red;
  text-align: center;
`;
