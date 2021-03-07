import React from "react";
import {
  StyledBlockName,
  StyledContainer,
  StyledFilterButton,
  StyledRadioButton,
  StyledWrapContainer,
} from "./FilterButtonComponent.Styles";

const FilterButtonComponent = () => {
  return (
    <StyledWrapContainer>
      <StyledContainer>
        <StyledBlockName>Sorting</StyledBlockName>
        <StyledFilterButton defaultValue="a" buttonStyle="solid">
          <StyledRadioButton value="a">ID</StyledRadioButton>
          <StyledRadioButton value="b">Name</StyledRadioButton>
          <StyledRadioButton value="c">Age</StyledRadioButton>
        </StyledFilterButton>
        <br />
        <StyledFilterButton defaultValue="a" buttonStyle="solid">
          <StyledRadioButton value="a">Ascending</StyledRadioButton>
          <StyledRadioButton value="b">Descending</StyledRadioButton>
        </StyledFilterButton>
      </StyledContainer>

      <StyledContainer>
        <StyledBlockName>View</StyledBlockName>
        <StyledFilterButton defaultValue="a" buttonStyle="solid">
          <StyledRadioButton value="a">Ascending</StyledRadioButton>
          <StyledRadioButton value="b">Descending</StyledRadioButton>
        </StyledFilterButton>
      </StyledContainer>
    </StyledWrapContainer>
  );
};
export default FilterButtonComponent;
