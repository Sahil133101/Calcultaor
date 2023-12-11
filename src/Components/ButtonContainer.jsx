import React from "react";
import "./ButtonContainer.modules.css";
const ButtonContainerContainer = () => {
  const ButtonName = ["C","()","%","/","7","8","9","*","4","5","6","-","1","2","3","+","0",".","="]
    return <>
    <div className="ButtonContainer">
      {ButtonName.map((ButtonName =>(<button className= "Button" >{ButtonName}</button> )))}
      {/* <button className= "Button" >C</button>  
      <button className="Button" >()</button> 
      <button className= "Button">%</button>
      <button className= "Button"> /</button> */}
      </div>
    
    </>
}
export default ButtonContainerContainer;