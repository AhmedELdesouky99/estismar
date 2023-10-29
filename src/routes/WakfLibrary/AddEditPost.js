import React, { useEffect, useState, useCallback, useRef } from "react";
import { useLocation, useHistory } from "react-router-dom";
import { Helmet } from "react-helmet";
// // page title bar
import PageTitleBar from "Components/PageTitleBar/PageTitleBar";
// // intl messages
import IntlMessages from "Util/IntlMessages";

import PostsList from "./postsList";
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
const client = axios.create({
    baseURL: "https://admin.waqfnami.com/api/admin",
  });
const AddEditPost = () => {
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
    category:"posts",
    files_ids:[],
    order:"",
    tags:[],
    is_main_page:0,
    is_active:0

})
  const log = () => {
    if (editorRef.current) {
      console.log(editorRef.current.getContent(), "kako");
    }
  };
  const uploadEnimage = (file) => {
    setLoader(true);
    const formdata = new FormData();
    formdata.append("title", "Main Image");
    formdata.append("store_file", true);
    formdata.append("file", file);
    client
      .post("/posts", formdata, {
        headers: {
          "Content-Type": "multipart/form-data; ",
        },
      })
      .then((res) => {
        setLoader(false);
        setFiles([res.data.data.id]);
        setEnImage("https://estithmar.arabia-it.net" + res.data.data.path);
      });
  };

  const AddPost=()=>{
    client.post("/posts",{
        ...data,
        files_ids:files,
        content:editorRef.current.getContent()
      }).then(res=>{
        if(res.data.success){
        
          swal({
            title: "",
            text:" تم اضافه مقالة بنجاح",
            icon: "success",
          });
        }
      }).then(()=>{
        setTimeout(()=>{
          history.push("/app/posts")
        },2000)
      })
  }
  useEffect(()=>{
    client.get("/tags",{
      
      }).then((res)=>{
        console.log(res.data.data.data,"res")
        setCategories(res.data.data.data.map((category)=>(
            {
                label:category.title,
                value:category.id
            }
        )))
      })
  },[])
  useEffect(()=>{
        if(id){
            client.get(`/posts/${id}`,{
      
            }).then((res)=>{
              console.log(res.data.data,"karem")
              setData({
                ...data,
                content:res.data.data.content,
                is_active:res.data.data.is_active,
                title:res.data.data.title,
                tags:res.data.data.tags.map((tag)=>tag.id)  ,
                order: res.data.data.order,

            })
            setFiles([res.data.data.files[0].id])
        setEnImage("https://estithmar.arabia-it.net" + res.data.data.files[0].path);

             
            })   
        }
  },[id])
  const EditPost=()=>{
    console.log(editorRef.current)
    client.put(`/posts/${id}`,{
        ...data,
        files_ids:files,
        content:editorRef?.current?.getContent() || editorRef.current
      }).then(res=>{
        if(res.data.success){
        
          swal({
            title: "",
            text:" تم اضافه مقالة بنجاح",
            icon: "success",
          });
        }
      }).then(()=>{
        setTimeout(()=>{
          history.push("/app/posts")
        },2000)
      })
  }
  return (
    <div className="clients-wrapper">
      <Helmet>
        <title>{"الأوقاف"}</title>
      </Helmet>
      <PageTitleBar
        title={<IntlMessages id="الأوقاف" />}
        match={location}
        enableBreadCrumb
        lastElement={data?.title}
      />
      <h3 className="title" style={{ position: "relative" }}>
        إنشاء المقالة
      </h3>
      <div className="row">
        <div className="col-md-6">
          <FormGroup>
            <Label for="exampleEmail">
              <FormattedMessage id={" عنوان المقالة"} />
            </Label>
            <Input
              style={{ borderColor: "#7EA831" }}
              placeholder={"عنوان المقالة"}
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
          <FormGroup>
            <Label for="exampleEmail">
              <FormattedMessage id={"التصنيف"} />
            </Label>
            <Select
                placeholder=""
              options={categories}
              value={categories?.filter((category)=>data?.tags?.includes(category.value))}
              onChange={(sel) => {
                console.log(sel, "sel");
                setData({
                    ...data,
                    tags:sel.map((one)=>one.value)
                })
              }}
              isMulti
            />
          </FormGroup>
          <div className="row">
            <div className="col-md-4">
              <FormGroup>
                <Label for="exampleEmail">
                  <FormattedMessage id={"الترتيب"} />
                </Label>
                <Input
                  style={{ borderColor: "#7EA831" }}
                  placeholder={"الترتيب"}
                  type="text"
                  value={data.order}
                  onChange={(e)=>{
                    setData({
                        ...data,
                        order:e.target.value
                    })
                  }}
                />
              </FormGroup>
            </div>
            <div className="col-md-4">
              <FormGroup>
                <Label for="exampleEmail">
                  <FormattedMessage id={"بواسطة"} />
                </Label>
                <Input
                  style={{ borderColor: "#7EA831" }}
                  placeholder={"بواسطة"}
                  type="text"
                />
              </FormGroup>
            </div>
          </div>
         
      

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
        
          <div className="mt-2 mb-2">
          <ImageUpload
              loader={loader}
              image={EnImage}
              setImage={(file) => {
                uploadEnimage(file);
              }}
            />
          </div>
        </div>
        <div className="col-md-12">
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
                      ].find((status)=>status.value == data.is_active )
                   }
                onChange={(sel) => {
                  console.log(sel, "sel");
                  setData({
                    ...data,
                    is_active:sel.value
                  })
                }}
              />
            </div>
            <div className="col-md-3">
              <Label for="exampleEmail">
                <FormattedMessage id={"الصفحة الرئيسية"} />
              </Label>
              <Select
                placeholder=""
                value={
                    [
                        {
                          label: "نعم",
                          value: "1",
                        },
                        {
                          label: "لا",
                          value: "0",
                        },
                      ].find((main)=>main.value == data.is_main_page)
                    }
                options={[
                  {
                    label: "نعم",
                    value: "1",
                  },
                  {
                    label: "لا",
                    value: "0",
                  },
                ]}
                onChange={(sel) => {
                  console.log(sel, "sel");
                  setData({
                    ...data,
                    is_main_page:sel.value
                  })
                }}
              />
            </div>
          </div>
          <div className="row mt-4 mb-3 justify-content-center">
                <div className="col-md-3">
                <button  onClick={()=> id ? EditPost(): AddPost() } className="btn btn-block"  style={{background:"#7EA831",color:"#fff",fontSize:"20px"}}>
                      حفظ
                </button>
              
                </div>
                <div className="col-md-3">
                <button onClick={()=>history.push("/app/posts")} className="btn btn-block"  style={{background:"#150941",color:"#fff",fontSize:"20px"}}>
                الغاء
                </button>
                </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default AddEditPost;
