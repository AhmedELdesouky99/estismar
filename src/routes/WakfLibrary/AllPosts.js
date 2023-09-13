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
import TagModal from "./TagModal";
import TagsList from "./TagsList";
const client = axios.create({
  baseURL: "https://estithmar.arabia-it.net/api/admin" 
 
});
export default function AllPosts() {
  const location = useLocation();
  const history = useHistory();
  const [page, setPage] = useState(1);
  const [page1, setPage1] = useState(1);

  const [limit, setLimit] = useState(10);
  const [owners,setOwners]=useState()
  const [owners1,setOwners1]=useState()

  const [status,setStatus]=useState()
  const [query, setQuery] = useState({});
  const [query1, setQuery1] = useState({});

  const [isopen,setIsOpen]=useState(false)
  const [posts,setPosts] =useState(false)
  const [limit1,setLimit1]=useState(10)
  useEffect(()=>{
    client.get("/asset-owner-status").then((res)=>setStatus(res.data.data))

  },[])
  useEffect(()=>{
  if(posts){
    client.get(`/posts`,{
      params:{
        limit,
        page,
        category:"posts",
        name:query.name ? query.name : undefined,
        status: query.status ? query.status : undefined
      }
    }).then(res=>setOwners(res.data.data))

  }
   
     
  },[page,limit,query,posts])
  useEffect(()=>{
    if(!posts){
      client.get(`/tags`,{
        params:{
          limit,
          page,
          title:query.name ? query.name : undefined,
          is_active: query.status ? query.status : undefined
        }
      }).then(res=>setOwners1(res.data.data))
    }
  
  },[limit1,page1,query])

  return (
    <div className="clients-wrapper">
       <Helmet>
         <title>{"المقالات"}</title>
       </Helmet>
       <PageTitleBar
         title={<IntlMessages id="المقالات" />}
         match={location}
         enableBreadCrumb
        
      />
      <div className="row">
        <div className="col-lg-3 col-md-3">
          <CustomCard color="#00A8FF1A" name={" مسجلة"}/>
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
            {
              posts ? "قائمة المقالات" : "  قائمة التصنيفات"
            }
         
            </div>
    <div className="col-sm-12 col-md-6">
    <div className="row">
          <div className="col-sm-12 col-md-6 mt-1">
            <Button
            variant="contained"
            style={{background:"none",color:"#7EA831",border:" 1px solid #7EA831",fontWeight:"bold",fontSize:"20px"}}
            className="mx-smt-15 btn  mr-1 ml-1 border-0"
            onClick={()=>setPosts(!posts)}
          
          >
            <span className="mr-1 ml-1">
              {
                !posts ?
                <FormattedMessage id={"قائمة المقالات"} />
                : 
                <FormattedMessage id={"قائمة التصنيفات"} />
              }
            
            </span>
          </Button>
       
            </div>
            <div className="col-sm-12 col-md-6 mt-1">
            <Button
            variant="contained"
            color="primary"
            style={{background:"#150941",fontWeight:"bold",fontSize:"20px"}}
            className="mx-smt-15 btn  mr-1 ml-1 border-0"
            onClick={()=> !posts ?    setIsOpen(true) :history.push("/app/posts/add")}
          
          >
            <span className="mr-1 ml-1">
          {
            !posts ?
            <FormattedMessage id={"تصنيف جديد"} /> : 
            <FormattedMessage id={"اضافة مقال"} />
          }
              
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
                    filters={["status1"]}
                  />
                </div>
        </RctCardContent>
      </RctCard>
      {
        posts ? 
        <PostsList
        loading={false}
        setPage={setPage}
        setLimit={setLimit}
        limit={limit}
        allowners={owners}
        status={status}
      />
      :
      <TagsList
      loading={false}
      setPage={setPage1}
      setLimit={setLimit1}
      limit={limit1}
      allowners={owners1}
      status={status}
    />
      }
      
      
      <TagModal setIsOpen={setIsOpen} isopen={isopen}/>
    </div>
  );
}
