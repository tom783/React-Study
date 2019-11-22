import React from "react";
import styled from "styled-components";

const Styled = {
  View: styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transfrom: translate(-50%, -50%);
    width: 1200px;
    height: 800px;
    backgruond-color: #dfdfdf;
  `
};

const AppTemplate = ({ counter }) => {
  return <Styled.View>{counter}</Styled.View>;
};

export default AppTemplate;
