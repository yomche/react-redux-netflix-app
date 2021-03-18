import styled from 'styled-components';

const BACKGROUND_COLOR = '#000000';
const FONT_COLOR = '#ffffff';
const BORDER_COLOR = '#ff0000';

export const StyledSearchSection = styled.form`
    width: 1000px;
    margin: auto;
`;

export const StyledHeading = styled.h1`
    color: ${FONT_COLOR};
    font-weight: bold;
    font-size: 35px;
    font-family: "Lucida Sans Unicode", "Lucida Grande", sans-serif;
`;

export const StyledSearchField = styled.input`
    width: 1000px;
    height: 30px;
    font-size: 20px;
    color: ${FONT_COLOR};
    background-color: ${BACKGROUND_COLOR};
    border-bottom: 2px solid ${BORDER_COLOR};
`;
