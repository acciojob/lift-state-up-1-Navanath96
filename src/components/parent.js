import React,{useState} from "react";
import child from "./child";


function parent(){
    let [showchild, setshowchild]= useState(false);

    return(
        <div className="parent">
            <h1>Parent Component</h1>
            <child showchild={showchild} setshowchild={setshowchild}/>
        </div>
    )
}
export default parent;