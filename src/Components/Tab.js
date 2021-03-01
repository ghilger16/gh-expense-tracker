import React from "react";

const Tab = (props) => {
  if (props.isSelected) {
    return <div class="tab-content card-body">{props.children}</div>;
  }
  return null;
};

export default Tab;
