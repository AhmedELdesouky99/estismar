import React, { useState } from "react"
import { Button, FormGroup, Input, Label, Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap"
import Select from "react-select";
import axios from "axios"
import { NotificationManager } from 'react-notifications';
import { useSelector } from "react-redux";

const client = axios.create({
    baseURL: "https://admin.waqfnami.com/api/admin",
  });
const PullRequest =({isopen,setIsOpen,serviceRequestId,setOrder,inConsult})=>{
    const toggle=()=>setIsOpen(!isopen)
	const {user}=useSelector(state=>state.authUser.user)

    const [data, setData] = useState(
        {
          token : localStorage.getItem("token"),
          amount : "",
          bank_name : "",
          bank_account : ""
        }
      );
    const sendRequest=()=>{
      if(inConsult &&user.category =="admin"){

      }else if(user.category !="admin"){
        
const client2 = axios.create({
  baseURL: "https://admin.waqfnami.com/api/auth/",
});
client2.post(`withdraw-request`, {
            ...data,
        }).then(res=>{
            if(!res.data?.errors){
                console.log(res,"res")
                NotificationManager.success("تم  ارسال طلب السحب بنجاح")
               

              
            }else{
                NotificationManager.error(res?.data?.errors?.amount)
                
            }
        })
        return
      }
      if(user.category =="admin"){
         client
        .put(`service-request/${serviceRequestId}`, {
            ...data
        }).then(res=>{
            if(!res.errors){
                NotificationManager.success("تم تسجيل الملاحظة بنجاح")
                client.get(`/service-request/${serviceRequestId}`).then(res=>{
                  setOrder(res.data.data)
                setIsOpen(!isopen)

                   
                })
            }else{
                
            }
        })
      }else{
        const client2 = axios.create({
          baseURL: "https://admin.waqfnami.com/api/",
        });
         client2
        .put(`provider/request/${serviceRequestId}?token=${localStorage.getItem("token")}`, {
            ...data
        }).then(res=>{
            if(!res.errors){
                NotificationManager.success("تم تسجيل الملاحظة بنجاح")
                client.get(`/service-request/${serviceRequestId}`).then(res=>{
                  setOrder(res.data.data)
                setIsOpen(!isopen)

                   
                })
            }else{
                
            }
        })
      }
       
    }
    return(
        <Modal size="lg" id="modal-note" isOpen={isopen} toggle={toggle} style={{padding:"10px"}}>
        <ModalHeader toggle={toggle}>  طلب سحب الارباح </ModalHeader>
        <ModalBody >
      
            <div className="row">
      <div className="col-md-4">
      <FormGroup className="w-100">
                 <Label for="exampleSelect"> المبلغ</Label>
                 {
                   <Input
                   id="exampleSelect"
                   name="select"
                   type="text"
                   placeholder=' '
                   style={{ borderColor: "#7EA831" }}
                   onChange={(e)=>{
                    setData({
                        ...data,
                        amount:e.target.value
                    })
                   }}
                 
                 />
                
                 }
               </FormGroup>

      </div>
            </div>
            <div className="row">
            <div className="col-md-4">
      <FormGroup className="w-100">
                 <Label for="exampleSelect"> المصرف</Label>
                 {
                   <Input
                   id="exampleSelect"
                   name="select"
                   type="text"
                   placeholder=' اسم المصرف'
                   style={{ borderColor: "#7EA831" }}
                   onChange={(e)=>{
                    setData({
                        ...data,
                        bank_name:e.target.value
                    })
                   }}
                 
                 />
                
                 }
               </FormGroup>

            </div>
            <div className="col-md-4">
      <FormGroup className="w-100">
                 <Label for="exampleSelect"> رقم الحساب</Label>
                 {
                   <Input
                   id="exampleSelect"
                   name="select"
                   type="text"
                   placeholder=' NUM'
                   style={{ borderColor: "#7EA831" }}
                   onChange={(e)=>{
                    setData({
                        ...data,
                        bank_account:e.target.value
                    })
                   }}
                 
                 />
                
                 }
               </FormGroup>

            </div>
            </div>
           
        </ModalBody>
        <ModalFooter style={{justifyContent:"center"}}>
          <Button onClick={()=>sendRequest()} className="w-50" style={{color:"#fff",background:"#150941"}}>
          طلب سحب
          </Button>{' '}
          <Button className="w-50" onClick={()=>setIsOpen(!isopen)} style={{color:"#fff",background:"#7EA831"}} >
          الغاء
          </Button>{' '}
          {/* <Button color="secondary" onClick={toggle}>
            Cancel
          </Button> */}
        </ModalFooter>
      </Modal>
    )
}
export default PullRequest;