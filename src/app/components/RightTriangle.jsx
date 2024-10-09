import React from "react";

const Triangle = ({
  width = 0,
  height = 0,
  fill = "black",
  rotate = 0,
  ClassName,
} = {}) => {
  return (
    <svg width={width} height={height} style={{ overflow: "visible" }}>
      <path
        fill={fill}
        d={`M 0 0 L ${width} ${height / 2} L 0 ${height} L 0 0`}
        transform={`rotate(${rotate} ${width / 2} ${height / 2})`}
      />
    </svg>
  );
};

export default Triangle;
