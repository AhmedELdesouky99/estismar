/** Branches Page */
import React, { useEffect, useState } from "react";
import { useLocation, useHistory } from "react-router-dom";
import { Helmet } from "react-helmet";
// page title bar
import PageTitleBar from "Components/PageTitleBar/PageTitleBar";
// intl messages
import IntlMessages from "Util/IntlMessages";

import RolesList from "./RolesList";
import { RctCard, RctCardContent } from "Components/RctCard";
import CustomCard from "Components/shared/CustomCard";
import { FiltersAndSearches } from "Components/FiltersAndSearches/FiltersAndSearches";
import { FormattedMessage } from "react-intl";

import { Button } from "reactstrap";
import axios from "axios"

const client = axios.create({
  baseURL: "https://estithmar.arabia-it.net/api/admin" 
 
});
export default function Roles() {
  const location = useLocation();
  const history = useHistory();
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);
  const [Roles,setRoles]=useState()
  const [status,setStatus]=useState()
  const [pageSelect,setPageSelect]=useState(1)
  const [fields,setFields]=useState([])
  const [query, setQuery] = useState({});

  const [meta,setMeta]=useState()

  useEffect(()=>{
    client.get(`/roles`,{
      params:{
        limit,
        page,
        name:query.name ? query.name : undefined
        
      }
    }).then(res=>setRoles(res.data.data))
},[page,limit,query])

  return (
    <div className="clients-wrapper">
      <Helmet>
        <title>{"sidebar.roles"}</title>
      </Helmet>
      <PageTitleBar
        title={<IntlMessages id="sidebar.roles" />}
        match={location}
        enableBreadCrumb
      />
      <RctCard>
        <RctCardContent>
        <div className="row justify-content-between">
          <div className="col-sm-12 col-md-6 mt-1">
          الصلاحيات 
            </div>
  
     
                  <div className="col-sm-12 col-md-3 mt-1">
            <Button
            variant="contained"
            color="primary"
            style={{background:"#005D5E",fontWeight:"bold",fontSize:"20px"}}
            className="mx-smt-15 btn  mr-1 ml-1 border-0"
            onClick={()=>history.push("/app/users/roles/add-role")}
          
          >
            <span className="mr-1 ml-1">
              <FormattedMessage id={"إضافة صلاحية جديدة"} />
            </span>
          </Button>
              
            </div>
          </div>
          <div className="row">
                  <FiltersAndSearches
                    make="make"
                    submitbtnid="search.filter"
                    fields={[{ type: "search", name: "name",label:"الاسم",placeholder:"اسم الصلاحية"  }]}
                    role={true}
                    query={query}
                    setPage={setPage}
                    setQuery={setQuery}
                    setPageSelect={setPageSelect}
                    options={fields}
                    metadata={meta}
                  />
                </div>
        </RctCardContent>
      </RctCard>
      <RolesList
        loading={false}
        setPage={setPage}
        setLimit={setLimit}
        limit={limit}
        allRoles={Roles}
      />
    </div>
  );
}
