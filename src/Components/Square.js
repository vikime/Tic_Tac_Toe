import React from "react";


const style ={
    background:"cyan",
    border : "3px solid blue",
    fontsize:"500px",
    fontWeight:"800",
    cursor:"pointer",
    outline:"none"
};


const Square = ({value,onClick}) =>(
  <button style={style} onClick={onClick}>
      {value}
  </button>
)

export default Square;