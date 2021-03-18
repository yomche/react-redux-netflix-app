import styled from 'styled-components';

const BACKGROUND_COLOR = '#808080';
const FONT_COLOR = '#ff0000';

export const StyledFooter = styled.footer`
    width: 1200px;
    height: 70px;
    margin: auto;
    background-color: ${BACKGROUND_COLOR};
    display:flex;
    justify-content:space-around;
    align-items:center;
`;

export const StyledCopyright = styled.p`
    color: ${FONT_COLOR};
    font-weight: bold;
    font-family: "Lucida Sans Unicode", "Lucida Grande", sans-serif;
`;
