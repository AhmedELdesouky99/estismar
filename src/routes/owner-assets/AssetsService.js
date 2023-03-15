import React, { useEffect, useState,useCallback  } from "react";
import { useLocation, useHistory, useParams } from "react-router-dom";
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
import ServiceList from "./serviceList";
const client = axios.create({
  baseURL: "https://estithmar.arabia-it.net/api/admin" 
 
});
export default function AssetsService() {
  const location = useLocation();
  const history = useHistory();
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);
  const [owners,setOwners]=useState()
  const [status,setStatus]=useState()
  const [query, setQuery] = useState({});
  const {id} =useParams()

  useEffect(()=>{
   
  
      client.get(`/service-request`,{
        params:{
          limit,
          page,
          owner_id:id,
          provider_id:query.service_provider_id ? query.service_provider_id : undefined,
          status: query.status ? query.status : undefined
        }
      }).then(res=>setOwners(res.data.data))
 
     
  },[page,limit,query])
  return (
    <div className="clients-wrapper">
      <RctCard>
        <RctCardContent>
          <div className="row justify-content-between">
          <div className="col-sm-12 col-md-3 mt-1">
          قائمة خدماتي
            </div>

          </div>
          <hr />
          <div className="row">
          
                  <FiltersAndSearches
                    make="make"
                    submitbtnid="search.filter"
                    fields={[]}
                    query={query}
                    setPage={setPage}
                    setQuery={setQuery}
                    filters={["status","service_provider"]}
                  />
                </div>
        </RctCardContent>
      </RctCard>
      <ServiceList
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
