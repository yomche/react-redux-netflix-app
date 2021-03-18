import React, { FC } from 'react';
import {
  StyleFullMovieCard, StyledMovieCardInfo, StyledMovieCardPoster, StyledHeading, StyledText,
} from './movie-card-full-size-styles';

export const MovieCardFullSize: FC <{ poster:string, title:string, date:string, description:string }> = ({
  poster, title, date, description,
}) => (
  <StyleFullMovieCard>
    <StyledMovieCardPoster src={poster} />
    <StyledMovieCardInfo>
      <StyledHeading>
        {' '}
        {title}
        {' '}
      </StyledHeading>
      <StyledText>
        {' '}
        {date}
        {' '}
      </StyledText>
      <StyledText>
        {' '}
        {description}
        {' '}
      </StyledText>
    </StyledMovieCardInfo>
  </StyleFullMovieCard>
);
