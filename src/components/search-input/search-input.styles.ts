import styled from 'styled-components';

const BACKGROUND_COLOR = '#000000';
const FONT_COLOR = '#ffffff';
const BORDER_COLOR = '#ff0000';
const BUTTON_BACKGROUND_COLOR = '#ff0000';
const BUTTON_COLOR = '#a9a9a9';

export const StyledSearchForm = styled.form`
  width: 1000px;
  margin: auto;
`;

export const StyledInput = styled.div`
  & > input {
    width: 1000px;
    height: 30px;
    font-size: 20px;
    color: ${FONT_COLOR};
    background-color: ${BACKGROUND_COLOR};
    border-bottom: 2px solid ${BORDER_COLOR};
  }
`;

export const StyledError = styled.span`
  color: ${FONT_COLOR};
  font-weight: bold;
`;

export const StyledHeading = styled.h1`
  color: ${FONT_COLOR};
  font-weight: bold;
  font-size: 35px;
`;

export const StyledSearchInput = styled.input`
  width: 1000px;
  height: 30px;
  font-size: 20px;
  color: ${FONT_COLOR};
  background-color: ${BACKGROUND_COLOR};
  border-bottom: 2px solid ${BORDER_COLOR};
`;

export const StyledControlsSection = styled.section`
  width: 1000px;
  height: 70px;
  margin: auto;
  display: flex;
  align-items: center;
`;

export const StyledTitleButton = styled.label`
  width: 100px;
  height: 25px;
  color: ${FONT_COLOR};
  background-color: ${BUTTON_BACKGROUND_COLOR};
  margin-right: 15px;
  border-radius: 5px;
  text-align: center;

  :hover {
    cursor: pointer;
    background-color: ${BUTTON_COLOR};
  }

  & > input[type='radio'] {
    display: none;
  }
`;

export const StyledGenreButton = styled.label`
  width: 100px;
  height: 25px;
  color: ${FONT_COLOR};
  background-color: ${BUTTON_BACKGROUND_COLOR};
  border-radius: 5px;
  margin-right: 650px;
  text-align: center;

  :hover {
    cursor: pointer;
    background-color: ${BUTTON_COLOR};
  }

  & > input[type='radio'] {
    display: none;
  }
`;

export const StyledSubmitButton = styled.button`
  width: 160px;
  height: 35px;
  font-size: 17px;
  color: ${FONT_COLOR};
  background-color: ${BUTTON_BACKGROUND_COLOR};
  margin-top: 20px;
  border-radius: 5px;

  :hover {
    cursor: pointer;
    background-color: ${BUTTON_COLOR};
  }
`;
