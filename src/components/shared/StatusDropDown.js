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
  if(props?.status?.length){
    const activeStatus = props?.status.find(one=>one.id == props.activationStatus)
    setActiveStatus(activeStatus)
  }
},[props])
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
"قيد الانتظار" ?  "#EEB656":  "",border:"none",width:"90px"}}>
        {activeStatus?.title}
      </DropdownToggle>
      <DropdownMenu>
        {
           props?.status?.map((onestatus)=>(
            <DropdownItem onClick={()=>changeStatus(onestatus)}>{onestatus.title}</DropdownItem>
           ))
        }     
      </DropdownMenu>
    </Dropdown>
  );
}
export default StatusDropDown;