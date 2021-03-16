import styled from 'styled-components';
import { headerBackground } from './images';

export const StyledHeader = styled.header`
    width: 1200px;
    height: 300px;
    background-image: url(${headerBackground});
    background-color: rgba(0, 0, 0);
    background-size: cover;
    margin: auto;
`;

export const StyledHeaderSection = styled.section`
    width: 1000px;
    height: 55px;
    align-items: center;
    display: flex;
    margin: auto;
    justify-content:space-between;
`;

export const StyledSorter = styled.section`
    width: 1200px;
    height: 40px;
    background-color: #808080;
    margin-top: 20px;
`;

export const StyledSearchButton = styled.button`
    width: 100px;
    height: 30px;
    background-color: #ffffff;
    color: #ff0000;
    font-weight: bold;
    border-radius: 5px;
`;
