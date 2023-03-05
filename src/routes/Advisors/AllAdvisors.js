import React, { useEffect, useState } from "react";
import { useLocation, useHistory, useParams } from "react-router-dom";
import { Helmet } from "react-helmet";
// // page title bar
import PageTitleBar from "Components/PageTitleBar/PageTitleBar";
// // intl messages
import IntlMessages from "Util/IntlMessages";

import { RctCard, RctCardContent } from "Components/RctCard";
import CustomCard from "Components/shared/CustomCard";

import { FiltersAndSearches } from "Components/FiltersAndSearches/FiltersAndSearches";
import axios from "axios";
import { Button } from "reactstrap";
import { FormattedMessage } from "react-intl";
import AdvisorList from "./advisorList";
const client = axios.create({
  baseURL: "https://estithmar.arabia-it.net/api/admin",
});
export default function Advisors({inTabs}) {
  const location = useLocation();
  const history = useHistory();
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);
  const [owners, setOwners] = useState();
  const [status, setStatus] = useState();
  const [query, setQuery] = useState({});
  const {id}=useParams()
  
  useEffect(()=>{
    client
    // .get(`/service?limit=${limit}&page=${page}`)
    // .then((res) => setOwners(res.data.data));
    client.get(`/advisor`,{
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
     {
      !inTabs ? 
          <>
               <Helmet>
      <title>{"المستشاريين"}</title>
    </Helmet>
    <PageTitleBar
      title={<IntlMessages id="المستشاريين" />}
      match={location}
      enableBreadCrumb
     
    />
          </>
      :
      null  
     }
      {
        !inTabs ? 
        
        <div className="row">
        <div className="col-lg-3 col-md-3">
          <CustomCard color="#00A8FF1A" name={"المستشاريين"} />
        </div>
        <div className="col-lg-3 col-md-3">
          <CustomCard color="#23D3811A" name="نشط" />
        </div>
        <div className="col-lg-3 col-md-3">
          <CustomCard color="#FF04041A" name="متوقف" />
        </div>
        
      </div>
        
        :
        null

      }
 
      <RctCard>
        <RctCardContent>
            {
              !inTabs ? 
                <>
                   <div className="row justify-content-between">
              <div className="col-sm-12 col-md-6 mt-1"> قائمة المستشاريين</div>
              <div className="col-sm-12 col-md-6 mt-1">
                <div className="row justify-content-center">
                 
                  <div className="col-md-6">
                    <Button
                      variant="contained"
                      color="primary"
                      style={{
                        background: "#005D5E",
                        fontWeight: "bold",
                        fontSize: "20px",
                      }}
                      className="mx-smt-15 btn  mr-1 ml-1 border-0"
                      onClick={() => history.push("/app/advisors/add")}
                    >
                      <span className="mr-1 ml-1">
                        <FormattedMessage id={"مستشار جديد"} />
                      </span>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
            <hr />
            <div className="row">
              <FiltersAndSearches
                make="make"
                submitbtnid="search.filter"
                fields={[{ type: "search", name: "name",label:"المستشار",placeholder:"اسم المستشار"  }]}
               
                filters={["status"]}
                query={query}
                setPage={setPage}
                setQuery={setQuery}
              
              />
            </div>
                </>

              
              :
              <div className="row">
              <FiltersAndSearches
                make="make"
                submitbtnid="search.filter"
               
                filters={ id ?  ["parent","status","fields","support"] : ["parent","status","fields","service_provider"]}
                query={query}
                setPage={setPage}
                setQuery={setQuery}
              
              />
            </div>
            }
       
        </RctCardContent>
      </RctCard>
      <AdvisorList
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
