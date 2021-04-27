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
  StyledError,
  StyledInput,
} from './search-input.styles';

type SearchInputProps = {
  updateSearchInputValue: (value: string) => void;
  toggleMovieSearchType: (value: string) => void;
  movieSearchType: string;
};

const required = (value: string) => (value ? undefined : 'REQUIRED FIELD');
const mustBeString = (value: string) => (Number(value) ? 'INVALID SYMBOLS' : undefined);
const minValue = (minStringLength: number) => (value: string) =>
  value.length >= minStringLength ? undefined : `FIELD SHOULD BE GREATER THAN ${minStringLength}`;

const composeValidators = (
  ...validators: { (value: string): string; (value: string): string; (value: string): string }[]
) => (value: string) =>
  validators.reduce((error, validator) => error || validator(value), undefined);

export const SearchInput: FC<SearchInputProps> = ({
  updateSearchInputValue,
  toggleMovieSearchType,
  movieSearchType,
}) => (
    <Form
      onSubmit={(value: string) => {
        updateSearchInputValue(value);
      }}
      initialValues={{ searchType: 'title' }}
      subscription={{ submitting: true, pristine: true }}
    >
      {({ handleSubmit, submitting }) => (
        <StyledSearchForm onSubmit={handleSubmit}>
          <FormSpy onChange={(inputValue) => setInputValue(inputValue)} />
          <StyledHeading>FIND YOUR MOVIE</StyledHeading>
          <Field
            name="inputValue"
            validate={composeValidators(required, mustBeString, minValue(3))}
          >
            {({ input, meta }) => (
              <StyledInput>
                {meta.error && meta.touched && <StyledError>{meta.error}</StyledError>}
                <input {...input} type="text" placeholder="Quentin Tarantino" />
              </StyledInput>
            )}
          </Field>
          <StyledControlsSection>
            <StyledTitleButton isActive={movieSearchType === 'title'}>
              <Field
                name="searchType"
                component="input"
                type="radio"
                value="title"
                onClick={() => toggleMovieSearchType('title')}
              />{' '}
              TITLE
            </StyledTitleButton>
            <StyledGenreButton isActive={movieSearchType === 'genre'}>
              <Field
                name="searchType"
                component="input"
                type="radio"
                value="genres"
                onClick={() => toggleMovieSearchType('genre')}
              />{' '}
              GENRE
            </StyledGenreButton>
            <StyledSubmitButton type="submit" disabled={submitting}>
              {' '}
              SUBMIT{' '}
            </StyledSubmitButton>
          </StyledControlsSection>
        </StyledSearchForm>
      )}
    </Form>
  );
