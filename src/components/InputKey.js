import React from "react";
function InputKey({ InputValue, specialInput }) {
  return <div className="Inputkey" id ={specialInput && "special"}> {InputValue} </div> ;
}

export default InputKey;
