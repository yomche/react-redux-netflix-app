import styled from 'styled-components';

const BACKGROUND_COLOR = '#ff0000';
const FONT_COLOR = '#ffffff';

export const StyledControlsSection = styled.section`
    width: 1000px;
    height: 50px;
    margin: auto;
    display: flex;
    align-items: center;
`;

export const StyledTitleButton = styled.button`
    width: 100px;
    height: 30px;
    color: ${FONT_COLOR};
    background-color: ${BACKGROUND_COLOR};
    margin-right: 15px;
    border-radius: 5px;
`;

export const StyledGenreButton = styled.button`
    width: 100px;
    height: 30px;
    color: ${FONT_COLOR};
    background-color: ${BACKGROUND_COLOR};
    border-radius: 5px;
    margin-right: 650px;
`;

export const StyledSubmitButton = styled.button`
    width: 160px;
    height: 35px;
    font-size: 17px;
    color: ${FONT_COLOR};
    background-color: ${BACKGROUND_COLOR};
    margin-top: 20px;
    border-radius: 5px;
`;
