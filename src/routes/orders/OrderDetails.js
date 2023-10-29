
import React, { useEffect,useState } from "react"
import { RctCard, RctCardContent } from "Components/RctCard";
import StatusDropDown from "Components/shared/StatusDropDown"
import { Progress } from "reactstrap";
import ServiceTable from "./ServiceTable";
import { useParams } from "react-router-dom";
import axios from "axios";
import StagesTable from "./StagesTable";
import ProfileContent from "./ProfileContent";
import LogsTable from "./LogsTable";
const client = axios.create({
    baseURL: "https://admin.waqfnami.com/api/admin" 
   
  });
const OrderDetails =()=>{
    const [order,setOrder]=useState()
    const {id} =useParams()
    useEffect(()=>{
        console.log(id,"id")
        client.get(`/service-request/${id}`).then(res=>setOrder(res.data.data))
    },[id])
return(
    <>
    <RctCard withpadding>
        <RctCardContent>
                <div className="row justify-content-between">
                    <div>
                        <span>
                        رقم الطلب
                        </span>
                        <span>
                        #19933281
                        </span>
                    </div>
                    <div>
                        <span>
                        تاريخ الإنشاء
                        </span>
                        <span>
                        2023-0١-17 20:33
                        </span>
                    </div>
                    <div>
                        <StatusDropDown activationStatus={order?.status} inbordertable/>
                    </div>

                </div>
                <div className="row mt-4">
                    <div className="d-flex w-100 justify-content-between">
                        <div>
                            <span>
                            البدء:
                            </span>
                            <span>
                            2023-01-17
                            </span>
                        </div>
                        <div>
                            <span>
                            التسليم:
                            </span>
                            <span>
                            2023-04-17
                            </span>
                        </div>

                    </div>
                <Progress
                className="w-100 mt-1"
                color="success"
                    value={50}
                    />

                    <ServiceTable service={order?.service}/>
                </div>
        </RctCardContent>
    </RctCard>
    <RctCard withpadding>
        <RctCardContent>
            <StagesTable service={order?.service} />
        </RctCardContent>
    </RctCard>
    <div className="row">
        <div className="col-md-6">
        <RctCard withpadding>
        <RctCardContent>
            <ProfileContent profileDetails={order?.service_provider} name="مزود الخدمة" /> 
        </RctCardContent>
    </RctCard>
        </div>
        <div className="col-md-6">
        <RctCard withpadding>
        <RctCardContent>
        <ProfileContent profileDetails={order?.asset_owner} name="الوقف" /> 
        </RctCardContent>
    </RctCard>
        </div>
    </div>
    <RctCard withpadding>
        <RctCardContent>
            <LogsTable service={order?.service}  orderDetails={order}/>
        </RctCardContent>
    </RctCard>
    </>
)
}
export default OrderDetails