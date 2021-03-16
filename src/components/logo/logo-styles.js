import styled from 'styled-components';
import { netflixLogo } from './images';

const StyledLogo = styled.div`
    width: 250px;
    height: 70px;
    background-image: url(${netflixLogo});
    background-size: cover;
`;

export default StyledLogo;
