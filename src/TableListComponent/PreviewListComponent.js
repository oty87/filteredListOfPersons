import React from "react";
import { List } from "antd";
import ListItemComponent from "./ListItemComponent";
import CardItemComponent from "./CardItemComponent";

function PreviewListComponent({ data, value }) {
  return (
    <>
      {value === "table" ? (
        <List
          itemLayout="horizontal"
          dataSource={data}
          renderItem={(item) => <ListItemComponent item={item} />}
        />
      ) : (
        <List
          itemLayout="vertical"
          size="large"
          dataSource={data}
          renderItem={(item) => <CardItemComponent item={item} />}
        />
      )}
    </>
  );
}

export default PreviewListComponent;
