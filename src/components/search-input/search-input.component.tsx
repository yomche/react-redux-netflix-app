import React, { FC } from 'react';
import { StyledSearchForm, StyledHeading, StyledSearchInput } from './search-input.styles';

type SearchInputProps = {
  inputValue: string;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export const SearchInput: FC<SearchInputProps> = ({ handleChange, inputValue }) => {
  const handleSubmit = (event: { preventDefault: () => void }) => {
    // eslint-disable-next-line no-console
    console.log(`Введенный фильм: ${inputValue}`);
    event.preventDefault();
  };
  return (
    <StyledSearchForm onSubmit={handleSubmit}>
      <StyledHeading>FIND YOUR MOVIE</StyledHeading>
      <StyledSearchInput
        type="text"
        value={inputValue}
        placeholder="Quentin Tarantino"
        onChange={handleChange}
      />
    </StyledSearchForm>
  );
};
