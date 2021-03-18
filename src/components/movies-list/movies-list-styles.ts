import styled from 'styled-components';

const BACKGROUND_COLOR = '#e6e6e6';
const SECONDARY_BACKGROUND_COLOR = '#b1b3b1';
const BORDER_COLOR = '#000000';

export const StyledMoviesList = styled.main`
    width: 1200px;
    margin: auto;
    padding-top: 30px;
    padding-bottom: 30px;
    background-color: ${BACKGROUND_COLOR};
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    row-gap: 60px;
`;

export const MoviesListElement = styled.section`
    width: 300px;
    height: 400px;
    background-color: ${SECONDARY_BACKGROUND_COLOR};
    border: 2px solid ${BORDER_COLOR};
`;
