import React, { useEffect, useState,useCallback  } from "react";
import { useLocation, useHistory } from "react-router-dom";
import { Helmet } from "react-helmet";
// // page title bar
import PageTitleBar from "Components/PageTitleBar/PageTitleBar";
// // intl messages
import IntlMessages from "Util/IntlMessages";

import { RctCard, RctCardContent } from "Components/RctCard";
import CustomCard from "Components/shared/CustomCard";

import { FiltersAndSearches } from "Components/FiltersAndSearches/FiltersAndSearches";
import axios from "axios"
import { Button } from "reactstrap";
import { FormattedMessage } from "react-intl";
import StaticPagesList from "./StaticPagesList";
const client = axios.create({
  baseURL: "https://estithmar.arabia-it.net/api/" 
 
});
export default function StaticPagesComponent() {
  const location = useLocation();
  const history = useHistory();
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);
  const [owners,setOwners]=useState()
  const [status,setStatus]=useState()
  const [query, setQuery] = useState({});


  useEffect(()=>{
   
  
      client.post(`auth/invoices`,{
      token:localStorage.getItem("token")
      }).then(res=>{
        console.log(res.data.data)
        setOwners(res.data.data)
      })
 
     
  },[page,limit,query])

  return (
    <div className="clients-wrapper">
       <Helmet>
         <title>{"الصفحات الثابتة"}</title>
       </Helmet>
       <PageTitleBar
         title={<IntlMessages id="الصفحات الثابتة" />}
         match={location}
         enableBreadCrumb
        
      />
      
      <RctCard>
        <RctCardContent>
          <div className="row justify-content-between">
          <div className="col-sm-12 col-md-9 mt-1">
          الصفحات الثباتة 
            </div>
            <div className="col-sm-12 col-md-3 mt-1">
            <Button
            variant="contained"
            color="primary"
            style={{background:"#150941",fontWeight:"bold",fontSize:"20px"}}
            className="mx-smt-15 btn  mr-1 ml-1 border-0"
            onClick={()=>history.push("/app/staticpages/add")}
          
          >
            <span className="mr-1 ml-1">
              <FormattedMessage id={"صفحة جديدة"} />
            </span>
          </Button>
            </div>

          </div>
          <hr />
        </RctCardContent>
        <StaticPagesList
        loading={false}
        setPage={setPage}
        setLimit={setLimit}
        limit={limit}
        allowners={owners}
        status={status}
      />
      </RctCard>
     
    </div>
  );
}
