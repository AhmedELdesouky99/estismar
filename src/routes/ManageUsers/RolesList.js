/** Bookings List */
import React, { useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import PropTypes from "prop-types";
import { Typography, Tooltip } from "@material-ui/core";
import { Pagination } from "@material-ui/lab";
import useSetState from "Hooks/useSetState";
import RctCollapsibleCard from "Components/RctCollapsibleCard/RctCollapsibleCard";
import CustomTable from "Components/shared/CustomTable";
import { RoleData } from "./RoleData";
import StatusDropDown from "Components/shared/StatusDropDown"
import PerPage from "Components/shared/PerPage";

import axios from "axios"
const client = axios.create({
  baseURL: "https://admin.waqfnami.com/api/admin" 
 
});
function RolesList({ allRoles, loading, setPage, limit, setLimit,status }) {
  const history = useHistory();
  const [Roles, setRoles] = useSetState({
    collection: [],
    metadata: {},
  });
  const { collection ,metadata} = Roles;
  useEffect(() => {
   
    setRoles({
      collection: allRoles?.data,
    
      metadata: {
        totalCount:allRoles?.total,
        currentPage:allRoles?.current_page
      }, 
      // allRoles?.allRoles?.metadata,
    });
  }, [allRoles]);

  const handelDeleteBanner = (id) => {
    const filteredService= Roles.collection.filter(service=>service.id != id)
    setRoles({
      collection:filteredService,
      metadata: allRoles?.allRoles?.metadata,
    })

    client.delete(`/service-provider/${id}`).then((res)=>console.log(res,"res")).catch((err)=>console.log(err,"err"))
    
  };

  const actions = ({ id }) => (
    <div className="d-flex align-items-center" style={{ gap: "5px" }}>
      {/* Redirects to Car details */}

      
        <Tooltip title={ "common.edit"} placement="top">
          <Link to={`roles/${id}`}>
            <button className="border-0" style={{background:"#23D381",color:"#fff"}}>
            <i className=" ti-eye m-1"></i>
            </button>
          </Link>
        </Tooltip>
      
      <Tooltip title={"common.delete"} placement="top">
      <button className="border-0" style={{background:"#CF4949",color:"#fff"}}>

        <i
          style={{ cursor: "pointer" }}
          className=" ti-trash m-1"
          onClick={() => handelDeleteBanner(id)}
        ></i>
        </button>
      </Tooltip>
    </div>
  );
  const dropdownActions =(record)=>(
    <StatusDropDown  activationStatus={record.is_active} id={record.id} client={client} url={`user/${record.id}`}/>
  )
  return (
    <Typography component="div" style={{ padding: "10px", marginTop: "20px" }}>
      <div>
        <RctCollapsibleCard fullBlock table>
          <CustomTable
            tableData={RoleData}
            loading={loading}
            tableRecords={collection}
            actions={actions}
            actionsArgs={["id"]}
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

RolesList.propTypes = {
  setPage: PropTypes.func,
  setLimit: PropTypes.func,
  refetch: PropTypes.func,
  loading: PropTypes.bool,
  allRoles: PropTypes.object,
  limit: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};

export default RolesList;
