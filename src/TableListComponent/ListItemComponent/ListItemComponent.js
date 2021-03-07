import React from "react";
import { Avatar, Checkbox } from "antd";
import { StyledListItem, StyledNameSpan } from "./ListItemComponent.Styles";
import imagesObj from "../../consts/images";

const ListItemComponent = ({ item: { image, name, age, phone } }) => {
  return (
    <StyledListItem>
      <Avatar icon={imagesObj[image]} />
      <StyledNameSpan>{name}</StyledNameSpan>
      <span>{age}</span>
      <span>{phone}</span>
      <Checkbox />
    </StyledListItem>
  );
};

export default ListItemComponent;
