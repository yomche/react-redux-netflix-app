import React, { FC } from 'react';
import { Form, Field, FormSpy } from 'react-final-form';
import { setInputValue } from '../../actions/index';
import {
  StyledSearchForm,
  StyledHeading,
  StyledControlsSection,
  StyledTitleButton,
  StyledGenreButton,
  StyledSubmitButton,
} from './search-input.styles';

type SearchInputProps = {
  updateSearchInputValue: (value: string) => void;
};

export const SearchInput: FC<SearchInputProps> = ({ updateSearchInputValue }) => (
  <Form
    onSubmit={(value: string) => {
      updateSearchInputValue(value);
    }}
    initialValues={{ searchType: 'title' }}
  >
    {({ handleSubmit }) => (
      <StyledSearchForm onSubmit={handleSubmit}>
        <FormSpy onChange={(inputValue) => setInputValue(inputValue)} />
        <StyledHeading>FIND YOUR MOVIE</StyledHeading>
        <Field name="inputValue" component="input" type="text" placeholder="Quentin Tarantino" />
        <StyledControlsSection>
          <StyledTitleButton>
            <Field name="searchType" component="input" type="radio" value="title" /> TITLE
          </StyledTitleButton>
          <StyledGenreButton>
            <Field name="searchType" component="input" type="radio" value="genres" /> GENRE
          </StyledGenreButton>
          <StyledSubmitButton type="submit"> SUBMIT </StyledSubmitButton>
        </StyledControlsSection>
      </StyledSearchForm>
    )}
  </Form>
);
