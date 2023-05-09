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
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { FormattedHTMLMessage } from "react-intl";
import FieldsDropDown from "./FieldsDropDown";

const client = axios.create({
  baseURL: "https://estithmar.arabia-it.net/api/admin",
});
const ServiceProviderInputs = ({ providerDetails }) => {
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
  const [errors,setErrors]=useState()
  const [fields, setFields] = useState([]);

const [modal,setModal]=useState()
const toggle=()=>setModal(!modal)
  useEffect(() => {
    if (providerDetails) {
      const profile = providerDetails?.files?.find(
        (file) => file.title == "profile"
      )?.path;
      const firstImage = providerDetails?.files?.find(
        (file) => file.title == "السجل التجاري"
      )?.path;
      const secondImage = providerDetails?.files?.find(
        (file) => file.title == "الشهادة الضريبية"
      )?.path;
      const thirdImage = providerDetails?.files?.find(
        (file) => file.title == "عقد التأسيس"
      )?.path;
      const forthImage = providerDetails?.files?.find(
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
        ...providerDetails,
        name: providerDetails.user.name,
        email: providerDetails.user.email,
        phone:providerDetails.user.phone
      });
    }
  }, [providerDetails]);

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
      })
      .then((res) => {
        if (res.data.success) {
          swal({
            title: "",
            text:"تم اضافه مزود الخدمة بنجاح",
            icon: "success",
          });
        
          setTimeout(() => {
            history.push("/app/service-provider");
          }, 2000);
        }else{
            setErrors(res.data.errors)
        }
      })
    
  };
  const EditAssetsOwner = () => {
    
    client
      .put(`service-provider/${id}`, {
        ...data,
        user:undefined,
        created_at:undefined ,
        files:undefined,
        user_id:undefined,
        services:undefined,
        updated_at:undefined,
        files_ids: files,
        type: "update",
      })
      .then((res) => {
        if (res.data.success) {
          console.log(res.data,"response")
          // swal("تم تعديل مزود الخدمة بنجاح", "success");
          swal({
            title: "",
            text: "تم تعديل مزود الخدمة بنجاح",
            icon: "success",
          });

          setTimeout(() => {
            history.push("/app/service-provider");
          }, 2000);
        }else{
          console.log(res,"res")
          setErrors(res.data.errors)
        }
      });
  };
  const SavePassword =()=>{
    toggle()
  }
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
        <div className="col-md-4" style={{ alignSelf: "center",fontSize:"20px", color:"#707070" }}>
          <div>
          <span style={{color:"#005D5E",fontWeight:"bold"}}>تحديث كلمة المرور</span>
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
              onClick={()=>toggle()}
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
       <p className="title">
       بيانات الجهة 
        </p>
        <label class="container">
  <input type="checkbox" />
  <span class="checkmark"></span>
  <p style={{fontSize:"27px" ,color:"#D4B265" ,fontWeight:"bold"}}>العنوان التجاري</p>
</label>
       </div>
        <div className="col-md-4">
          <div>
            <FormGroup>
              <Label for="exampleSelect">الدولة</Label>
              <Input
                id="exampleSelect"
                name="select"
                type="select"
                style={{ borderColor: "#D4B265" }}
              >
                <option selected>المملكة العربيه السعودية</option>
              </Input>
            </FormGroup>
          </div>
        </div>
        <div className="col-md-4">
          <div>
            <FormGroup>
              <Label for="exampleSelect">المدينة</Label>
              <Input
                id="exampleSelect"
                name="select"
                type="select"
                style={{ borderColor: "#D4B265" }}
                onChange={(e) => {
                  setData({
                    ...data,
                    city: e.target.value,
                  });
                }}
              >
                <option></option>
                <option selected={data?.city == "الرياض"} value={"الرياض"}>
                  الرياض
                </option>
                <option value="جدة" selected={data?.city == "جدة"}>
                  جدة
                </option>
                <option value="القسيم" selected={data?.city == "القسيم"}>
                  القسيم
                </option>
                <option
                  value="مكة المكرمه"
                  selected={data?.city == "مكة المكرمة"}
                >
                  مكة المكرمه
                </option>
              </Input>
            </FormGroup>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-4">
          <div>
            <FormGroup>
              <Label for="exampleSelect">الحي</Label>
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
              <Label for="exampleSelect">الشارع</Label>
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
      <div className="row">
        <div className="col-md-4">
          <div>
            <FormGroup>
              <Label for="exampleSelect">رقم المبني</Label>
              <Input
                id="exampleSelect"
                name="select"
                type="text"
                style={{ borderColor: "#D4B265" }}
                defaultValue={data?.building_nom}
                value={data?.building_nom}
                onChange={(e) => {
                  setData({
                    ...data,
                    building_nom: e.target.value,
                  });
                }}
              />
            </FormGroup>
          </div>
        </div>
        <div className="col-md-4">
          <div>
            <FormGroup>
              <Label for="exampleSelect">الرمز البريدي</Label>
              <Input
                id="exampleSelect"
                name="select"
                type="text"
                defaultValue={data?.post_nom}
                value={data?.post_nom}
                onChange={(e) => {
                  setData({
                    ...data,
                    post_nom: e.target.value,
                  });
                }}
                style={{ borderColor: "#D4B265" }}
              />
            </FormGroup>
          </div>
        </div>
      </div>
      <div className="row required">
      <div className="col-12">
       
        <label class="container">
  <input type="checkbox" />
  <span class="checkmark"></span>
  <p style={{fontSize:"27px" ,color:"#D4B265" ,fontWeight:"bold"}}>تفاصيل النشاط</p>
