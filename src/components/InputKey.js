import React from "react";
function InputKey({ InputValue, specialInput }) {
  return <div className="Inputkey" id ={specialInput && "special"} onClick=(getKey)> {InputValue} </div> ;
}

export default InputKey;
