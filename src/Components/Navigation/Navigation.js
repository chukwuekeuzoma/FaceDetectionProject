import React from "react"



const Navigation = ({onRouteChange}) =>{
    return (
        <div style ={{display:"flex",justifyContent:"flex-end"}}>
        <p onClick ={() => onRouteChange("Signin")} className="f3 link dim black underline pa3 pointer grow">Sign out</p>
        </div>
    )
}

export default Navigation;