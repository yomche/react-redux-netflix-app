import styled from 'styled-components';
import { headerBackground } from './images';

const BACKGROUND_COLOR = '#808080';

export const StyledHeader = styled.header`
    width: 1200px;
    height: 300px;
    background-image: url(${headerBackground});
    background-color: ${BACKGROUND_COLOR};
    background-size: cover;
    margin: auto;
`;

export const StyledSorter = styled.section`
    width: 1200px;
    height: 40px;
    background-color: ${BACKGROUND_COLOR};
    margin-top: 20px;
`;
