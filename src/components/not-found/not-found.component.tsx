import React, { FC } from 'react';
import { StyledPageNotFound, StyledHeading } from './not-found.styles';
import { Footer } from '../footer/footer.component';
import { GlobalStyle } from '../../../styles/global-styles';

export const NotFoundContainer: FC = () => (
  <>
    <GlobalStyle />
    <StyledPageNotFound>
      <StyledHeading> Sorry! Page not found </StyledHeading>
    </StyledPageNotFound>
    <Footer />
  </>
);
