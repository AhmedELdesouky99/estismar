import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap';

function StatusDropDown(props) {
  // status={status} activationStatus
  const [activeStatus,setActiveStatus]=useState()
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const toggle = () => setDropdownOpen((prevState) => !prevState);
  const { user } = useSelector((state) => state.authUser);

useEffect(()=>{
  if(props.activationStatus !=undefined){
    const activeStatus =  [
      {name:"مفعل",id:1},
      {name:"قيد الانتظار",id:0},
      {name:"مرفوض",id:-1},
  ].find(one=>one.id == props.activationStatus)
    setActiveStatus(activeStatus)
  }
},[props.activationStatus])
const changeStatus=(status)=>{
  setActiveStatus(status)
  props.client.put(`${props.url}`,{
    type : "activate",
    activate_id:status.id,
    token:user.access_token
  }).then(res=>console.log(res,"res active"))
}
console.log(user.user.category,"user")
  return (
    <Dropdown isOpen={dropdownOpen} toggle={toggle} {...props}>
      <DropdownToggle disabled={user.user.category != "admin"} caret size="md" style={{background:activeStatus?.title == 
"قيد الانتظار" ?  "#EEB656":  "",border:"none",width:"fit-content"}}>
        {activeStatus?.name}
      </DropdownToggle>
      <DropdownMenu>
        {
           [
            {name:"مفعل",id:1},
            {name:"قيد الانتظار",id:0},
            {name:"مرفوض",id:-1},
        ].map((onestatus)=>(
            <DropdownItem onClick={()=>changeStatus(onestatus)}>{onestatus.name}</DropdownItem>
           ))
        }     
      </DropdownMenu>
    </Dropdown>
  );
}
export default StatusDropDown;