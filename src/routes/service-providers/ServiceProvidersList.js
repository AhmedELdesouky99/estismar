/** Bookings List */
import React, { useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import PropTypes from "prop-types";
import { Typography, Tooltip } from "@material-ui/core";
import { Pagination } from "@material-ui/lab";
import useSetState from "Hooks/useSetState";
import RctCollapsibleCard from "Components/RctCollapsibleCard/RctCollapsibleCard";
import CustomTable from "Components/shared/CustomTable";
import { ServiceData } from "./ServiceData";
import StatusDropDown from "Components/shared/StatusDropDown"
import PerPage from "Components/shared/PerPage";

import axios from "axios"
import { useSelector } from "react-redux";
const client = axios.create({
  baseURL: "https://admin.waqfnami.com/api/admin" 
 
});
function ServiceProvidersList({ allservices, loading, setPage, limit, setLimit,status }) {
  const history = useHistory();
  const [services, setServices] = useSetState({
    collection: [],
    metadata: {},
  });
	const {user}=useSelector(state=>state.authUser.user)

  const { collection ,metadata} = services;
  useEffect(() => {
   
    setServices({
      collection: allservices?.data,
    
      metadata: {
        totalCount:allservices?.total,
        currentPage:allservices?.current_page
      }, 
      // allservices?.allservices?.metadata,
    });
  }, [allservices]);

  const handelDeleteBanner = (id) => {
    const filteredService= services.collection.filter(service=>service.user_id != id)
    setServices({
      collection:filteredService,
      metadata: allservices?.allservices?.metadata,
    })

    client.delete(`/service-provider/${id}`).then((res)=>console.log(res,"res")).catch((err)=>console.log(err,"err"))
    
  };

  const actions = ({ user_id }) => (
    <div className="d-flex align-items-center" style={{ gap: "5px" }}>
      {/* Redirects to Car details */}

      
        <Tooltip title={ "common.edit"} placement="top">
          <Link to={`service-provider/${user_id}`}>
            <button className="border-0" style={{background:"#23D381",color:"#fff"}}>
            <i className=" ti-eye m-1"></i>
            </button>
          </Link>
        </Tooltip>
      
    {
      user.category=="admin" ?   <Tooltip title={"common.delete"} placement="top">
      <button className="border-0" style={{background:"#CF4949",color:"#fff"}}>

        <i
          style={{ cursor: "pointer" }}
          className=" ti-trash m-1"
          onClick={() => handelDeleteBanner(user_id)}
        ></i>
        </button>
      </Tooltip>: null
    }
    </div>
  );
  const dropdownActions =(record)=>(
    <StatusDropDown  activationStatus={record.user.is_active} id={record.id} client={client} url={`service-provider/${record.user_id}`}/>
  )
  return (
    <Typography component="div" style={{ padding: "10px", marginTop: "20px" }}>
      <div>
        <RctCollapsibleCard fullBlock table>
          <CustomTable
            tableData={ServiceData}
            loading={loading}
            tableRecords={collection}
            actions={actions}
            actionsArgs={["user_id"]}
            dropdownActions={dropdownActions}
          />
        </RctCollapsibleCard>
      </div>
      <div className="d-flex justify-content-around">
        {metadata?.currentPage && (
          <>
            <Pagination
              count={Math.ceil(metadata?.totalCount / limit)}
              page={metadata?.currentPage}
              onChange={(e, value) => {
                setPage(value);
                history.replace({ hash: `page=${value}` });
              }}
            />
            <PerPage
              specialPagination={[10, 20, 40, 80, 100]}
              handlePerPageChange={(value) => setLimit(value)}
              perPage={limit}
              setPage={setPage}
            />
          </>
        )}
      </div>
    </Typography>
  );
}

ServiceProvidersList.propTypes = {
  setPage: PropTypes.func,
  setLimit: PropTypes.func,
  refetch: PropTypes.func,
  loading: PropTypes.bool,
  allservices: PropTypes.object,
  limit: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};

export default ServiceProvidersList;
