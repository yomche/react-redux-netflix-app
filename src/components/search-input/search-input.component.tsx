import React, { FC } from 'react';
import { Form } from 'react-final-form';
import {
  StyledSearchForm,
  StyledHeading,
  StyledSearchInput,
  StyledControlsSection,
  StyledTitleButton,
  StyledGenreButton,
  StyledSubmitButton,
} from './search-input.styles';

type SearchInputProps = {
  inputValue: string;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export const SearchInput: FC<SearchInputProps> = ({ handleChange, inputValue }) => (
  <Form
    onSubmit={() => {
      // eslint-disable-next-line no-console
      console.log(`Введенный фильм: ${inputValue}`);
    }}
    render={({ handleSubmit }) => (
      <StyledSearchForm onSubmit={handleSubmit}>
        <StyledHeading>FIND YOUR MOVIE</StyledHeading>
        <StyledSearchInput
          type="text"
          value={inputValue}
          placeholder="Quentin Tarantino"
          onChange={handleChange}
        />
        <StyledControlsSection>
          <StyledTitleButton> TITLE </StyledTitleButton>
          <StyledGenreButton> GENRE </StyledGenreButton>
          <StyledSubmitButton> SUBMIT </StyledSubmitButton>
        </StyledControlsSection>
      </StyledSearchForm>
    )}
  />
);
