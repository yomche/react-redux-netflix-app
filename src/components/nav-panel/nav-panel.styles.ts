import styled from 'styled-components';

const BACKGROUND_COLOR = 'ffffff';
const FONT_COLOR = '#ff0000';

export const StyledNav = styled.nav`
    width: 1000px;
    height: 55px;
    margin: auto;
    display: flex;
    align-items: center;
    justify-content:space-between;
`;

export const StyledSearchButton = styled.button`
    width: 100px;
    height: 30px;
    color: ${FONT_COLOR};
    font-weight: bold;
    background-color: ${BACKGROUND_COLOR};
    border-radius: 5px;
`;
