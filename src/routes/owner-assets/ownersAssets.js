import React, { useEffect, useState,useCallback  } from "react";
import { useLocation, useHistory } from "react-router-dom";
import { Helmet } from "react-helmet";
// // page title bar
import PageTitleBar from "Components/PageTitleBar/PageTitleBar";
// // intl messages
import IntlMessages from "Util/IntlMessages";

import OwnersList from "./ownersList";
import { RctCard, RctCardContent } from "Components/RctCard";
import CustomCard from "Components/shared/CustomCard";

import { FiltersAndSearches } from "Components/FiltersAndSearches/FiltersAndSearches";
import axios from "axios"
import { Button } from "reactstrap";
import { FormattedMessage } from "react-intl";
const client = axios.create({
  baseURL: "https://admin.waqfnami.com/api/admin" 
 
});
export default function OwnerAssets() {
  const location = useLocation();
  const history = useHistory();
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);
  const [owners,setOwners]=useState()
  const [status,setStatus]=useState()
  const [query, setQuery] = useState({});

  useEffect(()=>{
    client.get("/asset-owner-status").then((res)=>setStatus(res.data.data))

  },[])
  useEffect(()=>{
   
  
      client.get(`/asset-owner`,{
        params:{
          limit,
          page,
        
          name:query.name ? query.name : undefined,
          status: query.status ? query.status : undefined
        }
      }).then(res=>setOwners(res.data.data))
 
     
  },[page,limit,query])

  return (
    <div className="clients-wrapper">
       <Helmet>
         <title>{"الأوقاف"}</title>
       </Helmet>
       <PageTitleBar
         title={<IntlMessages id="الأوقاف" />}
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
          <CustomCard color="#00A8FF1A" name={"أوقاف مسجلة"}/>
        </div>
        <div className="col-lg-3 col-md-3">
          <CustomCard color="#23D3811A" name="مكتملين"/>
        </div>
        <div className="col-lg-3 col-md-3">
          <CustomCard color="#EEB6561A" name="مرفوض"/>
        </div>
       
      
      </div>
      <RctCard>
        <RctCardContent>
          <div className="row justify-content-between">
          <div className="col-sm-12 col-md-3 mt-1">
          قائمة الأوقاف
            </div>
            <div className="col-sm-12 col-md-3 mt-1">
            <Button
            variant="contained"
            color="primary"
            style={{background:"#150941",fontWeight:"bold",fontSize:"20px"}}
            className="mx-smt-15 btn  mr-1 ml-1 border-0"
            onClick={()=>history.push("/app/owners-assets/add")}
          
          >
            <span className="mr-1 ml-1">
              <FormattedMessage id={"إضافة وقف"} />
            </span>
          </Button>
              
            </div>
          </div>
          <hr />
          <div className="row">
          
                  <FiltersAndSearches
                    make="make"
                    submitbtnid="search.filter"
                    fields={[{ type: "search", name:"name" ,label:"الوقف",placeholder:"اسم الوقف" }]}
                    query={query}
                    setPage={setPage}
                    setQuery={setQuery}
                    filters={["status"]}
                  />
                </div>
        </RctCardContent>
      </RctCard>
      <OwnersList
        loading={false}
        setPage={setPage}
        setLimit={setLimit}
        limit={limit}
        allowners={owners}
        status={status}
      />
    </div>
  );
}
