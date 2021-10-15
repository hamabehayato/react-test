import React from "react";

const ColorfulMessage = (props) => {
  const { color, children } = props;
  const contentStyle = {
    color,
    fontSize: "20px"
  };

  return <p style={contentStyle}>{props.children}</p>;
};

export default ColorfulMessage;
