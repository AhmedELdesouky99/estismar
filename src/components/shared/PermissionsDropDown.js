import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { ButtonGroup, Button, CircularProgress } from "@material-ui/core";
import Select, { components } from "react-select";
import { FormattedMessage } from "react-intl";
import axios from "axios"
import { useSelector } from "react-redux";


const Menu = (props) => (
    
  <>
    <components.Menu {...props}>
      <div style={{ minHeight: "auto" }} className="d-flex flex-column">
        <div style={{ flex: "1 0 auto" }}>
          {props.selectProps.fetchingData ? (
            <span className="fetching">
              <CircularProgress />
            </span>
          ) : (
            <div>{props.children}</div>
          )}
        </div>
        <ButtonGroup fullWidth size="lg" dir="ltr" width="100%">
          <Button
            onClick={props.selectProps.nextPage}
            disabled={
              +props?.selectProps?.pagination?.currentPage ===
              +props?.selectProps?.pagination?.last_page
            }
          >
            <FormattedMessage id="next" />
          </Button>
          <Button
            onClick={props.selectProps.previousPage}
            disabled={+props?.selectProps?.pagination?.currentPage === 1}
          >
            <FormattedMessage id="previous" />
          </Button>
        </ButtonGroup>
      </div>
    </components.Menu>
  </>
);

Menu.propTypes = {
  selectProps: PropTypes.any,
  children: PropTypes.any,
};

const Option = (props) => (
  <>
    <components.Option {...props}>{props.children}</components.Option>
  </>
);

Option.propTypes = {
  children: PropTypes.any,
};

const PermissionsDropDown = ({
  fetchingData,
  onChange,
  selectedItem,
  permission,
  ...props
}) => {
    const [options,setOptions]=useState([])
    const [pagination,setPagintation]=useState()
    const [page,setPage]=useState(1)
    const { user } = useSelector((state) => state.authUser.user);
    const client = axios.create({
      baseURL: user.category =="admin" ? "https://admin.waqfnami.com/api/admin" :"https://admin.waqfnami.com/api" 
     
    });
    const incPage = () => setPage((pg) => pg + 1);
    const decPage = () => setPage((pg) => pg - 1);
    useEffect(()=>{
      if(user.category =="admin"){
        client.get("/roles?provider_group_permissions=true" ,{
          params:{
            page,
            limit:10
          }
        }).then((res)=>{
          const Alloptions =res.data.data.data.map(field=>(
            {
              label:field.display_name,
              value:field.id,
            }
          ))
          setOptions(Alloptions)
          setPagintation({
              last_page:res.data.data?.last_page,
              currentPage:res.data.data?.current_page
          })
        })

      }else if(user.category=="service-provider"){
        client.get("/provider/group-permissions" ,{
          params:{
            page,
            limit:10
          }
        }).then((res)=>{
          const Alloptions =res.data.data.data.map(field=>(
            {
              label:field.display_name,
              value:field.id,
            }
          ))
          setOptions(Alloptions)
          setPagintation({
              last_page:res.data.data?.last_page,
              currentPage:res.data.data?.current_page
          })
        })
      }
       
      
        
      },[page])
      console.log(permission,"permissionId")
  return (
    <div>
      <Select
        className="dropdown-select"
        options={options.filter((one)=>!permission?.includes(one.value))}
        pagination={pagination}
        components={{ Menu, Option }}
        placeholder={"اختر  صلاحية"}
      value={options.find((optn) => +optn.value == +selectedItem)}

        fetchingData={fetchingData}
        nextPage={() => incPage()}
        previousPage={() => decPage()}
        onChange={onChange}
        {...props}
      />
    </div>
  );
};

PermissionsDropDown.propTypes = {
  options: PropTypes.array,
  nextPage: PropTypes.func,
  previousPage: PropTypes.func,
  fetchingData: PropTypes.bool,
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
  pagination: PropTypes.object,
};

export default PermissionsDropDown;
