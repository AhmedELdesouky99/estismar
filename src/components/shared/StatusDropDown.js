import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import axios from "axios";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap';
import { profileStatus,orderStatus,inborderStatusForProvider } from './constants';

function StatusDropDown(props) {
  // status={status} activationStatus
  const [activeStatus,setActiveStatus]=useState()
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const toggle = () => setDropdownOpen((prevState) => !prevState);
  const { user } = useSelector((state) => state.authUser);
const {id:orderId} =useParams()
useEffect(()=>{
  if(props.activationStatus !=undefined){
    const activeStatus =props.inbordertable && props.forServiceProvider ? inborderStatusForProvider.find(one=>one.id == props.activationStatus) : props.inorder ?  orderStatus.find(one=>one.id == props.activationStatus): profileStatus.find(one=>one.id == props.activationStatus)
    setActiveStatus(activeStatus)
  }
},[props.activationStatus])
const changeStatus=(status)=>{
  setActiveStatus(status)
  if(props.inbordertable){
    
    const clientUrl=
    axios.create({
      baseURL: "https://estithmar.arabia-it.net/api/provider/",
    });

    clientUrl.put(`/request/${orderId}`,{
      provider_status:status.id,
      token:localStorage.getItem("token"),
      request_deliveries_id : props.borderId,

    }).then(res=>console.log(res,"res active"))
    return
  }
  if(props.inorder){
    props.client.put(`${props.url}`,{
      status:status.id,
      // token:user.access_token
    }).then(res=>console.log(res,"res active"))
  }else{
    props.client.put(`${props.url}`,{
      type : "activate",
      activate_id:status.id,
      token:user.access_token
    }).then(res=>console.log(res,"res active"))
  }
  
}
  return (
    <Dropdown isOpen={dropdownOpen} toggle={toggle} {...props}>
      <DropdownToggle disabled={((user.user.category == "admin" &&props.forService ) && !props.inbordertable && (!props.forService && user.user.category !="service=provider")) || props.notAllowed} caret size="md" style={{background:activeStatus?.color,border:"none",width:"fit-content"}}>
        {activeStatus?.name}
      </DropdownToggle>
      <DropdownMenu>
        {props.inbordertable && props.forServiceProvider  ? 
        
        inborderStatusForProvider.map((onestatus)=>(
          <DropdownItem onClick={()=>changeStatus(onestatus)}>{onestatus.name}</DropdownItem>
         ))
        : props.inorder ? 
        orderStatus.map((onestatus)=>(
          <DropdownItem onClick={()=>changeStatus(onestatus)}>{onestatus.name}</DropdownItem>
         ))
        
        :
         profileStatus.map((onestatus)=>(
            <DropdownItem onClick={()=>changeStatus(onestatus)}>{onestatus.name}</DropdownItem>
           ))
        }     
      </DropdownMenu>
    </Dropdown>
  );
}
export default StatusDropDown;