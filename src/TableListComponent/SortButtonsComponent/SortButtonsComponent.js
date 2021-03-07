import React from "react";
import {
  StyledBlockName,
  StyledContainer,
  StyledFilterButton,
  StyledRadioButton,
  StyledWrapContainer,
} from "./SortButtonsComponent.Styles";

const SortButtonsComponent = ({
  sortByValue,
  setSortDirection,
  toggleView,
}) => {
  return (
    <StyledWrapContainer>
      <StyledContainer>
        <StyledBlockName>Sort by</StyledBlockName>
        <StyledFilterButton
          onChange={(event) => sortByValue(event.target.value)}
          defaultValue="name"
          buttonStyle="solid"
        >
          <StyledRadioButton value="id">ID</StyledRadioButton>
          <StyledRadioButton value="name">Name</StyledRadioButton>
          <StyledRadioButton value="age">Age</StyledRadioButton>
        </StyledFilterButton>
        <br />
        <StyledFilterButton
          onChange={(event) => setSortDirection(event.target.value)}
          defaultValue="ascending"
          buttonStyle="solid"
        >
          <StyledRadioButton value="ascending">Ascending</StyledRadioButton>
          <StyledRadioButton value="descending">Descending</StyledRadioButton>
        </StyledFilterButton>
      </StyledContainer>

      <StyledContainer>
        <StyledBlockName>View</StyledBlockName>
        <StyledFilterButton
          onChange={(e) => toggleView(e)}
          defaultValue="table"
          buttonStyle="solid"
        >
          <StyledRadioButton value="table">Table</StyledRadioButton>
          <StyledRadioButton value="preview">Preview</StyledRadioButton>
        </StyledFilterButton>
      </StyledContainer>
    </StyledWrapContainer>
  );
};
export default SortButtonsComponent;
