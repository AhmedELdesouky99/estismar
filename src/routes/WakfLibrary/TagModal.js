import React, { useEffect, useState } from "react"
import { Button, FormGroup, Input, Label, Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap"
import Select from "react-select";
import axios from "axios"
import { NotificationManager } from 'react-notifications';
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const client = axios.create({
    baseURL: "https://admin.waqfnami.com/api/admin",
  });
const TagModal =({isopen,setIsOpen,serviceRequestId,setOrder,inConsult,tagId})=>{
    const toggle=()=>setIsOpen(!isopen)
	const {user}=useSelector(state=>state.authUser.user)
    const history=useHistory()
    const [data, setData] = useState(
        {
          title : "عنوان اختباري",
          is_active:0,
        }
      );
const AddTag=()=>{
    client.post("/tags",{
        ...data,
      
      }).then(res=>{
        if(res.data.success){
        
          swal({
            title: "",
            text:" تم اضافه تصنيف بنجاح",
            icon: "success",
          });
        }
      }).then(()=>{
        setIsOpen(false)
        setTimeout(()=>{
          history.push("/app/posts")
        },2000)
      })
}
const editTag=()=>{
    client.put(`/tags/${tagId}`,{
        ...data,
      
      }).then(res=>{
        if(res.data.success){
        
          swal({
            title: "",
            text:" تم تعديل تصنيف بنجاح",
            icon: "success",
          });
        }
      }).then(()=>{
        setIsOpen(false)
        setTimeout(()=>{
          history.push("/app/posts")
        },2000)
      })
}
useEffect(()=>{
    if(tagId){
        client.get(`/tags/${tagId}`,{
      
        }).then((res)=>{
          console.log(res.data.data,"karem")
          setData({
            ...data,
          title:res.data.data.title,
          is_active:res.data.data.is_active

        })
        

         
        })   
    }
},[tagId])
    return(
        <Modal size="lg" id="modal-note" isOpen={isopen} toggle={toggle} style={{padding:"10px"}}>
        <ModalHeader toggle={toggle}>  أضف تصنيف جديد </ModalHeader>
        <ModalBody >
        <div className="row">
            <FormGroup className="w-100">
                 <Label for="exampleSelect">اسم التصنيف</Label>
                 {
                    <Input type="text" 
                    value={data?.title}
                    onChange={(e)=>{
                        setData({
                            ...data,
                            title:e.target.value
                        })
                    }}
                    />
                 }
               </FormGroup>
            </div>
            <div className="row">
            <FormGroup className="w-100">
                 <Label for="exampleSelect">الحالة</Label>
                 {
                   <Select
                   id="exampleSelect"
                   name="select"
                   type="text"
                   placeholder='الحاله'
                   value={
                    [
                        {label:"منشور",value:1},
                        {
                            label:"غير منشور",value:0
                        }
                      ].find((val)=>val.value== data.is_active)
                   }
                   style={{ borderColor: "#7EA831" }}
                  options={[
                    {label:"منشور",value:1},
                    {
                        label:"غير منشور",value:0
                    }
                  ]}
                  onChange={(sel)=>{
                    setData({
                        ...data,
                        is_active:sel.value
                    })
                  }}
                 
                 />
                
                 }
               </FormGroup>
            </div>
       
           
        </ModalBody>
        <ModalFooter style={{justifyContent:"center"}}>
          <Button className="w-50" onClick={()=> tagId ? editTag() :AddTag()} style={{color:"#fff",background:"#7EA831"}}>
          حفظ
          </Button>{' '}
          <Button className="w-50" onClick={()=>setIsOpen(!isopen)} style={{color:"#fff",background:"#150941"}} >
          الغاء
          </Button>{' '}
          {/* <Button color="secondary" onClick={toggle}>
            Cancel
          </Button> */}
        </ModalFooter>
      </Modal>
    )
}
export default TagModal;