</label>
       </div>
      <div className="col-md-4">
          <div>
            <FormGroup>
              <Label for="exampleEmail">
                <FormattedMessage id={"الاسم التجاري بالعربية"} />
              </Label>
              <Input
                style={{ borderColor: "#D4B265" }}
                type="text"
                defaultValue={data?.business_name_ar}
                value={data?.business_name_ar}
                onChange={(e) => {
                  setData({
                    ...data,
                    business_name_ar: e.target.value,
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
                <FormattedMessage id={"الاسم التجاري بالانجليزية"} />
              </Label>
              <Input
                style={{ borderColor: "#D4B265" }}
                type="text"
                defaultValue={data?.business_name_en}
                value={data?.business_name_en}
                onChange={(e) => {
                  setData({
                    ...data,
                    business_name_en: e.target.value,
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
              <Label for="exampleEmail">
                <FormattedMessage id={"اسم الشركة بالعربية"} />
              </Label>
              <Input
                style={{ borderColor: "#D4B265" }}
                type="text"
                defaultValue={data?.company_name_ar}
                value={data?.company_name_ar}
                onChange={(e) => {
                  setData({
                    ...data,
                    company_name_ar: e.target.value,
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
                <FormattedMessage id={"اسم الشركة بالانجليزية"} />
              </Label>
              <Input
                style={{ borderColor: "#D4B265" }}
                type="text"
                defaultValue={data?.company_name_en}
                value={data?.company_name_en}
                onChange={(e) => {
                  setData({
                    ...data,
                    company_name_en: e.target.value,
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
              <Label for="exampleEmail">
                <FormattedMessage id={"رقم السجل التجاري"} />
              </Label>
              <Input
                style={{ borderColor: "#D4B265" }}
                type="text"
                defaultValue={data?.tax_nom}
                value={data?.tax_nom}
                onChange={(e) => {
                  setData({
                    ...data,
                    tax_nom: e.target.value,
                  });
                }}
              />
            </FormGroup>
          </div>
        </div>
        <div className="col-md-4">
          <div className="row">
            <div className="col-md-6">
              <FormGroup>
                <Label for="exampleEmail">
                  <FormattedMessage id={"تاريخ الاصدار"} />
                </Label>
                <Input
                  style={{ borderColor: "#D4B265" }}
                  type="date"
                  defaultValue={data?.export_date}
                  value={data?.export_date}
                  onChange={(e) => {
                    setData({
                      ...data,
                      export_date: e.target.value,
                    });
                  }}
                />
              </FormGroup>
            </div>
            <div className="col-md-6">
              <FormGroup>
                <Label for="exampleEmail">
                  <FormattedMessage id={"تاريخ الإنتهاء"} />
                </Label>
                <Input
                  style={{ borderColor: "#D4B265" }}
                  type="date"
                  defaultValue={data?.expire_date}
                  value={data?.expire_date}
                  onChange={(e) => {
                    setData({
                      ...data,
                      expire_date: e.target.value,
                    });
                  }}
                />
              </FormGroup>
            </div>
    
          </div>
        </div>
      </div>

      <div className="row required">
        <div className="col-md-4">
          <div>
            <FormGroup>
              <Label for="exampleEmail">
                <FormattedMessage id={"نوع الكيان القانوني"} />
              </Label>
              <Input
                id="exampleSelect"
                name="select"
                type="select"
                style={{ borderColor: "#D4B265" }}
                value={data?.law_type}
                onChange={(e) => {
                  setData({
                    ...data,
                    law_type: e.target.value,
                  });
                }}
              >
                <option></option>
                <option value={"مؤسسة فردية"} selected={data?.law_type == "مؤسسة فردية"}>
                مؤسسة فردية{" "}
                </option>
                <option value={"مؤسسة جماعية"} selected={data?.law_type =="مؤسسة جماعية"}>
                مؤسسة جماعية{" "}
                </option>
              </Input>
            </FormGroup>
          </div>
        </div>
        <div className="col-md-4">
          <div>
            <FormGroup>
              <Label for="exampleSelect"> رقم الشهادة الضريبية</Label>
              <Input
                id="exampleSelect"
                name="select"
                type="text"
                style={{ borderColor: "#D4B265" }}
                defaultValue={data?.tax_cert_nom}
                value={data?.tax_cert_nom}
                onChange={(e) => {
                  setData({
                    ...data,
                    tax_cert_nom: e.target.value,
                  });
                }}
              />
              
            </FormGroup>
          </div>
        </div>
      </div>
      <div className="row required">
      <div className="col-md-8">
          <div>
            <FormGroup>
              <Label for="exampleEmail">
                <FormattedMessage id={"المجالات"} />
              </Label>
              <FieldsDropDown
                onChange={(sel) => {
                  setData({
                    ...data,
                    fields_id: data?.fields_id ?  [...data?.fields_id, sel.value] : [sel.value],
                  });
                  setFields([...fields, sel]);
                }}
                selectedItem={data?.fields_id}
              />
            
            </FormGroup>
          </div>
        </div>

      </div>

      <div className="row">
      <div className="col-12">
      
      <label class="container">
<input type="checkbox" />
<span class="checkmark"></span>
<p style={{fontSize:"27px" ,color:"#D4B265" ,fontWeight:"bold"}}>المستندات المرفقة  </p>
</label>
     </div>
        <div className="col-md-4">
          <FileUpload
            loader={loader}
            image={firstImage}
            name="السجل التجاري"
            setImage={(file) => {
             
              UploadFile(file, "first");
            }}
          />
        </div>
        <div className="col-md-4">
          <FileUpload
            image={secondImage}
            name="الشهادة الضريبية"
            setImage={(file) => {
              UploadFile(file, "second");
            }}
          />
        </div>
      </div>
      <div className="row">
        <div className="col-md-4">
          <FileUpload
            image={thirdImage}
            name={"عقد التأسيس"}
            setImage={(file) => {
              UploadFile(file, "third");
            }}
          />
        </div>
        <div className="col-md-4">
          <FileUpload
            image={forthImage}
            name={"الشهادة البنكية"}
            setImage={(file) => {
              UploadFile(file, "forth");
            }}
          />
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
                style={{ borderColor: "#D4B265" ,direction:"ltr"}}
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
                style={{ borderColor: "#D4B265",direction:"ltr" }}
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
                style={{ borderColor: "#D4B265" ,direction:"ltr"}}
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
                style={{ borderColor: "#D4B265",direction:"ltr" }}
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
                style={{ borderColor: "#D4B265",direction:"ltr" }}
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
                style={{ borderColor: "#D4B265" ,direction:"ltr"}}
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
      <div>
      { 
                  errors ? 
                    Object.keys(errors)?.map((key,value)=>(
                      <div className=''> 
                        {errors[key]?.map(err=>(
                        <div className='alert alert-danger'>
                          {key}: {err}
                        </div>
                        ))
                        }
                      </div>
                    ))
                    : null
                  }
      </div>
      <div className="row justify-content-center">
        <div className="col-md-4">
          <button
            className="btn btn-block"
            onClick={() =>
              providerDetails ? EditAssetsOwner() : AddServiceProvider()
            }
            style={{ background: "#005D5E", color: "#fff" ,fontSize:"20px"}}
          >
            حفظ
          </button>
        </div>
        <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>تعيين كلمة مرور </ModalHeader>
        <ModalBody>
        <div className="col-md-12">
                        <FormGroup>
                        <Label for="exampleEmail">
                        <FormattedHTMLMessage id={"كلمة السر"} />
                        </Label>
                        <Input
                        name="select"
                        type="password"
                        autoCorrect="off"
                          autoComplete="off"
                        style={{ borderColor: "#D4B265" }}
                        onChange={(e)=>{
                            setData({
                              ...data,
                              password:e.target.value

                            })
                        }}
                        />
                    </FormGroup>
                        </div>
                        <div className="col-md-12">
                        <FormGroup>
                        <Label for="exampleEmail">
                        <FormattedHTMLMessage id={" تاكيد كلمة السر "} />
                        </Label>
                        <Input
                        name="select"
                        type="password"
                        autoCorrect="off"
                          autoComplete="off"
                        style={{ borderColor: "#D4B265" }}
                        onChange={(e)=>{
                          setData({
                            ...data,
                            password_confirmation:e.target.value
                          })
                        }}
                        />
                    </FormGroup>
                        </div>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={SavePassword}>
            حفظ
          </Button>{' '}
          {/* <Button color="secondary" onClick={toggle}>
            Cancel
          </Button> */}
        </ModalFooter>
      </Modal>
      </div>
    </>
  );
};
export default ServiceProviderInputs;
