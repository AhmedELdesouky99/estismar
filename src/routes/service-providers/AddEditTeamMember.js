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
const client = axios.create({
  baseURL: "https://estithmar.arabia-it.net/api/admin",
});
export default function AddEditTeamMember({setAddPage}) {
  const location = useLocation();
  const history = useHistory();
  const [page, setPage] = useState(1);

  const { id } = useParams();
  const[permission,setPermission]=useState()

  const [limit, setLimit] = useState(10);
  const [ownerDetails, setOwnerDetails] = useState();
  const [status, setStatus] = useState();
  const [permissions, setPermissions] = useState([]);

  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    password_confirmation: "",
    role: "",
  });

  useEffect(() => {
    if (id) {
      client.get(`/user/${id}`).then((res) => {
        console.log(res.data.data, "res");
        setUser({
          email: res.data.data.email,
          is_active: res.data.data.is_active,
          name: res.data.data.name,
          phone: res.data.data.phone,
          role: res.data.data.roles[0].id,
        });
        setPermissions(res.data.data.roles[0].permissions);
        // setUser({
        //   title:res.data.data.title,
        //   field_id:res.data.data.field_id,
        //   provider_id:res.data.data.service_provider.user_id,
        //   description:res.data.data.description,
        //   service_border:border,
        //   service_requirment:service_requirment,
        //   executive_time:res.data.data.executive_time,
        //   stages_of_delivery:stages_of_delivery,
        //   cost:res.data.data.cost,
        //   tax_ratio:res.data.data.tax_ratio,
        //   cost_after_study:res.data.data.cost_after_study,
        //   executive_time_type:res.data.data.executive_time_type,
        //   executive_steps:executive_steps,
        //   executive_result:executive_result,
        //   support_ratio:res.data.data.support_ratio

        // })
      });
    }
  }, [id]);
  const AddUser = () => {
    client
      .post("/user", {
        ...user,
        password_confirmation: user.password,
      })
      .then((res) => {
        if (res.data.success) {
          swal({
            title: "",
            text: " تم اضافه مستخدم بنجاح",
            icon: "success",
          });
        }
      })
      .then(() => {
        setTimeout(() => {
          history.push("/app/users");
        }, 2000);
      });
  };
  const EditUser = () => {
    client
      .put(`user/${id}`, {
        ...user,
        type: "update",
      })
      .then((res) => {
        if (res.data.success) {
          swal({
            title: "",
            text: " تم تعديل المستخدم بنجاح",
            icon: "success",
          });
          setTimeout(() => {
            history.push("/app/users");
          }, 2000);
        }
      });
  };
  return (
    <div className="clients-wrapper">
      <div className="row">
        <div className="col-md-6 col-sm-12 mt-1">
          <h4>إضافة عضو جديد</h4>
        </div>
        <div className="col-md-6 col-sm-12 mt-1">
            <div className="row justify-content-end m-0">
            <button
            className="btn"
            style={{
              color: "#fff",
              background: "#005D5E",
              maxHeight: "41px",
              maxWidth:"75px",
              width:"75px"
            }}
            onClick={() => {
              setAddPage(false)
            }}
          >
            {/* <AddIcon /> */}
            <ArrowBackIosIcon />
          </button>
            </div>
        </div>
      </div>
    <hr />
      <div className="row">
        <div className="col-md-11">
          <FormGroup>
            <Label for="exampleEmail">
              <FormattedHTMLMessage id={"الاسم"} />
            </Label>
            <Input
              id="exampleSelect"
              name="select"
              value={user.name}
              type="text"
              style={{ borderColor: "#D4B265" }}
              onChange={(e) => {
                setUser({
                  ...user,
                  name: e.target.value,
                });
              }}
            />
          </FormGroup>
        </div>
      </div>
      <div className="row">
        <div className="col-md-11">
          <div className="row">
            <div className="col-md-6">
              <FormGroup>
                <Label for="exampleEmail">
                  <FormattedHTMLMessage id={"البريد الالكتروني"} />
                </Label>
                <Input
                  id="exampleSelect"
                  name="select"
                  type="text"
                  style={{ borderColor: "#D4B265" }}
                  value={user.email}
                  onChange={(e) => {
                    setUser({
                      ...user,
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
                  style={{ borderColor: "#D4B265" }}
                  value={user.phone}
                  onChange={(e) => {
                    setUser({
                      ...user,
                      phone: e.target.value,
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
          <div className="row">
            <div className="col-md-6">
              <FormGroup>
                <Label for="exampleEmail">
                  <FormattedHTMLMessage id={"الحالة"} />
                </Label>
                <DropDownStatus
                  selectedItem={user.is_active}
                  onChange={(status) => {
                    setUser({
                      ...user,
                      is_active: status.value,
                    });
                  }}
                />
              </FormGroup>
            </div>
            <div className="col-md-6">
              <FormGroup>
                <Label for="exampleEmail">
                  <FormattedHTMLMessage id={"كلمة السر"} />
                </Label>
                <Input
                  id="exampleSelect"
                  name="select"
                  type="password"
                  style={{ borderColor: "#D4B265" }}
                  value={user.password}
                  onChange={(e) => {
                    setUser({
                      ...user,
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
        <div className="col-md-10">
          <FormGroup>
            <PermissionsDropDown
              onChange={(role) => {
                console.log(role);
                setPermission(role);
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
            onClick={() => {
              setPermissions([...permissions, permission]);
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
                    className="d-flex"
                    style={{
                      background: "#CF4949",
                      padding: "5px 10px",
                      justifyContent: "space-between",
                    }}
                  >
                    <div style={{ color: "#FFFFFF" }}>{permission?.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="row justify-content-end mt-3 mb-3">
        <div className="col-md-3 col-sm-12">
          <button
            className="btn btn-block"
            style={{ background: "#005D5E", color: "#fff", fontSize: "20px" }}
            onClick={() => {
              id ? EditUser() : AddUser();
            }}
          >
            حفظ
          </button>
        </div>
      </div>
    </div>
  );
}
