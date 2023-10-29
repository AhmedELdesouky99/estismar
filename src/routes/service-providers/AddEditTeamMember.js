import React, { useEffect, useState } from "react";
import { useLocation, useHistory, useParams } from "react-router-dom";
import { Helmet } from "react-helmet";
// // page title bar
import PageTitleBar from "Components/PageTitleBar/PageTitleBar";
// // intl messages
import IntlMessages from "Util/IntlMessages";

import { RctCard, RctCardContent } from "Components/RctCard";

import axios from "axios";
import { Button, FormGroup, Input, Label } from "reactstrap";
import { FormattedHTMLMessage, FormattedMessage } from "react-intl";
import TabViews from "Components/shared/TabViews";
import DropDownStatus from "Components/shared/DropDownStatus";
import RolesDropDown from "Components/shared/RolesDropDown";
import PermissionsDropDown from "Components/shared/PermissionsDropDown"
import AddIcon from "@material-ui/icons/Add";
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import { useSelector } from "react-redux";
import CloseIcon from "@material-ui/icons/Close";

const client = axios.create({
  baseURL: "https://admin.waqfnami.com/api",
});
export default function AddEditTeamMember({setAddPage,TeamMemberId,setTeamMemberId}) {
  const location = useLocation();
  const history = useHistory();
  const [page, setPage] = useState(1);

  const { id } = useParams();
  const[permission,setPermission]=useState()
  const[permissionId,setPermissionId]=useState([])

  const [limit, setLimit] = useState(10);
  const [ownerDetails, setOwnerDetails] = useState();
  const [status, setStatus] = useState();
  const [roles, setRoles] = useState([]);
  const [errors,setErrors]=useState()
  const { user } = useSelector((state) => state.authUser);

  const [userData, setUserData] = useState({
   
    name : "",
    email : "",
    password : "",
    password_confirmation : "",
    is_active : 1,
    group_name: "",
    phone:"",
  });

  useEffect(() => {
    if (TeamMemberId) {
      client.get(`/provider/user/${TeamMemberId}`,
      {
        params:{
          token:user.access_token 
        }
      }).then((res) => {
        setUserData({
          email: res.data.data.email,
          is_active: res.data.data.is_active,
          name: res.data.data.name,
          phone: res.data.data.phone,
          group_name:res.data.data.group_name
        });
        setRoles(res.data.data.roles);
      });
    }
  }, [TeamMemberId]);
  const AddUser = () => {
    client
      .post("/provider/user", {
        ...userData,
        password_confirmation: userData.password,
        roles:roles,
        token:  user.access_token ,
        group_id:id
        
      })
      .then((res) => {
        if (res.data.success) {
            console.log(res,"res")
          swal({
            title: "",
            text: " تم اضافه مستخدم بنجاح",
            icon: "success",
            
          });
          setAddPage(false)
          setErrors(null)
        }else{
            setErrors(res.data.errors)
            return
        }
      })
    //   .then(() => {
    //     setTimeout(() => {
    //       history.push("/app/users");
    //     }, 2000);
    //   });
  };
  const EditUser = () => {
    client
      .put(`/provider/user/${TeamMemberId}`, {
        ...userData,
        token:  user.access_token ,
        roles:roles,
        type: "update",
      })
      .then((res) => {
        if (res.data.success) {
          swal({
            title: "",
            text: " تم تعديل المستخدم بنجاح",
            icon: "success",
          });
          setAddPage(false)
          setErrors(null)
        }
      });
  };
  return (
    <div className="clients-wrapper">
      <div className="row">
        <div className="col-md-6 col-sm-12 mt-1">
          <h4>
            {
              TeamMemberId ? userData.name : 
              "  إضافة عضو جديد"
            }
          </h4>
        </div>
        <div className="col-md-6 col-sm-12 mt-1">
            <div className="row justify-content-end m-0">
            <button
            className="btn"
            style={{
              color: "#fff",
              background: "#150941",
              maxHeight: "41px",
              maxWidth:"75px",
              width:"75px"
            }}
            onClick={() => {
              setAddPage(false);
              setTeamMemberId(null);
            }}
          >
            {/* <AddIcon /> */}
            <ArrowBackIosIcon />
          </button>
            </div>
        </div>
      </div>
    <hr />
      <div className="row required">
        <div className="col-md-11">
          <FormGroup>
            <Label for="exampleEmail">
              <FormattedHTMLMessage id={"الاسم"} />
            </Label>
            <Input
              id="exampleSelect"
              name="select"
              value={userData.name}
              type="text"
              style={{ borderColor: "#7EA831" }}
              onChange={(e) => {
                setUserData({
                  ...userData,
                  name: e.target.value,
                });
              }}
            />
          </FormGroup>
        </div>
      </div>
      <div className="row">
        <div className="col-md-11">
          <div className="row required">
            <div className="col-md-6">
              <FormGroup>
                <Label for="exampleEmail">
                  <FormattedHTMLMessage id={"البريد الالكتروني"} />
                </Label>
                <Input
                  id="exampleSelect"
                  name="select"
                  type="text"
                  style={{ borderColor: "#7EA831" }}
                  value={userData.email}
                  onChange={(e) => {
                    setUserData({
                      ...userData,
                      email: e.target.value,
                    });
                  }}
                />
              </FormGroup>
            </div>
            <div className="col-md-6">
              <FormGroup>
                <Label for="exampleEmail">
                  <FormattedHTMLMessage id={"الجوال"} />
                </Label>
                <Input
                  id="exampleSelect"
                  name="select"
                  type="text"
                  style={{ borderColor: "#7EA831" }}
                  value={userData.phone}
                  onChange={(e) => {
                    setUserData({
                      ...userData,
                      phone: e.target.value,
                    });
                  }}
                />
              </FormGroup>
            </div>
          </div>
        </div>
      </div>
      <div className="row" >
        <div className="col-md-11">
          <div className="row">
            <div className="col-md-6">
              <FormGroup>
                <Label for="exampleEmail">
                  <FormattedHTMLMessage id={"الحالة"} />
                </Label>
                <DropDownStatus
                  selectedItem={userData.is_active}
                  onChange={(status) => {
                    setUserData({
                      ...userData,
                      is_active: status.value,
                    });
                  }}
                />
              </FormGroup>
            </div>
            <div className="col-md-6 required">
              <FormGroup>
                <Label for="exampleEmail">
                  <FormattedHTMLMessage id={"كلمة السر"} />
                </Label>
                <Input
                  id="exampleSelect"
                  name="select"
                  type="password"
                  style={{ borderColor: "#7EA831" }}
                  value={userData.password}
                  onChange={(e) => {
                    setUserData({
                      ...userData,
                      password: e.target.value,
                    });
                  }}
                />
              </FormGroup>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
      <div className="col-md-11">
              <FormGroup>
                <Label for="exampleEmail">
                  <FormattedHTMLMessage id={"القسم / الادارة"} />
                </Label>
                <Input
                  id="exampleSelect"
                  name="select"
                  type="text"
                  style={{ borderColor: "#7EA831" }}
                  value={userData.group_name}
                  onChange={(e) => {
                    setUserData({
                      ...userData,
                      group_name: e.target.value,
                    });
                  }}
                />
              </FormGroup>
            </div>
      </div>
      <div className="row">
        <div className="col-md-10">
          <FormGroup>
            <PermissionsDropDown
              onChange={(role) => {
                console.log(role);
                setPermission(role);
              }}
              permission={permissionId}
            />
          </FormGroup>
        </div>

        <div className="col-md-1 col-sm-12">
          <button
            className="btn"
            style={{
              color: "#fff",
              background: "#150941",
              maxHeight: "41px",
            }}
            onClick={() => {
              if(permissionId.includes(permission.value)){
                return
              }
              setRoles([...roles, permission.label]);
              setPermissionId([...permissionId,permission.value])
r
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
                    style={{ borderColor: "#7EA831", minHeight: "100px" }}
                  >
                    <div className="row" style={{ margin: "3px" }}>
                      {roles?.map((permission, index) => (
                        <div className="col-md-3 mt-2">
                          <div
                            className="d-flex"
                            style={{
                              background: "#CF4949",
                              padding: "5px 10px",
                              justifyContent: "space-between",
                            }}
                          >
                            <div style={{ color: "#FFFFFF" }}>
                              {permission}
                            </div>
                            <div>
                              <CloseIcon
                                style={{
                                  width: "19px",
                                  height: "19px",
                                  borderRadius: "50px",
                                  background: "#fff",
                                  color: "#CF4949",
                                  cursor: "pointer",
                                }}
                                onClick={() => {
                                  const serviceRequirementList = [
                                    ...roles,
                                  ];
                                  const filterpermissioneids=permissionId.filter((one,idx)=> index !=idx)
                                  setPermissionId(filterpermissioneids)
                                  const filterdService =
                                    serviceRequirementList.filter(
                                      (one, idx) => idx != index
                                    );
                                  
                                    setRoles(filterdService);
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
      <div className='col-md-11 col-sm-12 mt-1'> 
                  { 
                  errors ? 
                    Object.keys(errors)?.map((key,value)=>(
                      <div className=''> 
                        {errors[key]?.map(err=>(
                        <div className='alert alert-danger'>
                          {key} {err}
                        </div>
                        ))
                        }
                      </div>
                    ))
                    : null
                  }
               </div>
      <div className="row justify-content-end mt-3 mb-3">
        <div className="col-md-3 col-sm-12">
          <button
            className="btn btn-block"
            style={{ background: "#150941", color: "#fff", fontSize: "20px" }}
            onClick={() => {
              TeamMemberId  ? EditUser(): AddUser();
            }}
          >
            حفظ
          </button>
        </div>
      </div>
    </div>
  );
}
