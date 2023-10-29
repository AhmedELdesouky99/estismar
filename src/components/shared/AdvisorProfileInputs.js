import { FormattedMessage } from "react-intl";
import { FormGroup, Label, Input } from "reactstrap";
import React from "react";
import ImageUpload from "./ImageUpload";
import { useState } from "react";
import axios from "axios";
import FileUpload from "./FileUploader";
import { useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import swal from "sweetalert";
import FieldsDropDown from "Components/shared/FieldsDropDown";
import AddIcon from "@material-ui/icons/Add";
import CloseIcon from "@material-ui/icons/Close";

const client = axios.create({
  baseURL: "https://admin.waqfnami.com/api/admin",
});
const AdvisorProfileInputs = ({ advisorDetails }) => {
  const [loader, setLoader] = useState(false);
  const [EnImage, setEnImage] = useState();
  const [firstImage, setFirstImage] = useState();
  const [secondImage, setSecondImage] = useState();
  const [thirdImage, setThirdImage] = useState();
  const [forthImage, setForthImage] = useState();
  const [certifications, setCertifications] = useState("");
  const [positions, setPositions] = useState("");
  const [data, setData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "123456",
    password_confirmation: "123456",
    files_ids: [],
    ar_name: "",
    en_name: "",
    fields_id: [],
    edu_certificates: [],
    work_positions: [],
  });
  const [files, setFiles] = useState([]);
  const [fields, setFields] = useState([]);

  const history = useHistory();
  const { id } = useParams();
  useEffect(() => {
    if (advisorDetails) {
      const profile = advisorDetails?.files?.find(
        (file) => file.title == "profile"
      )?.path;
      const fields = advisorDetails?.fields?.map((field) => field.id);
      const fieldsForLabel = advisorDetails?.fields?.map((field) => ({
        label: field.name,
        value: field.id,
      }));

      setEnImage(profile ? "https://estithmar.arabia-it.net" + profile : null);
      setFirstImage(
        firstImage ? "https://estithmar.arabia-it.net" + firstImage : null
      );
      setSecondImage(
        secondImage ? "https://estithmar.arabia-it.net" + secondImage : null
      );
      setThirdImage(
        thirdImage ? "https://estithmar.arabia-it.net" + thirdImage : null
      );
      setForthImage(
        forthImage ? "https://estithmar.arabia-it.net" + forthImage : null
      );
      const { edu_certificates, work_positions } =      advisorDetails.meta ? JSON.parse(
        advisorDetails.meta
      ) : {}
      setData({
        ...advisorDetails,
        name: advisorDetails.user.name,
        email: advisorDetails.user.email,
        phone: advisorDetails.user.phone,
        nationality: advisorDetails.nationality,
        resident: advisorDetails.resident,
        edu_certificates: edu_certificates,
        work_positions: work_positions,
        fields_id: fields,
      });
      setFields(fieldsForLabel);
    }
  }, [advisorDetails]);

  const uploadEnimage = (file) => {
    setLoader(true);
    const formdata = new FormData();
    formdata.append("title", "profile");
    formdata.append("store_file", true);
    formdata.append("file", file);
    client
      .post("/advisor", formdata, {
        headers: {
          "Content-Type": "multipart/form-data; ",
        },
      })
      .then((res) => {
        setLoader(false);
        setFiles([...files, res.data.data.id]);
        setEnImage("https://estithmar.arabia-it.net" + res.data.data.path);
      });
  };

  const AddServiceProvider = () => {
    client
      .post("/advisor", {
        ...data,
        files_ids: files,
        password: "123456",
        password_confirmation: "123456",
      })
      .then((res) => {
        if (res.data.success) {
          swal({
            title: "",
            text: "تم اضافه   مستشار بنجاح",
            icon: "success",
          });

          setTimeout(() => {
            history.push("/app/advisors");
          }, 2000);
        } else {
        }
      });
  };
  const EditAssetsOwner = () => {
    client
      .put(`advisor/${id}`, {
        ...data,
        user: undefined,
        created_at: undefined,
        files: undefined,   
        fields: undefined,
        user_id: undefined,
        services: undefined,
        updated_at: undefined,
        files_ids: files,
        type: "update",
      })
      .then((res) => {
        if (res.data.success) {
          // swal("تم تعديل مزود الخدمة بنجاح", "success");
          swal({
            title: "",
            text: "تم تعديل   مستشار بنجاح",
            icon: "success",
          });

          setTimeout(() => {
            history.push("/app/advisors");
          }, 2000);
        }
      });
  };
  return (
    <>
      <div className="row profile">
        <div className="col-md-4">
          <div>
            <p className="title">بيانات الحساب</p>
            <FormGroup>
              <Label for="exampleEmail">
                <FormattedMessage id={"اسم المستخدم"} />
              </Label>
              <Input
                style={{ borderColor: "#7EA831" }}
                placeholder={"اسم المستخدم"}
                type="text"
                defaultValue={data?.name}
                onChange={(e) =>
                  setData({
                    ...data,
                    name: e.target.value,
                  })
                }
              />
            </FormGroup>
          </div>
          <div>
            <FormGroup>
              <Label for="exampleEmail">
                <FormattedMessage id={"البريد الإلكتروني"} />
              </Label>
              <Input
                style={{ borderColor: "#7EA831" }}
                placeholder={"البريد الإلكتروني"}
                type="email"
                defaultValue={data?.email}
                onChange={(e) =>
                  setData({
                    ...data,
                    email: e.target.value,
                  })
                }
              />
            </FormGroup>
          </div>
          <div>
            <FormGroup>
              <Label for="exampleEmail">
                <FormattedMessage id={" رقم الجوال"} />
              </Label>
              <Input
                style={{ borderColor: "#7EA831" }}
                placeholder={"رقم الجوال"}
                type="text"
                defaultValue={data?.phone}
                onChange={(e) =>
                  setData({
                    ...data,
                    phone: e.target.value,
                  })
                }
              />
            </FormGroup>
          </div>
        </div>
        <div
          className="col-md-4"
          style={{ alignSelf: "center", fontSize: "20px", color: "#707070" }}
        >
          <div>
            <span style={{ color: "#150941", fontWeight: "bold" }}>
              تحديث كلمة المرور
            </span>
            من خلال الزر أدناه سيتم
            <br />
            إعادة توجيهك إلى صفحة جديدة ويجب اتباع
            <br />
            التعليمات
          </div>
          <div>
            <button
              className="btn btn-block"
              style={{ background: "#7EA831", color: "#fff" }}
            >
              تسجيل كلمة مرور جديدة
            </button>
          </div>
        </div>
        <div className="col-md-3" style={{ alignSelf: "center" }}>
          <ImageUpload
            loader={loader}
            image={EnImage}
            setImage={(file) => {
              uploadEnimage(file);
            }}
          />
        </div>
      </div>

      <div className="row required">
        <div className="col-12">
          <p className="title">المعلومات الشـخصية</p>
        </div>
        <div className="col-md-4">
          <div>
            <FormGroup>
              <Label for="exampleSelect">اسم المستشار بالعربية</Label>
              <Input
                id="exampleSelect"
                name="select"
                type="text"
                style={{ borderColor: "#7EA831" }}
                value={data.ar_name}
                onChange={(e) =>
                  setData({
                    ...data,
                    ar_name: e.target.value,
                  })
                }
              />
            </FormGroup>
          </div>
        </div>
        <div className="col-md-4">
          <div>
            <FormGroup>
              <Label for="exampleSelect">اسم المستشار بالانجليزية</Label>
              <Input
                id="exampleSelect"
                name="text"
                type="text"
                style={{ borderColor: "#7EA831" }}
                value={data.en_name}
                onChange={(e) => {
                  setData({
                    ...data,
                    en_name: e.target.value,
                  });
                }}
              />
            </FormGroup>
          </div>
        </div>
      </div>
      <div className="row required">
        <div className="col-md-4">
          <div>
            <FormGroup>
              <Label for="exampleSelect">الاقامة</Label>
              <Input
                id="exampleSelect"
                name="select"
                type="text"
                defaultValue={data?.district}
                value={data?.resident}
                onChange={(e) => {
                  setData({
                    ...data,
                    resident: e.target.value,
                  });
                }}
                style={{ borderColor: "#7EA831" }}
              />
            </FormGroup>
          </div>
        </div>
        <div className="col-md-4">
          <div>
            <FormGroup>
              <Label for="exampleSelect">الجنسية</Label>
              <Input
                id="exampleSelect"
                name="select"
                type="text"
                style={{ borderColor: "#7EA831" }}
                value={data?.nationality}
                onChange={(e) => {
                  setData({
                    ...data,
                    nationality: e.target.value,
                  });
                }}
              />
            </FormGroup>
          </div>
        </div>
      </div>

      <div className="row required">
        <div className="col-12">
          <p className="title">المجالات الوظيفية</p>
        </div>
      </div>

      <div className="row required">
        <div className="col-md-8">
          <div>
            <FormGroup>
              <Label for="exampleEmail">
                <FormattedMessage id={"المجالات"} />
              </Label>
              {/* <FieldsDropDown/> */}
              <FieldsDropDown
                onChange={(sel) => {
                  setData({
                    ...data,
                    fields_id: [...data.fields_id, sel.value],
                  });
                  setFields([...fields, sel]);
                }}
                selectedItem={data.fields_id}
              />
            </FormGroup>
          </div>
        </div>
        <div className="col-md-8">
          <div
            className="card mt-1 "
            style={{
              borderColor: "#7EA831",
              padding: "10px",
              minHeight: "100px",
            }}
          >
            <div className="row" style={{ margin: "3px" }}>
              {fields?.map((oneservice, index) => (
                <div className="col-md-4 mt-2">
                  <div
                    className="d-flex"
                    style={{
                      background: "#CF4949",
                      padding: "5px 10px",
                      justifyContent: "space-between",
                    }}
                  >
                    <div style={{ color: "#FFFFFF" }}>{oneservice.label}</div>
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
                          const serviceRequirementList = [...data?.fields_id];
                          const fieldsList = [...fields];
                          const filterdFields = fieldsList.filter(
                            (one, idx) => idx != index
                          );
                          const filterdService = serviceRequirementList.filter(
                            (one, idx) => idx != index
                          );
                          setData({
                            ...data,
                            fields_id: filterdService,
                          });
                          setFields([...filterdFields]);
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

      <div className="row">
        <div className="col-12">
          <p className="title">الشهادات العلمية </p>
        </div>
      </div>
      <div className="row required">
        <div className="col-md-8">
          <div className="row">
            <div className="col-md-12">
              <Label for="exampleEmail">
                <FormattedMessage id={"الشهادات العلمية"} />
              </Label>
            </div>
            <div className="col-md-10">
              <FormGroup>
                <Input
                  id="exampleSelect"
                  name="select"
                  type="text"
                  style={{ borderColor: "#7EA831" }}
                  value={certifications}
                  onChange={(e) => {
                    setCertifications(e.target.value);
                  }}
                />
              </FormGroup>
            </div>
            <div className="col-md-2">
              <button
                className="btn"
                style={{
                  color: "#fff",
                  background: "#150941",
                  maxHeight: "35px",
                }}
                disabled={!certifications.length}
                onClick={() => {
                  const edu_certificates = data?.edu_certificates ?  [...data?.edu_certificates] :[]
                  edu_certificates?.push(certifications);
                  setData({
                    ...data,
                    edu_certificates: edu_certificates,
                  });
                  setCertifications("");
                }}
              >
                <AddIcon />
              </button>
            </div>
          </div>
        </div>
        <div className="col-md-8">
          <div
            className="card mt-1 "
            style={{
              borderColor: "#7EA831",
              padding: "10px",
              minHeight: "100px",
            }}
          >
            <div className="row" style={{ margin: "3px" }}>
              {data?.edu_certificates?.map((oneservice, index) => (
                <div className="col-md-12 mt-2">
                  <div
                    className="d-flex"
                    style={{
                      background: "#CF4949",
                      padding: "5px 10px",
                      justifyContent: "space-between",
                    }}
                  >
                    <div style={{ color: "#FFFFFF" }}>{oneservice}</div>
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
                            ...data?.edu_certificates,
                          ];
                          const filterdService = serviceRequirementList.filter(
                            (one, idx) => idx != index
                          );
                          setData({
                            ...data,
                            edu_certificates: filterdService,
                          });
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

      <div className="row">
        <div className="col-12">
          <p className="title">المناصب الوظيفية </p>
        </div>
      </div>

      <div className="row required">
        <div className="col-md-8">
          <div className="row">
            <div className="col-md-12">
              <Label for="exampleEmail">
                <FormattedMessage id={"المناصب الوظيفية"} />
              </Label>
            </div>
            <div className="col-md-10">
              <FormGroup>
                <Input
                  id="exampleSelect"
                  name="select"
                  type="text"
                  style={{ borderColor: "#7EA831" }}
                  value={positions}
                  onChange={(e) => {
                    setPositions(e.target.value);
                  }}
                />
              </FormGroup>
            </div>
            <div className="col-md-2">
              <button
                className="btn"
                style={{
                  color: "#fff",
                  background: "#150941",
                  maxHeight: "35px",
                }}
                disabled={!positions.length}
                onClick={() => {
                  const work_positions = data?.work_positions ? [...data?.work_positions] :[];
                  work_positions.push(positions);
                  setData({
                    ...data,
                    work_positions: work_positions,
                  });
                  setPositions("");
                }}
              >
                <AddIcon />
              </button>
            </div>
          </div>
        </div>
        <div className="col-md-8">
          <div
            className="card mt-1 "
            style={{
              borderColor: "#7EA831",
              padding: "10px",
              minHeight: "100px",
            }}
          >
            <div className="row" style={{ margin: "3px" }}>
              {data?.work_positions?.map((oneservice, index) => (
                <div className="col-md-12 mt-2">
                  <div
                    className="d-flex"
                    style={{
                      background: "#CF4949",
                      padding: "5px 10px",
                      justifyContent: "space-between",
                    }}
                  >
                    <div style={{ color: "#FFFFFF" }}>{oneservice}</div>
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
                            ...data?.work_positions,
                          ];
                          const filterdService = serviceRequirementList.filter(
                            (one, idx) => idx != index
                          );
                          setData({
                            ...data,
                            work_positions: filterdService,
                          });
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
      <div className="row justify-content-center mt-2">
        <div className="col-md-4">
          <button
            className="btn btn-block"
            onClick={() =>
              advisorDetails ? EditAssetsOwner() : AddServiceProvider()
            }
            style={{ background: "#150941", color: "#fff", fontSize: "20px" }}
          >
            حفظ
          </button>
        </div>
      </div>
    </>
  );
};
export default AdvisorProfileInputs;
