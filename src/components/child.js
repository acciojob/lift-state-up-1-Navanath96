import react,{useState} from "react"

function child(showchild,setshowchild){

    function update(){
        setshowchild(true);
    }

    return(
        <div className="child">
            <h2>Child Component</h2>
            <button onClick={update}>Show Model</button>
           {
            showchild && 
            <div>
                <h3>Model Content</h3>
                <p>This is the modal content.</p>
            </div>
           }
        </div>
    )
}
export default child;