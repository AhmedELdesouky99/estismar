import React from "react";
import { RctCard, RctCardContent } from "Components/RctCard";
import moment from 'moment';
import StatusDropDown from "Components/shared/StatusDropDown"
import { useHistory } from "react-router-dom";
import NoImage from "../../assets/img/no-image.png";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import axios from "axios"
const client = axios.create({
  baseURL: "https://estithmar.arabia-it.net/api/admin" 
 
});
const SharedProfileInfo =({providerDetails,isAssetOwner})=>{
  const{id}=useParams()
    const profile = providerDetails?.files?.find(
        (file) => file.title == "profile"
      )?.path;
      let history=useHistory()
      console.log(providerDetails,"providerDetails")
    return(
        <RctCard>
        <RctCardContent>
          <div className="row justify-content-between"> 
            <div className="col-md-9">
             <div className="row" style={{gap:"15px"}}>
             <div>
              <img src={ profile ? `https://estithmar.arabia-it.net${profile}` : NoImage } style={{border:!profile ?"1px solid #ccc" :""}} height={"100px"}  width={"182px"}/>
              </div>
              <div>
                <p>
                  {
                    providerDetails?.company_name_ar  || providerDetails?.asset_name_ar
                  }
                </p>
                <p>
                  {
                    moment(providerDetails?.user?.created_at).locale("ar").format('DD MMM YYYY')
                    
                  }
                </p>
                <StatusDropDown  activationStatus={providerDetails?.user?.is_active} client={client} url={`service-provider/${id}`}/>
              </div>
             </div>
              
            </div>
            {
              isAssetOwner ? null : <div className="col-md-3 text-center">
              {/* <p>
              الخدمات المباعة
              </p>
              <p>
                14
              </p> */}
              <button
                className="btn btn-block"
                onClick={() =>
                 history.push("/app/services/add")
                }
                disabled={!providerDetails?.user?.is_active}
              style={{ background: "#150941", color: "#fff" ,fontSize:"15px",minWidth:"100px",width:"fit-content",margin:"auto"}}
             >
                إضافة خدمة
            </button>
            </div>
            }
            
          </div>
        </RctCardContent>
      </RctCard>
    )
}
export default SharedProfileInfo