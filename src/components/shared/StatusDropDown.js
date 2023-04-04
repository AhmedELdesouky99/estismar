import React, { useEffect, useState } from 'react';
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
    activate_id:status.id
  }).then(res=>console.log(res,"res active"))
}
  return (
    <Dropdown isOpen={dropdownOpen} toggle={toggle} {...props}>
      <DropdownToggle caret size="md" style={{background:activeStatus?.title == 
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