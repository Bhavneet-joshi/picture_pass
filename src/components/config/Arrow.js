import React from 'react'

export const NextArrow = (props) => {
  return (
    <div
      className={props.className}
      style={{ backgroundColor: "#0a0a16", borderRadius: "50%" }}
      onClick={props.onClick}
    />
  );
};

export const PrevArrow = (props) => {
  return (
    <div
      className={props.className}
      style={{ backgroundColor: "#0a0a16", borderRadius: "50%", }}
      onClick={props.onClick}
    />
  );
};