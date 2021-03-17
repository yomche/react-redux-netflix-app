import styled from 'styled-components';
import { headerBackground } from './images';

export const StyledHeader = styled.header`
    width: 1200px;
    height: 300px;
    background-image: url(${headerBackground});
    background-color: #808080;
    background-size: cover;
    margin: auto;
`;

export const StyledSorter = styled.section`
    width: 1200px;
    height: 40px;
    background-color: #808080;
    margin-top: 20px;
`;
