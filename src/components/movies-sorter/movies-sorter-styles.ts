import styled from 'styled-components';

const BACKGROUND_COLOR = '#808080';

export const StyledSorter = styled.section`
    width: 1200px;
    height: 40px;
    background-color: ${BACKGROUND_COLOR};
    margin: auto;
`;

export const StyledSorterInfo = styled.div`
    width: 1000px;
    height: 40px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: auto;
`;

export const StyledSorterResult = styled.ul`
    width: 250px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const StyledSorterData = styled.li`
    list-style: none;
    font-family: "Lucida Sans Unicode", "Lucida Grande", sans-serif;
`;
