/** Bookings List */
import React, { useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import PropTypes from "prop-types";
import { Typography, Tooltip } from "@material-ui/core";
import { Pagination } from "@material-ui/lab";
import useSetState from "Hooks/useSetState";
import RctCollapsibleCard from "Components/RctCollapsibleCard/RctCollapsibleCard";
import CustomTable from "Components/shared/CustomTable";
import { UserData } from "./UserData";
import StatusDropDown from "Components/shared/StatusDropDown"
import PerPage from "Components/shared/PerPage";

import axios from "axios"
const client = axios.create({
  baseURL: "https://estithmar.arabia-it.net/api/admin" 
 
});
function UsersList({ allUsers, loading, setPage, limit, setLimit,status }) {
  const history = useHistory();
  const [Users, setUsers] = useSetState({
    collection: [],
    metadata: {},
  });
  const { collection ,metadata} = Users;
  useEffect(() => {
   
    setUsers({
      collection: allUsers?.data,
    
      metadata: {
        totalCount:allUsers?.total,
        currentPage:allUsers?.current_page
      }, 
      // allUsers?.allUsers?.metadata,
    });
  }, [allUsers]);

  const handelDeleteBanner = (id) => {
    const filteredService= Users.collection.filter(service=>service.id != id)
    setUsers({
      collection:filteredService,
      metadata: allUsers?.allUsers?.metadata,
    })

    client.delete(`/service-provider/${id}`).then((res)=>console.log(res,"res")).catch((err)=>console.log(err,"err"))
    
  };

  const actions = ({ id }) => (
    <div className="d-flex align-items-center" style={{ gap: "5px" }}>
      {/* Redirects to Car details */}

      
        <Tooltip title={ "common.edit"} placement="top">
          <Link to={`users/${id}`}>
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
            tableData={UserData}
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

UsersList.propTypes = {
  setPage: PropTypes.func,
  setLimit: PropTypes.func,
  refetch: PropTypes.func,
  loading: PropTypes.bool,
  allUsers: PropTypes.object,
  limit: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};

export default UsersList;
