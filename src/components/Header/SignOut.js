import React, { useEffect, useState } from 'react';
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap';
import { Scrollbars } from 'react-custom-scrollbars';
import { useDispatch, useSelector } from "react-redux";
import {
   LogOut
} from 'Actions';
function SignOut(props) {
  // status={status} activationStatus
  const [activeStatus,setActiveStatus]=useState()
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const toggle = () => setDropdownOpen((prevState) => !prevState);
  const {user}=useSelector(state=>state.authUser.user)
 const dispatch =useDispatch()
const handelClick=()=>{
dispatch(LogOut())
}
  return (
   <Dropdown nav className="list-inline-item language-dropdown" isOpen={dropdownOpen} toggle={toggle} style={{marginLeft:"10px"}}>
   <DropdownToggle caret nav className="header-icon language-icon" style={{width:"fit-content",border:"none",boxShadow:"none",color:"#7EA831"}}>
   {/* <Tooltip title="Languages" placement="bottom"> */}
						<img src={require(`Assets/img/ic-user.png`)} className="mr-10" width="21" height="21" alt="lang-icon" />
					{/* </Tooltip> */}
      <span style={{color:"#150941"}}>
      {user.name}
      </span>
   </DropdownToggle>
   <DropdownMenu>
      <div className="dropdown-content">
         <div className="dropdown-top d-flex justify-content-center rounded-top ">
            <span className=" font-weight-bold" style={{cursor:"pointer"}} onClick={()=>handelClick()}>تسجيل خروج </span>
            {/* <Badge color="warning">3 NEW</Badge> */}
         </div>
        
      </div>
   </DropdownMenu>
</Dropdown>
  );
}
export default SignOut;