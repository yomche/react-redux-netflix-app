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
    subscription={{ submitting: true, pristine: true }}
  >
    {({ handleSubmit, submitting, pristine }) => (
      <StyledSearchForm onSubmit={handleSubmit}>
        <StyledHeading>FIND YOUR MOVIE</StyledHeading>
        <Field name="movieName" component="input" type="text" placeholder="Quentin Tarantino" />
        <StyledControlsSection>
          <StyledTitleButton type="button" onClick={() => console.log('title button')}>
            {' '}
            TITLE{' '}
          </StyledTitleButton>
          <StyledGenreButton type="button" onClick={() => console.log('genre button')}>
            {' '}
            GENRE{' '}
          </StyledGenreButton>
          <StyledSubmitButton type="submit" disabled={submitting || pristine}>
            {' '}
            SUBMIT{' '}
          </StyledSubmitButton>
        </StyledControlsSection>
      </StyledSearchForm>
    )}
  </Form>
);
