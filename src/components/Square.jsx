import React from "react";

// const Square = (props) => {
//   console.log(props);
//   return <button type="button">{props.value}</button>;
// };
const Square = ({ value }) => {
  return <button type="button">{value}</button>;
};

export default Square;
