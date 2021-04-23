import React, { FC, useState } from 'react';
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
};

const required = (value: string) => (value ? undefined : 'REQUIRED FIELD');
const mustBeString = (value: string) => (Number(value) ? 'INVALID SYMBOLS' : undefined);
const minValue = (minStringLength: number) => (value: string) =>
  value.length >= minStringLength ? undefined : `FIELD SHOULD BE GREATER THAN ${minStringLength}`;

const composeValidators = (
  ...validators: { (value: string): string; (value: string): string; (value: string): string }[]
) => (value: string) =>
  validators.reduce((error, validator) => error || validator(value), undefined);

export const SearchInput: FC<SearchInputProps> = ({ updateSearchInputValue }) => {
  const [active, setActive] = useState(false);
  const handleClick = () => {
    setActive(!active);
  };
  return (
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
            <StyledTitleButton color={active ? '#ff0000' : '#a9a9a9'}>
              <Field
                name="searchType"
                component="input"
                type="radio"
                value="title"
                onClick={handleClick}
              />{' '}
              TITLE
            </StyledTitleButton>
            <StyledGenreButton color={active ? '#a9a9a9' : '#ff0000'}>
              <Field
                name="searchType"
                component="input"
                type="radio"
                value="genres"
                onClick={handleClick}
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
};
