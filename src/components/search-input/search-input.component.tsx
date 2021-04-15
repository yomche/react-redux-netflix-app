import React, { FC } from 'react';
import { Form, Field } from 'react-final-form';
import {
  StyledSearchForm,
  StyledHeading,
  StyledControlsSection,
  StyledTitleButton,
  StyledGenreButton,
  StyledSubmitButton,
} from './search-input.styles';

type SearchInputProps = {
  onClickToSearchGenre: () => void;
  onClickToSearchTitle: () => void;
  updateForm: (value: string) => void;
};

export const SearchInput: FC<SearchInputProps> = ({
  onClickToSearchGenre,
  onClickToSearchTitle,
  updateForm,
}) => (
  <Form
    onSubmit={(value: string) => {
      // eslint-disable-next-line no-console
      console.log(value);
      updateForm(value);
    }}
  >
    {({ handleSubmit }) => (
      <StyledSearchForm onSubmit={handleSubmit}>
        <StyledHeading>FIND YOUR MOVIE</StyledHeading>
        <Field name="movieName" component="input" type="text" placeholder="Quentin Tarantino" />
        <StyledControlsSection>
          <StyledTitleButton type="button" onClick={onClickToSearchTitle}>
            {' '}
            TITLE{' '}
          </StyledTitleButton>
          <StyledGenreButton type="button" onClick={onClickToSearchGenre}>
            {' '}
            GENRE{' '}
          </StyledGenreButton>
          <StyledSubmitButton type="submit"> SUBMIT </StyledSubmitButton>
        </StyledControlsSection>
      </StyledSearchForm>
    )}
  </Form>
);
