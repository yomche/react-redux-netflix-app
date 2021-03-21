import styled from 'styled-components';
import { headerBackground } from './images';

const BACKGROUND_COLOR = '#808080';

export const StyledMovieFullInfoHeader = styled.header`
    width: 1200px;
    height: 600px;
    background-image: url(${headerBackground});
    background-color: ${BACKGROUND_COLOR};
    background-size: cover;
    margin: auto;
`;