import React, { useEffect, useState, useCallback, useRef } from "react";
import { useLocation, useHistory } from "react-router-dom";
import { Helmet } from "react-helmet";
// // page title bar
import PageTitleBar from "Components/PageTitleBar/PageTitleBar";
// // intl messages
import IntlMessages from "Util/IntlMessages";

import { RctCard, RctCardContent } from "Components/RctCard";
import CustomCard from "Components/shared/CustomCard";

import { FiltersAndSearches } from "Components/FiltersAndSearches/FiltersAndSearches";
import axios from "axios";
import { Button } from "reactstrap";
import { FormattedMessage } from "react-intl";
import { FormGroup, Label, Input } from "reactstrap";
// import ImageUpload from "./ImageUpload";
// import FileUpload from "./FileUploader";
import { useParams } from "react-router-dom";
import Swal from "sweetalert";
import Select, { components } from "react-select";
import { Editor } from "@tinymce/tinymce-react";
import ImageUpload from "../../components/shared/ImageUpload";
import { FormControlLabel, Switch } from "@material-ui/core";
const client = axios.create({
    baseURL: "https://estithmar.arabia-it.net/api/admin",
  });
const AddEditStaticPage = () => {
  const editorRef = useRef(null);
  const [EnImage, setEnImage] = useState();
  const [loader, setLoader] = useState(false);
  const [files,setFiles]=useState([])
  const {id} =useParams()
const [categories,setCategories]=useState()
const history=useHistory()
const [data,setData]=useState({
    title:"",
    content:"",
    page_path:"",
    category:"posts",
    is_main_page:0,
    is_invoice_page:0,
    is_published:0,
})
const [errors,setErrors]=useState()
  const log = () => {
    if (editorRef.current) {
      console.log(editorRef.current.getContent(), "kako");
    }
  };
 

  const AddPost=()=>{
    client.post("/static-page",{
        ...data,
        content:editorRef.current.getContent()
      }).then(res=>{
        if(res.data.success){
        
          swal({
            title: "",
            text:" تم اضافه صفحة ثابتة  بنجاح",
            icon: "success",
          });
          setTimeout(()=>{
            history.push("/app/staticpages")
          },2000)
        }else{
          console.log(res.data.errors,"errors")
          setErrors(res.data.errors)
        }
      }).catch((err)=>{
        console.log(err)
      })
  }

  useEffect(()=>{
        if(id){
            client.get(`/static-page/${id}`,{
      
            }).then((res)=>{
              console.log(res.data.data,"karem")
              setData({
                ...data,
                content:res.data.data.content,
                is_main_page:res.data.data.is_main_page,
                is_invoice_page:res.data.data.is_invoice_page,
                title:res.data.data.title,
                page_path:res.data.data.page_path,
                is_published:res.data.data.is_published

            })
     

             
            })   
        }
  },[id])
  const EditPost=()=>{
    console.log(editorRef.current)
    client.put(`/static-page/${id}`,{
        ...data,
       
        content:editorRef?.current?.getContent() || editorRef.current
      }).then(res=>{
        if(res.data.success){
        
          swal({
            title: "",
            text:" تم اضافه الصفحة  بنجاح",
            icon: "success",
          });
        }
      }).then(()=>{
        setTimeout(()=>{
          history.push("/app/staticpages")
        },2000)
      })
  }
  return (
    <div className="clients-wrapper">
      <Helmet>
        <title>{"صفحات الثابتة"}</title>
      </Helmet>
      <PageTitleBar
        title={<IntlMessages id="الصفحات القابتة" />}
        match={location}
        enableBreadCrumb
        lastElement={data?.title}
      />
      <h3 className="title" style={{ position: "relative" }}>
      انشاء صفحة
      </h3>
      <div className="row">
        <div className="col-md-6">
          <FormGroup>
            <Label for="exampleEmail">
              <FormattedMessage id={" عنوان الصفحة"} />
            </Label>
            <Input
              style={{ borderColor: "#7EA831" }}
              placeholder={" عنوان الصفحة"}
              type="text"
              value={data.title}
              onChange={(e)=>{
                setData({
                    ...data,
                    title:e.target.value
                })
              }}
            />
          </FormGroup>
          
          
      

        </div>
        <div className="col-md-3">
        <FormControlLabel
        control={
          <Switch
          checked={data.is_main_page}

          onChange={(e)=>{
            setData({
              ...data,
              is_main_page:e.target.checked
          })
          }}
            name="checkedB"
            color="primary"
          />
        }
        label="القائمة الرئيسية"
      />
        </div>
        <div className="col-md-3">
        <FormControlLabel
        control={
          <Switch 
          onChange={(e)=>{
            setData({
              ...data,
              is_main_page:e.target.checked
          })
          }}
            name="checkedB"
            color="primary"
          />
        }
        label=" قائمة الفوتر"
      />
        </div>
        <div className="col-md-10 mt-5">
        <>
            <Editor
            style={{zIndex:0}}
              onInit={(evt, editor) => (editorRef.current = editor)}
              initialValue={data?.content}
              init={{
                height: 500,
                menubar: false,
                plugins: [
                  "a11ychecker",
                  "advlist",
                  "advcode",
                  "advtable",
                  "autolink",
                  "checklist",
                  "export",
                  "lists",
                  "link",
                  "image",
                  "charmap",
                  "preview",
                  "anchor",
                  "searchreplace",
                  "visualblocks",
                  "powerpaste",
                  "fullscreen",
                  "formatpainter",
                  "insertdatetime",
                  "media",
                  "table",
                  "help",
                  "wordcount",
                ],
                toolbar:
                  "undo redo | casechange blocks | bold italic backcolor | " +
                  "alignleft aligncenter alignright alignjustify | " +
                  "bullist numlist checklist outdent indent | removeformat | a11ycheck code table help",
                content_style:
                  "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
              }}
            />
            {/* <button onClick={log}>Log editor content</button> */}
          </>
        
       
        </div>
        <div className="col-md-12 mt-4">
        <div className="row ">
            <div className="col-md-3">
              <Label for="exampleEmail">
                <FormattedMessage id={"الحالة"} />
              </Label>
              <Select
                placeholder=""
                options={[
                  {
                    label: "منشور",
                    value: "1",
                  },
                  {
                    label: "غير منشور",
                    value: "0",
                  },
                ]}
                value={
                    [
                        {
                          label: "منشور",
                          value: "1",
                        },
                        {
                          label: "غير منشور",
                          value: "0",
                        },
                      ].find((status)=>status.value == data.is_published )
                   }
                onChange={(sel) => {
                  console.log(sel, "sel");
                  setData({
                    ...data,
                    is_published:sel.value
                  })
                }}
              />
            </div>
            <div className="col-md-3">
              <Label for="exampleEmail">
                <FormattedMessage id={"رابط الصفحة"} />
              </Label>
              <Input
              style={{ borderColor: "#7EA831",textAlign:"left" }}
              placeholder={"رابط الصفحة"}
              type="text"
              value={data.page_path}
              onChange={(e)=>{
                setData({
                    ...data,
                    page_path:e.target.value
                })
              }}
            />
           
            </div>
            <div className="col-md-1" style={{alignSelf:"end"}}>
            <span>
            https://www.waqfnami.com
            </span>
            </div>
          </div>
          <div className='col-md-5 col-sm-12 mt-2'> 
                  { 
                  errors ? 
                    Object.keys(errors)?.map((key,value)=>(
                      <div className=''> 
                        {errors[key]?.map(err=>(
                        <div className='alert alert-danger'>
                           {err}
                        </div>
                        ))
                        }
                      </div>
                    ))
                    : null
                  }
               </div>
          <div className="row mt-4 mb-3 justify-content-center">
                <div className="col-md-3">
                <button  onClick={()=> id ? EditPost(): AddPost() } className="btn btn-block"  style={{background:"#7EA831",color:"#fff",fontSize:"20px"}}>
                      حفظ
                </button>
              
                </div>
                <div className="col-md-3">
                <button onClick={()=>history.push("/app/staticpages")} className="btn btn-block"  style={{background:"#150941",color:"#fff",fontSize:"20px"}}>
                الغاء
                </button>
                </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default AddEditStaticPage;
