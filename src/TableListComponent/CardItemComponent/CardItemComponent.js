import React from "react";
import { List, Avatar, Space } from "antd";
import { StarOutlined } from "@ant-design/icons";
import images from "../../consts/images";
import videoBoy from "../../videos/boy.mp4";
import videoShoe from "../../videos/shoe.mp4";

const CardItemComponent = ({
  item: { image, name, age, phone, phrase, video },
}) => {
  const chooseVideo = (video) => {
    return video === "boy" ? videoBoy : video === "shoe" ? videoShoe : null;
  };

  const IconText = ({ icon }) => <Space>{React.createElement(icon)}</Space>;
  return (
    <div className="videoListItem">
      <List.Item
        key={name}
        actions={[<IconText icon={StarOutlined} key="list-vertical-star-o" />]}
        extra={
          <video width="750" height="500" controls>
            <source src={chooseVideo(video)} type="video/mp4" />
          </video>
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
      </List.Item>
    </div>
  );
};

export default CardItemComponent;
