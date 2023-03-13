/** Branches Page */
import React, { useEffect, useState } from "react";
import { useLocation, useHistory } from "react-router-dom";
import { Helmet } from "react-helmet";
// page title bar
import PageTitleBar from "Components/PageTitleBar/PageTitleBar";
// intl messages
import IntlMessages from "Util/IntlMessages";

import UsersList from "./UsersList";
import { RctCard, RctCardContent } from "Components/RctCard";
import CustomCard from "Components/shared/CustomCard";
import { FiltersAndSearches } from "Components/FiltersAndSearches/FiltersAndSearches";
import { FormattedMessage } from "react-intl";

import { Button } from "reactstrap";
import axios from "axios"

const client = axios.create({
  baseURL: "https://estithmar.arabia-it.net/api/admin" 
 
});
export default function Users() {
  const location = useLocation();
  const history = useHistory();
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);
  const [Users,setUsers]=useState()
  const [status,setStatus]=useState()
  const [pageSelect,setPageSelect]=useState(1)
  const [fields,setFields]=useState([])
  const [query, setQuery] = useState({});

  const [meta,setMeta]=useState()

  useEffect(()=>{
    client.get(`/user`,{
      params:{
        limit,
        page,
        name:query.name ? query.name : undefined,
        status: query.status ? query.status : undefined,
        field_id: query.field_id ? query.field_id :undefined
      }
    }).then(res=>setUsers(res.data.data))
},[page,limit,query])

  return (
    <div className="clients-wrapper">
      <Helmet>
        <title>{"sidebar.service-provider"}</title>
      </Helmet>
      <PageTitleBar
        title={<IntlMessages id="sidebar.service-provider" />}
        match={location}
        enableBreadCrumb

      />
      <div className="row">
        <div className="col-lg-3 col-md-3">
          <CustomCard color="#00A8FF1A" name={"مزودي الخدمات"}/>
        </div>
        <div className="col-lg-3 col-md-3">
          <CustomCard color="#23D3811A" name={"مكتملين"}/>
        </div>
        <div className="col-lg-3 col-md-3">
          <CustomCard color="#EEB6561A" name={"قائمة انتظار"}/>
        </div>
        <div className="col-lg-3 col-md-3">
          <CustomCard color="#FF04041A" name={"مرفوض"} />
        </div>
      
      </div>
      <RctCard>
        <RctCardContent>
        <div className="row">
          <div className="col-sm-12 col-md-6 mt-1">
          إدارة المستخدمين
            </div>
  
            <div className="col-md-3">
                    <Button
                      variant="contained"
                      color="primary"
                      style={{
                        background: "none",
                        fontWeight: "bold",
                        fontSize: "20px",
                        color: "#D4B265",
                        border: "1px solid #D4B265 ",
                      }}
                      className="mx-smt-15 btnAdd  mr-1 ml-1 border-0"
                      onClick={() => history.push("/app/users/roles")}
                    >
                      <span className="mr-1 ml-1">
                        <FormattedMessage id={"الصلاحيات"} />
                      </span>
                    </Button>
                  </div>
                  <div className="col-sm-12 col-md-3 mt-1">
            <Button
            variant="contained"
            color="primary"
            style={{background:"#005D5E",fontWeight:"bold",fontSize:"20px"}}
            className="mx-smt-15 btn  mr-1 ml-1 border-0"
            onClick={()=>history.push("/app/users/add-user")}
          
          >
            <span className="mr-1 ml-1">
              <FormattedMessage id={"مستخدم جديد"} />
            </span>
          </Button>
              
            </div>
          </div>
          <div className="row">
                  <FiltersAndSearches
                    make="make"
                    submitbtnid="search.filter"
                    fields={[{ type: "search", name: "name",label:"الاسم",placeholder:"اسم المستخدم"  }]}
                    filters={["parent","status"]}
                
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
      <UsersList
        loading={false}
        setPage={setPage}
        setLimit={setLimit}
        limit={limit}
        allUsers={Users}
      />
    </div>
  );
}
