/** Branches Page */
import React, { useEffect, useState } from "react";
import { useLocation, useHistory } from "react-router-dom";
import { Helmet } from "react-helmet";
// page title bar
import PageTitleBar from "Components/PageTitleBar/PageTitleBar";
// intl messages
import IntlMessages from "Util/IntlMessages";

import ServiceProvidersList from "./ServiceProvidersList";
import { RctCard, RctCardContent } from "Components/RctCard";
import CustomCard from "Components/shared/CustomCard";
import { FiltersAndSearches } from "Components/FiltersAndSearches/FiltersAndSearches";
import { FormattedMessage } from "react-intl";

import { Button } from "reactstrap";
import axios from "axios"

const client = axios.create({
  baseURL: "https://estithmar.arabia-it.net/api/admin" 
 
});
export default function ServiceProviders() {
  const location = useLocation();
  const history = useHistory();
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);
  const [services,setServices]=useState()
  const [status,setStatus]=useState()
  useEffect(()=>{
    client.get("/service-provider-status").then((res)=>setStatus(res.data.data))
  },[])
  useEffect(()=>{
    client.get(`/service-provider?limit=${limit}&page=${page}`).then(res=>setServices(res.data.data))   
},[page,limit])
  return (
    <div className="clients-wrapper">
      <Helmet>
        <title>{"sidebar.service-provider"}</title>
      </Helmet>
      <PageTitleBar
        title={<IntlMessages id="sidebar.service-provider" />}
        match={location}
        enableBreadCrumb
        // extraButtons={
        //   <>
        //     {userCan("branches.create") && (
        //       <Button
        //         variant="contained"
        //         color="primary"
        //         className="mx-sm-15 btn btn-success"
        //         onClick={() => history.push("ServiceProviders/add")}
        //       >
        //         <IntlMessages id="create.new.something" values={{ something: messages?.banner }} />
        //       </Button>
        //     )}
        //   </>
        // }
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
        <div className="row justify-content-between">
          <div className="col-sm-12 col-md-3 mt-1">
          قائمة مزودي الخدمات 
            </div>
            <div className="col-sm-12 col-md-3 mt-1">
            <Button
            variant="contained"
            color="primary"
            style={{background:"#005D5E",fontWeight:"bold",fontSize:"20px"}}
            className="mx-smt-15 btn  mr-1 ml-1 border-0"
            onClick={()=>history.push("/app/service-provider/add")}
          
          >
            <span className="mr-1 ml-1">
              <FormattedMessage id={"إضافة مزود خدمة"} />
            </span>
          </Button>
              
            </div>
          </div>
          <div className="row">
                  <FiltersAndSearches
                    make="make"
                    submitbtnid="search.filter"
                    fields={[{ type: "search", name: "اسم مزود الخدمه" }]}
                    filters={["parent"]}
                    model="model"
                    is_active="isActive"
                    multi
                  />
                </div>
        </RctCardContent>
      </RctCard>
      <ServiceProvidersList
        loading={false}
        setPage={setPage}
        setLimit={setLimit}
        limit={limit}
        allservices={services}
        status={status}
      />
    </div>
  );
}
