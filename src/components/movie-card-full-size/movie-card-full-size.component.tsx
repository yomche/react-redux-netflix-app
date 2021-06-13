import React, { FC } from 'react';
import {
  StyleFullMovieCard,
  StyledMovieCardInfo,
  StyledMovieCardPoster,
  StyledHeading,
  StyledText,
} from './movie-card-full-size.styles';

type MovieCardFullSizeProps = {
  poster_path: string;
  title: string;
  release_date: string;
  overview: string;
};

export const MovieCardFullSize: FC<MovieCardFullSizeProps> = ({
  poster_path,
  title,
  release_date,
  overview,
}) => (
  <StyleFullMovieCard>
    <StyledMovieCardPoster src={poster_path} />
    <StyledMovieCardInfo>
      <StyledHeading> {title} </StyledHeading>
      <StyledText> {release_date} </StyledText>
      <StyledText> {overview} </StyledText>
    </StyledMovieCardInfo>
  </StyleFullMovieCard>
);
