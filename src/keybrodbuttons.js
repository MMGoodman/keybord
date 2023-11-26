import Language from "./keybord";
import { useState } from "react";

function KeybordButtons() {
    return (
<div className="create" onClick={show}>
    <p>"keybord"</p> 
 </div>   
    )
}
export default KeybordButtons;

function show (){
    console.log("moshe");
    
}