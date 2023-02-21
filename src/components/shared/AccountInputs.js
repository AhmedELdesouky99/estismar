import { FormattedMessage } from "react-intl";
import { FormGroup, Label, Input } from "reactstrap";
import React from "react";
import ImageUpload from "./ImageUpload";
import { useState } from "react";
import axios from "axios";
import FileUpload from "./FileUploader";
import { useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import Swal from 'sweetalert'

const client = axios.create({
  baseURL: "https://estithmar.arabia-it.net/api/admin",
});
const AccountInputs = ({ownerDetails}) => {
  const [loader, setLoader] = useState(false);
  const [EnImage, setEnImage] = useState();
  const [firstImage,setFirstImage]=useState()
  const [secondImage,setSecondImage]=useState()
  const [thirdImage,setThirdImage]=useState()
  const [forthImage,setForthImage]=useState()
  const [data,setData]=useState()
  const [files,setFiles]=useState([])
  const history=useHistory()
  const {id} =useParams()
  // {
  //       name : "كريم",
  //       email : "mostafa.husany@gmail.com",
  //       password : "123456",
  //       password_confirmation : "123456",
  //       type : "update",
  //       asset_name_ar : "الوقف الأول",
  //       asset_name_en : "Asset One",
  //       owner_name : "Mostafa Hazem",
  //       owner_family : "Elsayed",
  //       asset_nom : "0910291019",
  //       export_date: "2023-02-07",
  //       exported_by : "محكمة الاحوال الشخصية",
  //       manager_name : "Mostafa Hazem",
  //       civil_registry_nom : "1020102910",
  //       asset_bank : "Al-Ahlely",
  //       asset_type : "اسهم",
  //       city  : "جدة",
  //       district : "المنطقة الأولي",
  //       street : "الشارع الأول",
  //       building_nom : "12",
  //       post_nom : "12421"
  //   }
useEffect(()=>{
    if(ownerDetails){
      const profile=ownerDetails?.files?.find(file=>file.title=="profile")?.path
      const firstImage=ownerDetails?.files?.find(file=>file.title=="صك الوقفية")?.path
      const secondImage =ownerDetails?.files?.find(file=>file.title=="الشهادة الضريبية")?.path
      const thirdImage =ownerDetails?.files?.find(file=>file.title=="عقد التأسيس")?.path
      const forthImage=ownerDetails?.files?.find(file=>file.title=="دورة عمل الوقف")?.path

      setEnImage(profile ? "https://estithmar.arabia-it.net"+ profile : null)
      setFirstImage(firstImage ? "https://estithmar.arabia-it.net"+firstImage :null)
      setSecondImage(secondImage ? "https://estithmar.arabia-it.net"+secondImage : null)
      setThirdImage(thirdImage ? "https://estithmar.arabia-it.net"+ thirdImage: null)
      setForthImage(forthImage ? "https://estithmar.arabia-it.net" + forthImage :null)

        setData({
          ...ownerDetails,
          name:ownerDetails.user.name,
          email:ownerDetails.user.email,
        })
       
    }
},[ownerDetails])

  const uploadEnimage = (file) => {
    setLoader(true);
    const formdata = new FormData();
    formdata.append("title", "profile");
    formdata.append("store_file", true);
    formdata.append("file", file);
    client
      .post("/asset-owner", formdata, {
        headers: {
          "Content-Type": "multipart/form-data; ",
        },
      })
      .then((res) => {
        setLoader(false);
        setFiles([...files,res.data.data.id])
        setEnImage("https://estithmar.arabia-it.net" + res.data.data.path);
      });
  };
  const UploadFile=(file,name)=>{
    setLoader(true);
    const formdata = new FormData();
    formdata.append("title", name== "first" ? "صك الوقفية" : "second" ? "الشهادة الضريبية":"third" ?"عقد التأسيس" : "دورة عمل الوقف");
    formdata.append("store_file", true);
    formdata.append("file", file);
    client
      .post("/asset-owner", formdata, {
        headers: {
          "Content-Type": "multipart/form-data; ",
        },
      })
      .then((res) => {
        setLoader(false);
        if(name == "first"){
        setFirstImage("https://estithmar.arabia-it.net" + res.data.data.path);
        setFiles([...files,res.data.data.id])
            
        }else if (name== "second"){
            setSecondImage("https://estithmar.arabia-it.net" + res.data.data.path)
            setFiles([...files,res.data.data.id])
        } else if(name=="third"){
            setThirdImage("https://estithmar.arabia-it.net" + res.data.data.path)
            setFiles([...files,res.data.data.id])
        }else{
          setForthImage("https://estithmar.arabia-it.net" + res.data.data.path)
          setFiles([...files,res.data.data.id])
        }
      });
  }
  const AddAssetsOwner=()=>{
    client.post("/asset-owner",{
      ...data,
      files_ids:files,
      password:"123456",
    password_confirmation : "123456",

    }).then(res=>{
      if(res.data.success){
      
        swal({
          title: "",
          text:" تم اضافه الوقف بنجاح",
          icon: "success",
        });
      }
    }).then(()=>{
      setTimeout(()=>{
        history.push("/app/owners-assets")
      },2000)
    })
  }
  const EditAssetsOwner=()=>{

    client.put(`asset-owner/${id}`,{
      ...data,
      files_ids:files,
      type : "update",
    }).then((res)=>{
      if(res.data.success){
        swal({
          title: "",
          text:" تم تعديل الوقف بنجاح",
          icon: "success",
        });
        setTimeout(()=>{
          history.push("/app/owners-assets")
        },2000)
      }
    })
  }
  return (
    <>
      <div className="row">
        <div className="col-md-4 profile">
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
                onChange={(e)=>setData({
                    ...data,
                    name:e.target.value
                })}
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
                onChange={(e)=>setData({
                    ...data,
                    email:e.target.value
                })}
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
                placeholder={"+966 56 464 5665"}
                type="text"
                defaultValue={data?.phone}
                onChange={(e)=>setData({
                    ...data,
                    phone:e.target.value
                })}
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
            <button className="btn btn-block" style={{background:"#D4B265" ,color:"#fff"}}>تسجيل كلمة مرور جديدة</button>
          </div>
        </div>
        <div className="col-md-3" style={{ alignSelf: "center" }}>
          <ImageUpload
            loader={loader}
            image={EnImage}
            setImage={(file) => {
              // console.log(file,"file")
              uploadEnimage(file);
            }}
          />
        </div>
      </div>
      <div className="row required">
       <div className="col-12">
       <p className="title">
        بيانات الوقف
        </p>
        <label class="container">
  <input type="checkbox" />
  <span class="checkmark"></span>
  <p style={{fontSize:"27px" ,color:"#D4B265" ,fontWeight:"bold"}}>تفاصيل الوقف</p>
</label>
       </div>
        <div className="col-md-4">
          <div>
            <FormGroup>
              <Label for="exampleEmail">
                <FormattedMessage id={"اسم الوقف بالعربيه"} />
              </Label>
              <Input
                style={{ borderColor: "#D4B265" }}
                placeholder={"اسم الوقف بالعربيه"}
                type="text"
                defaultValue={data?.asset_name_ar}
                value={data?.asset_name_ar}
                onChange={(e)=>{
                   
                   setData({
                       ...data,
                       asset_name_ar:e.target.value
                   })
                }}
                
              />
            </FormGroup>
          </div>
        </div>
        <div className="col-md-4">
          <div>
            <FormGroup>
              <Label for="exampleEmail">
                <FormattedMessage id={"اسم الوقف بالانجليزية"} />
              </Label>
              <Input
                style={{ borderColor: "#D4B265" }}
                placeholder={"اسم الوقف بالانجليزية"}
                type="text"
                defaultValue={data?.asset_name_en}
                value={data?.asset_name_en}
                onChange={(e)=>{
                   
                   setData({
                       ...data,
                       asset_name_en:e.target.value
                   })
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
                <FormattedMessage id={"صاحب الوقف"} />
              </Label>
              <Input
                style={{ borderColor: "#D4B265" }}
                placeholder={"صاحب الوقف"}
                type="text"
                defaultValue={data?.owner_name}
                value={data?.owner_name}
                onChange={(e)=>{
                   
                   setData({
                       ...data,
                       owner_name:e.target.value
                   })
                }}
                
              />
            </FormGroup>
          </div>
        </div>
        <div className="col-md-4">
          <div>
            <FormGroup>
              <Label for="exampleEmail">
                <FormattedMessage id={" العائلة"} />
              </Label>
              <Input
                style={{ borderColor: "#D4B265" }}
                placeholder={"العائلة"}
                type="text"
                defaultValue={data?.owner_family}
                value={data?.owner_family}
                onChange={(e)=>{
                   
                   setData({
                       ...data,
                       owner_family:e.target.value
                   })
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
                <FormattedMessage id={"رقم صك الوقفية"} />
              </Label>
              <Input
                style={{ borderColor: "#D4B265" }}
                placeholder={"رقم صك الوقفية"}
                type="text"
                defaultValue={data?.asset_nom}
                value={data?.asset_nom}
                onChange={(e)=>{
                   
                   setData({
                       ...data,
                       asset_nom:e.target.value
                   })
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
                <Input style={{ borderColor: "#D4B265" }} type="date" 
                 defaultValue={data?.export_date}
                 value={data?.export_date}
                 onChange={(e)=>{
                    
                    setData({
                        ...data,
                        export_date:e.target.value
                    })
                 }}
                />
              </FormGroup>
            </div>
            <div className="col-md-6">
              <FormGroup>
                <Label for="exampleEmail">
                  <FormattedMessage id={"مصدرها"} />
                </Label>
                <Input
                  style={{ borderColor: "#D4B265" }}
                  placeholder={"مصدرها"}
                  type="text"
                  defaultValue={data?.exported_by}
                  value={data?.exported_by}
                  onChange={(e)=>{
                     
                     setData({
                         ...data,
                         exported_by:e.target.value
                     })
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
                <FormattedMessage id={"اسم ناظر الوقف"} />
              </Label>
              <Input
                style={{ borderColor: "#D4B265" }}
                placeholder={"اسم ناظر الوقف"}
                type="text"
                defaultValue={data?.manager_name}
                value={data?.manager_name}
                onChange={(e)=>{
                   
                   setData({
                       ...data,
                       manager_name:e.target.value
                   })
                }}
                
              />
            </FormGroup>
          </div>
        </div>
        <div className="col-md-4">
          <div>
            <FormGroup>
              <Label for="exampleEmail">
                <FormattedMessage id={"رقم السجل المدني"} />
              </Label>
              <Input
                style={{ borderColor: "#D4B265" }}
                placeholder={"رقم صك الوقفية"}
                type="text"
                defaultValue={data?.civil_registry_nom}
                value={data?.civil_registry_nom}
                onChange={(e)=>{
                   
                   setData({
                       ...data,
                       civil_registry_nom:e.target.value
                   })
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
                <FormattedMessage id={"مصرف الوقف"} />
              </Label>
              <Input
                id="exampleSelect"
                name="select"
                type="select"
                style={{ borderColor: "#D4B265" }}
                value={data?.asset_bank}
                onChange={(e)=>{
                  setData({
                    ...data,
                    asset_bank:e.target.value
                  })
              
                }}
              >
                <option></option>
                <option value={"AhlyBank"} selected={data?.asset_bank}>البنك الاهلي </option>
                
              
              </Input>
            </FormGroup>
          </div>
        </div>
        <div className="col-md-4">
          <div>
            <FormGroup>
              <Label for="exampleSelect">أعيان الوقف</Label>
              <Input
                id="exampleSelect"
                name="select"
                type="select"
                style={{ borderColor: "#D4B265" }}
                onChange={(e)=>{
                    setData({
                      ...data,
                      asset_type:e.target.value
                    })
                }}
                
              >
                <option></option>

                <option value="اسهم" selected={data?.asset_type=="اسهم"}>اسهم</option>
                
              </Input>
            </FormGroup>
          </div>
        </div>
      </div>
      <div className="row required">

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
                <option selected>المملطة العربيه السعودية</option>
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
                style={{ borderColor: "#D4B265"}}
                  onChange={(e)=>{
                    setData({
                      ...data,
                      city:e.target.value
                    })
              
                }}
              >
                <option></option>
                <option selected={data?.city =="الرياض"} value={"الرياض"}>الرياض</option>
                <option value="جدة"  selected={data?.city =="جدة"}>جدة</option>
                <option value="القسيم" selected={data?.city =="القسيم"}>القسيم</option>
                <option value="مكة المكرمه" selected={data?.city =="مكة المكرمة"}>مكة المكرمه</option>
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
                onChange={(e)=>{
                   
                   setData({
                       ...data,
                       district:e.target.value
                   })
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
                onChange={(e)=>{
                   
                   setData({
                       ...data,
                       street:e.target.value
                   })
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
                onChange={(e)=>{
                   
                   setData({
                       ...data,
                       building_nom:e.target.value
                   })
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
                onChange={(e)=>{
                   
                   setData({
                       ...data,
                       post_nom:e.target.value
                   })
                }}
                
                style={{ borderColor: "#D4B265" }}
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
              name="صك الوقفية"
              setImage={(file) => {
                UploadFile(file,"first");
              }}
            />
        </div>
        <div className="col-md-4">
            <FileUpload 
           
              image={secondImage}
              name="الشهادة الضريبية"
              setImage={(file) => {
                UploadFile(file,"second");
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
                UploadFile(file,"third");
              }}
            />
        </div>
        <div className="col-md-4">
            <FileUpload 
             image={forthImage}
             name={"دورة عمل الوقف"}
             setImage={(file) => {
                 UploadFile(file,"forth");
               }}
            />
        </div>

      </div>
      <div className="row justify-content-center">
        <div className="col-md-4">
            <button className="btn btn-block" onClick={()=> ownerDetails ?  EditAssetsOwner(): AddAssetsOwner()} style={{background:"#005D5E",color:"#fff",fontSize:"20px"}}>
            حفظ
            </button>
        </div>

      </div>
    </>
  );
};
export default AccountInputs;