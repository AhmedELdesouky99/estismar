import React, { useEffect, useState } from "react";
import { useLocation, useHistory ,useParams} from "react-router-dom";
import { Helmet } from "react-helmet";
// // page title bar
import PageTitleBar from "Components/PageTitleBar/PageTitleBar";
// // intl messages
import IntlMessages from "Util/IntlMessages";
import AddIcon from "@material-ui/icons/Add";

import { RctCard, RctCardContent } from "Components/RctCard";

import axios from "axios"
import { Button, FormGroup, Input, Label } from "reactstrap";
import { FormattedHTMLMessage, FormattedMessage } from "react-intl";
import { NotificationV2 } from "../../../components/Widgets";
import TabViews from "Components/shared/TabViews";
import DropDownStatus from "Components/shared/DropDownStatus"
import PermissionsDropDown from "Components/shared/PermissionsDropDown"
import CloseIcon from "@material-ui/icons/Close";

const client = axios.create({
  baseURL: "https://estithmar.arabia-it.net/api/admin" 
 
});
export default function AddEditRole() {
  const location = useLocation();
  const history = useHistory();
  const [page, setPage] = useState(1);

  const { id } = useParams();

  const [limit, setLimit] = useState(10);
  const [ownerDetails,setOwnerDetails]=useState()
  const [status,setStatus]=useState()
  const [permissions,setPermissions]=useState([])
  const[permission,setPermission]=useState()
  const [role,setRole]=useState(
    {
        name : "",
        description : "",
        permissions : [] 
    }
  )

  useEffect(()=>{
  
    if(id){
        client.get(`/roles/${id}`).then(res=>{
            setRole({
                name:res.data.data.name,
                description:res.data.data.description
            })
           const permissions=res.data.data.permissions.map((per)=>(
            {
                label:per.name,
                value:per.id
            }
           ))
           setPermissions(permissions)

        })
        
      }
  },[id])
  const AddRole=()=>{
    client
    .post("/roles", {
      ...role,
      permissions:permissions.map(per=>per.value)
    }).then(res=>{
      if(res.data.success){
        
        swal({
          title: "",
          text:" تم اضافه صلاحية بنجاح",
          icon: "success",
        });
      }
    }).then(()=>{
      setTimeout(()=>{
        history.push("/app/users/roles")
      },2000)
    })
  }
  const EditRole=()=>{
    client.put(`roles/${id}`,{
      ...role,
      permissions:permissions.map(per=>per.value),
      type : "update",
    }).then((res)=>{
      if(res.data.success){
        swal({
          title: "",
          text:" تم تعديل الصلاحية بنجاح",
          icon: "success",
        });
        setTimeout(()=>{
          history.push("/app/users/roles")
        },2000)
      }
    })
   }
  return (
    <div className="clients-wrapper">
       <Helmet>
         <title>{ id ? "":"sidebar.addrole"}</title>
       </Helmet>
       <PageTitleBar
         title={<IntlMessages id={"newrole"}/>}
         match={location}
         enableBreadCrumb
      />
   
      <RctCard>
        <RctCardContent>
            <div className="row">
                <div className="col-md-12">
                    <h4>
                    صلاحية جديدة
                    </h4>
                </div>
            </div>
            <div className="row">
                <div className="col-md-11">
                    <FormGroup>
                        <Label for="exampleEmail">
                        <FormattedHTMLMessage id={"اسم الصلاحية"} />
                        </Label>
                        <Input
                        id="exampleSelect"
                        name="select"
                        value={role.name}
                        type="text"
                        style={{ borderColor: "#D4B265" }}
                        onChange={(e)=>{
                            setRole({
                              ...role,
                              name:e.target.value
                            })
                        }}
                        />
                    </FormGroup>
                </div>

            </div>
            <div className="row">
                <div className="col-md-11">
                    <FormGroup>
                        <Label for="exampleEmail">
                        <FormattedHTMLMessage id={" الوصف"} />
                        </Label>
                        <Input
                        id="exampleSelect"
                        name="select"
                        value={role.description}
                        type="textarea"
                        style={{ borderColor: "#D4B265" ,resize:"none",minHeight:"140px"}}
                        onChange={(e)=>{
                            setRole({
                              ...role,
                              description:e.target.value
                            })
                        }}
                        />
                    </FormGroup>
                </div>

            </div>
          
            <div className="row">
                <div className="col-md-12">
                <Label for="exampleEmail">
                        <FormattedHTMLMessage id={"المسئوليات"} />
                        </Label>
                </div>

            </div>
            <div className="row">

                <div className="col-md-10">
                    <FormGroup>
                      
                        <PermissionsDropDown
                onChange={(role) => {
                    console.log(role)
                    setPermission(role)
                }}
              />
                    </FormGroup>
                </div>

                <div className="col-md-1 col-sm-12">
                <button
                        className="btn"
                        style={{
                          color: "#fff",
                          background: "#005D5E",
                          maxHeight: "41px",
                        }}
                      onClick={()=>{
                        setPermissions([
                            ...permissions,
                            permission
                        ])
                      }}
                      >
                        <AddIcon />
                      </button>
                </div>

            </div>
            <div className="row">
                <div className="col-md-11">
                <div
                    className="card mt-2"
                    style={{ borderColor: "#D4B265", minHeight: "100px" }}
                  >
                    <div className="row" style={{ margin: "3px" }}>
                      {permissions?.map((permission, index) => (
                        <div className="col-md-3 mt-2">
                          <div
                            className="d-flex justify-content-between"
                            style={{
                              background: "#CF4949",
                              padding: "5px 10px",
                              justifyContent: "space-between",
                            }}
                          >
                            <div style={{ color: "#FFFFFF" }}>
                              {permission?.label}
                            </div>
                            <div>
                              <CloseIcon
                                style={{
                                  width: "19px",
                                  height: "19px",
                                  borderRadius: "50px",
                                  background: "#fff",
                                  color: "#CF4949",
                                  cursor:"pointer"
                                }}
                                onClick={() => {
                               const allpermissions=[...permissions]
                               const FilteredPermissions=allpermissions.filter((per,idx)=>idx != index)
                               setPermissions(FilteredPermissions)
                                }}
                              />
                            </div>
                    
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

            </div>
           
        </RctCardContent>
      </RctCard>
      <div className="row justify-content-end mt-3 mb-3">
        <div className="col-md-3 col-sm-12">
          <button
            className="btn btn-block"
           
            style={{ background: "#005D5E", color: "#fff" ,fontSize:"20px"}}
            onClick={()=>{
                id ? EditRole(): AddRole()
            }}
       
          >
            حفظ
          </button>
        </div>
      </div>
    </div>
  );
}
