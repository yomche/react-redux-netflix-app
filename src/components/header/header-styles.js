import styled from 'styled-components';
import { headerBackground } from './images';

const StyledHeader = styled.header`
    width: 1200px;
    height: 250px;
    background-image: url(${headerBackground});
    background-color: #efca7c;
    background-size: cover;
    margin: auto;
`;

export default StyledHeader;
