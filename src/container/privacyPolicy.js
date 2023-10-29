import React, { useEffect, useState } from "react"
import { Button, FormGroup, Input, Label, Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap"
import Select from "react-select";
import axios from "axios"
import { NotificationManager } from 'react-notifications';
import { useSelector } from "react-redux";

const client = axios.create({
    baseURL: "https://admin.waqfnami.com/api",
  });
const PrivacyPolicy =({isopen,setIsOpen,serviceRequestId,setOrder,inConsult})=>{
    const toggle=()=>setIsOpen(!isopen)
    const[PageContent,setPageContent]=useState()
useEffect(()=>{
    client.get(`/static-pages?page_path=privacy-policy`).then(data=>setPageContent(data.data))
},[])
    
   
    return(
        <Modal size="lg" id="modal-note" isOpen={isopen} toggle={toggle} style={{padding:"10px",direction:"rtl"}}>
        <ModalHeader toggle={toggle}>  {PageContent?.data?.title} </ModalHeader>
        <ModalBody >
      
         
          <div
          dangerouslySetInnerHTML={{__html: PageContent?.data?.content}}
          style={{textAlign:"justify"}}
          />
           
        </ModalBody>
        <ModalFooter style={{justifyContent:"center"}}>
          
          <Button className="w-50" onClick={()=>setIsOpen(!isopen)} style={{color:"#fff",background:"#150941"}} >
          اغلاق
          </Button>{' '}
          {/* <Button color="secondary" onClick={toggle}>
            Cancel
          </Button> */}
        </ModalFooter>
      </Modal>
    )
}
export default PrivacyPolicy;