import styled from "styled-components";
import { Radio } from "antd";

export const StyledWrapContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const StyledContainer = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
`;

export const StyledBlockName = styled.h3`
  padding: 12px 20px;
  display: flex;
  justify-content: start;
`;
export const StyledFilterButton = styled(Radio.Group)`
  padding: 12px 20px;
  height: auto;
  display: flex;
  justify-content: space-between;
`;

export const StyledRadioButton = styled(Radio.Button)`
  flex-grow: 1;
  height: auto;
`;
