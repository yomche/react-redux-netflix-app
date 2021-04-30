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
  releaseDate: string;
  overview: string;
};

export const MovieCardFullSize: FC<MovieCardFullSizeProps> = ({
  poster_path,
  title,
  releaseDate,
  overview,
}) => (
  <StyleFullMovieCard>
    <StyledMovieCardPoster src={poster_path} />
    <StyledMovieCardInfo>
      <StyledHeading> {title} </StyledHeading>
      <StyledText> {releaseDate} </StyledText>
      <StyledText> {overview} </StyledText>
    </StyledMovieCardInfo>
  </StyleFullMovieCard>
);
