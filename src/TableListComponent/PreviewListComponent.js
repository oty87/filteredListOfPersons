import React from "react";
import { List, Row } from "antd";
import ListItemComponent from "./ListItemComponent";
import CardItemComponent from "./CardItemComponent";

function PreviewListComponent({ data, value, handleFavorite }) {
  return (
    <>
      {value === "table" ? (
        <List
          itemLayout="horizontal"
          dataSource={data}
          renderItem={(item) => (
            <ListItemComponent item={item} handleFavorite={handleFavorite} />
          )}
        />
      ) : (
        <List
          // grid={{ gutter: { xs: 8, sm: 16, md: 24, lg: 32 }, column: 1 }}
          itemLayout="vertical"
          size="large"
          dataSource={data}
          renderItem={(item) => (
            <Row>
              <CardItemComponent item={item} handleFavorite={handleFavorite} />
            </Row>
          )}
        />
      )}
    </>
  );
}

export default PreviewListComponent;
