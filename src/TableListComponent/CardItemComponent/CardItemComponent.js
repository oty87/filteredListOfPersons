import React from "react";
import { List, Avatar, Checkbox } from "antd";
import images from "../../consts/images";
import videoBoy from "../../videos/boy.mp4";
import videoShoe from "../../videos/shoe.mp4";
import { StyledCardListItem, StyledVideo } from "./CardItemComponent.Styles";

const CardItemComponent = ({
  item: { image, name, age, phone, phrase, video, id },
  handleFavorite,
}) => {
  const chooseVideo = (video) => {
    return video === "boy" ? videoBoy : video === "shoe" ? videoShoe : null;
  };

  return (
    <StyledCardListItem
      key={name}
      actions={[
        <Checkbox
          onChange={(event) => handleFavorite(id, event.target.checked)}
        />,
      ]}
      extra={
        video && (
          <StyledVideo controls>
            <source src={chooseVideo(video)} type="video/mp4" />
          </StyledVideo>
        )
      }
    >
      <List.Item.Meta
        avatar={<Avatar src={images[image]} />}
        title={<h3>{name}</h3>}
        description={age + " years"}
      />

      <span>{phone}</span>
      <br />
      <span>{phrase}</span>
    </StyledCardListItem>
  );
};

export default CardItemComponent;
