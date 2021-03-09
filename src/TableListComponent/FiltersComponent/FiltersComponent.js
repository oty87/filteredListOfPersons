import React from "react";
import { Input } from "antd";

const FiltersComponent = ({ onChange }) => {
  return (
    <>
      <Input placeholder="name + surname" allowClear onChange={onChange} />
    </>
  );
};

export default FiltersComponent;
