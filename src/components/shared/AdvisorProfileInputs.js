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

const client = axios.create({
  baseURL: "https://estithmar.arabia-it.net/api/admin",
});
const AdvisorProfileInputs = ({ advisorDetails }) => {
  const [loader, setLoader] = useState(false);
  const [EnImage, setEnImage] = useState();
  const [firstImage, setFirstImage] = useState();
  const [secondImage, setSecondImage] = useState();
  const [thirdImage, setThirdImage] = useState();
  const [forthImage, setForthImage] = useState();
  const [data, setData] = useState();
  const [files, setFiles] = useState([]);
  const history = useHistory();
  const { id } = useParams();

  useEffect(() => {
    if (advisorDetails) {
      const profile = advisorDetails?.files?.find(
        (file) => file.title == "profile"
      )?.path;
      const firstImage = advisorDetails?.files?.find(
        (file) => file.title == "السجل التجاري"
      )?.path;
      const secondImage = advisorDetails?.files?.find(
        (file) => file.title == "الشهادة الضريبية"
      )?.path;
      const thirdImage = advisorDetails?.files?.find(
        (file) => file.title == "عقد التأسيس"
      )?.path;
      const forthImage = advisorDetails?.files?.find(
        (file) => file.title == "الشهادة البنكية"
      )?.path;

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

      setData({
        ...advisorDetails,
        name: advisorDetails.user.name,
        email: advisorDetails.user.email,
        phone: advisorDetails.user.phone,
      });
    }
  }, [advisorDetails]);

  const uploadEnimage = (file) => {
    setLoader(true);
    const formdata = new FormData();
    formdata.append("title", "profile");
    formdata.append("store_file", true);
    formdata.append("file", file);
    client
      .post("/service-provider", formdata, {
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
  const UploadFile = (file, name) => {
    setLoader(true);
    const formdata = new FormData();
    formdata.append(
      "title",
      name == "first"
        ? "السجل التجاري"
        : "second"
        ? "الشهادة الضريبية"
        : "third"
        ? "عقد التأسيس"
        : "الشهادة البنكية"
    );
    formdata.append("store_file", true);
    formdata.append("file", file);
    client
      .post("/service-provider", formdata, {
        headers: {
          "Content-Type": "multipart/form-data; ",
        },
      })
      .then((res) => {
        setLoader(false);
        if (name == "first") {
          setFirstImage("https://estithmar.arabia-it.net" + res.data.data.path);
          setFiles([...files, res.data.data.id]);
        } else if (name == "second") {
          setSecondImage(
            "https://estithmar.arabia-it.net" + res.data.data.path
          );
          setFiles([...files, res.data.data.id]);
        } else if (name == "third") {
          setThirdImage("https://estithmar.arabia-it.net" + res.data.data.path);
          setFiles([...files, res.data.data.id]);
        } else {
          setForthImage("https://estithmar.arabia-it.net" + res.data.data.path);
          setFiles([...files, res.data.data.id]);
        }
      });
  };
  const AddServiceProvider = () => {
    client
      .post("/service-provider", {
        ...data,
        files_ids: files,
        password: "123456",
        password_confirmation: "123456",
      })
      .then((res) => {
        if (res.data.success) {
          swal({
            title: "",
            text: "تم اضافه مزود الخدمة بنجاح",
            icon: "success",
          });

          setTimeout(() => {
            history.push("/app/service-provider");
          }, 2000);
        } else {
        }
      });
  };
  const EditAssetsOwner = () => {
    client
      .put(`service-provider/${id}`, {
        ...data,
        user: undefined,
        created_at: undefined,
        files: undefined,
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
            text: "تم تعديل مزود الخدمة بنجاح",
            icon: "success",
          });

          setTimeout(() => {
            history.push("/app/service-provider");
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
                style={{ borderColor: "#D4B265" }}
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
                style={{ borderColor: "#D4B265" }}
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
                style={{ borderColor: "#D4B265" }}
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
            <span style={{ color: "#005D5E", fontWeight: "bold" }}>
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
              style={{ background: "#D4B265", color: "#fff" }}
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
                style={{ borderColor: "#D4B265" }}
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
                style={{ borderColor: "#D4B265" }}
                onChange={(e) => {
                  setData({
                    ...data,
                    city: e.target.value,
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
                value={data?.district}
                onChange={(e) => {
                  setData({
                    ...data,
                    district: e.target.value,
                  });
                }}
                style={{ borderColor: "#D4B265" }}
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
                style={{ borderColor: "#D4B265" }}
                defaultValue={data?.street}
                value={data?.street}
                onChange={(e) => {
                  setData({
                    ...data,
                    street: e.target.value,
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
              //   onChange={(sel) => {
              //     setService({
              //       ...Service,
              //       field_id: sel.value,
              //     });
              //   }}
              //   selectedItem={Service.field_id}
              />
            </FormGroup>
          </div>
        </div>
        <div
          className="card mt-1 col-md-8"
          style={{
            borderColor: "#D4B265",
            padding: "10px",
            minHeight: "100px",
          }}
        ></div>
      </div>

      <div className="row">
        <div className="col-12">
         
            <p
              style={{ fontSize: "27px", color: "#D4B265", fontWeight: "bold" }}
            >
               الشهادات العلمية{" "}
            </p>
        </div>
        
       
        
      </div>

      <div className="row profile">
        <div className="col-12">
          <p className="title">حسابات التواصل الإجتماعي</p>
        </div>
        <div className="col-md-4">
          <div>
            <FormGroup>
              <Label for="exampleEmail">
                <FormattedMessage id={"الموقع الالكتروني"} />
              </Label>
              <Input
                style={{ borderColor: "#D4B265", direction: "ltr" }}
                placeholder={"https://www."}
                type="text"
                defaultValue={data?.website_url}
                value={data?.website_url}
                onChange={(e) => {
                  setData({
                    ...data,
                    website_url: e.target.value,
                  });
                }}
              />
            </FormGroup>
          </div>
        </div>
        <div className="col-md-4">
          <div>
            <FormGroup>
              <Label for="exampleEmail">
                <FormattedMessage id={" واتس اب"} />
              </Label>
              <Input
                style={{ borderColor: "#D4B265", direction: "ltr" }}
                placeholder={"+966 56 464 5665"}
                type="text"
                defaultValue={data?.watsapp_nom}
                value={data?.watsapp_nom}
                onChange={(e) => {
                  setData({
                    ...data,
                    watsapp_nom: e.target.value,
                  });
                }}
              />
            </FormGroup>
          </div>
        </div>
      </div>
      <div className="row profile">
        <div className="col-md-4">
          <div>
            <FormGroup>
              <Label for="exampleEmail">
                <FormattedMessage id={"فيسبوك"} />
              </Label>
              <Input
                style={{ borderColor: "#D4B265", direction: "ltr" }}
                placeholder={"https://www.facebook.com/"}
                type="text"
                defaultValue={data?.facebook_url}
                value={data?.facebook_url}
                onChange={(e) => {
                  setData({
                    ...data,
                    facebook_url: e.target.value,
                  });
                }}
              />
            </FormGroup>
          </div>
        </div>
        <div className="col-md-4">
          <div>
            <FormGroup>
              <Label for="exampleEmail">
                <FormattedMessage id={" انستغرام"} />
              </Label>
              <Input
                style={{ borderColor: "#D4B265", direction: "ltr" }}
                placeholder={"https://www.instagram.com/"}
                type="text"
                defaultValue={data?.insta_url}
                value={data?.insta_url}
                onChange={(e) => {
                  setData({
                    ...data,
                    insta_url: e.target.value,
                  });
                }}
              />
            </FormGroup>
          </div>
        </div>
      </div>
      <div className="row profile">
        <div className="col-md-4">
          <div>
            <FormGroup>
              <Label for="exampleEmail">
                <FormattedMessage id={"تويتر"} />
              </Label>
              <Input
                style={{ borderColor: "#D4B265", direction: "ltr" }}
                placeholder={"https://www.twitter.com/"}
                type="text"
                defaultValue={data?.twitter_url}
                value={data?.twitter_url}
                onChange={(e) => {
                  setData({
                    ...data,
                    twitter_url: e.target.value,
                  });
                }}
              />
            </FormGroup>
          </div>
        </div>
        <div className="col-md-4">
          <div>
            <FormGroup>
              <Label for="exampleEmail">
                <FormattedMessage id={"سناب شات"} />
              </Label>
              <Input
                style={{ borderColor: "#D4B265", direction: "ltr" }}
                placeholder={"https://www.snapchat.com/add/"}
                type="text"
                defaultValue={data?.snap_url}
                value={data?.snap_url}
                onChange={(e) => {
                  setData({
                    ...data,
                    snap_url: e.target.value,
                  });
                }}
              />
            </FormGroup>
          </div>
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-md-4">
          <button
            className="btn btn-block"
            onClick={() =>
              advisorDetails ? EditAssetsOwner() : AddServiceProvider()
            }
            style={{ background: "#005D5E", color: "#fff", fontSize: "20px" }}
          >
            حفظ
          </button>
        </div>
      </div>
    </>
  );
};
export default AdvisorProfileInputs;
