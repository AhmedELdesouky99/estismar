import React from "react"
import AccountInputs from "./AccountInputs"
const OwnerProfile =({ownerDetails})=>{
    return(
        <div>
            <AccountInputs ownerDetails={ownerDetails}/>
            
        </div>
    )
}
export default OwnerProfile