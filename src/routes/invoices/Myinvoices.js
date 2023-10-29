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
import AllMyInvoices from "./AllMyInvoices";
const client = axios.create({
  baseURL: "https://admin.waqfnami.com/api/" 
 
});
export default function MyInvoices() {
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
         <title>{"الفواتير"}</title>
       </Helmet>
       <PageTitleBar
         title={<IntlMessages id="الفواتير" />}
         match={location}
         enableBreadCrumb
        
      />
      
      <RctCard>
        <RctCardContent>
          <div className="row justify-content-between">
          <div className="col-sm-12 col-md-3 mt-1">
          الفواتير
            </div>

          </div>
          <hr />
        </RctCardContent>
        <AllMyInvoices
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
