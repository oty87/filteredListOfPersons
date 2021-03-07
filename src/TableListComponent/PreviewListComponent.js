import React from "react";
import { List } from "antd";
import ListItemComponent from "./ListItemComponent";

function PreviewListComponent({ data }) {
  return (
    <List
      itemLayout="horizontal"
      dataSource={data}
      renderItem={(item) => <ListItemComponent item={item} />}
    />
  );
}

export default PreviewListComponent;
