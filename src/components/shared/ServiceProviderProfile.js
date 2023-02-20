import React from "react"
import ServiceProviderInputs from "./serviceProviderInputs"
const ServiceProviderProfile =({providerDetails})=>{
    return(
        <div>
            <ServiceProviderInputs providerDetails={providerDetails}/>
            
        </div>
    )
}
export default ServiceProviderProfile