import React from "react";
import { Checkbox } from "antd";
import { StyledListItem, StyledNameSpan } from "./ListItemComponent.Styles";

const ListItemComponent = ({ item: { name, age, phone } }) => {
  return (
    <StyledListItem>
      <StyledNameSpan>{name}</StyledNameSpan>
      <span>{age}</span>
      <span>{phone}</span>
      <Checkbox checked={false} />
    </StyledListItem>
  );
};

export default ListItemComponent;
