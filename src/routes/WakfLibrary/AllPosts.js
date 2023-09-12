import React, { useEffect, useState,useCallback  } from "react";
import { useLocation, useHistory } from "react-router-dom";
import { Helmet } from "react-helmet";
// // page title bar
import PageTitleBar from "Components/PageTitleBar/PageTitleBar";
// // intl messages
import IntlMessages from "Util/IntlMessages";

import PostsList from "./postsList";
import { RctCard, RctCardContent } from "Components/RctCard";
import CustomCard from "Components/shared/CustomCard";

import { FiltersAndSearches } from "Components/FiltersAndSearches/FiltersAndSearches";
import axios from "axios"
import { Button } from "reactstrap";
import { FormattedMessage } from "react-intl";
const client = axios.create({
  baseURL: "https://estithmar.arabia-it.net/api/admin" 
 
});
export default function AllPosts() {
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
  
      client.get(`/posts`,{
        params:{
          limit,
          page,
          category:"posts",
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
          قائمة التصنيفات
            </div>
    <div className="col-sm-12 col-md-6">
    <div className="row">
          <div className="col-sm-12 col-md-6 mt-1">
            <Button
            variant="contained"
            style={{background:"none",color:"#7EA831",border:" 1px solid #7EA831",fontWeight:"bold",fontSize:"20px"}}
            className="mx-smt-15 btn  mr-1 ml-1 border-0"
            onClick={()=>history.push("/app/owners-assets/add")}
          
          >
            <span className="mr-1 ml-1">
              <FormattedMessage id={"قائمة المقالات"} />
            </span>
          </Button>
       
            </div>
            <div className="col-sm-12 col-md-6 mt-1">
            <Button
            variant="contained"
            color="primary"
            style={{background:"#150941",fontWeight:"bold",fontSize:"20px"}}
            className="mx-smt-15 btn  mr-1 ml-1 border-0"
            onClick={()=>history.push("/app/owners-assets/add")}
          
          >
            <span className="mr-1 ml-1">
              <FormattedMessage id={"تصنيف جديد"} />
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
                    fields={[{ type: "search", name:"name" ,label:"ابحث عن",placeholder:"ابحث عن" }]}
                    query={query}
                    setPage={setPage}
                    setQuery={setQuery}
                    filters={["status"]}
                  />
                </div>
        </RctCardContent>
      </RctCard>
      <PostsList
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
