import React, { FC } from 'react';
import {
  StyleFullMovieCard,
  StyledMovieCardInfo,
  StyledMovieCardPoster,
  StyledHeading,
  StyledText,
} from './movie-card-full-size.styles';

type MovieCardFullSizeProps = {
  posterPath: string;
  title: string;
  releaseDate: string;
  overview: string;
};

export const MovieCardFullSize: FC<MovieCardFullSizeProps> = ({
  posterPath,
  title,
  releaseDate,
  overview,
}) => (
  <StyleFullMovieCard>
    <StyledMovieCardPoster src={posterPath} />
    <StyledMovieCardInfo>
      <StyledHeading> {title} </StyledHeading>
      <StyledText> {releaseDate} </StyledText>
      <StyledText> {overview} </StyledText>
    </StyledMovieCardInfo>
  </StyleFullMovieCard>
);
