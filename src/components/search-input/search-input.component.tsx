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

export const SearchInput: FC = () => (
  <Form
    onSubmit={(value) => {
      // eslint-disable-next-line no-console
      console.log(value);
    }}
  >
    {({ handleSubmit }) => (
      <StyledSearchForm onSubmit={handleSubmit}>
        <StyledHeading>FIND YOUR MOVIE</StyledHeading>
        <Field name="movieName" component="input" type="text" placeholder="Quentin Tarantino" />
        <StyledControlsSection>
          <StyledTitleButton> TITLE </StyledTitleButton>
          <StyledGenreButton> GENRE </StyledGenreButton>
          <StyledSubmitButton> SUBMIT </StyledSubmitButton>
        </StyledControlsSection>
      </StyledSearchForm>
    )}
  </Form>
);
