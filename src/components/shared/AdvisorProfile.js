import React from "react"
import AdvisorProfileInputs from "./AdvisorProfileInputs"
const AdvisorProfile =({advisorDetails})=>{
    return(
        <div>
            <AdvisorProfileInputs advisorDetails={advisorDetails}/>
            
        </div>
    )
}
export default AdvisorProfile