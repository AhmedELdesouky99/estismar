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
import ConsultingList from "./ConsultingList";
import { useSelector } from "react-redux";
const client = axios.create({
  baseURL: "https://estithmar.arabia-it.net/api/admin",
});
export default function AllConsulting({inTabs}) {
  const location = useLocation();
  const history = useHistory();
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);
  const [owners, setOwners] = useState();
  const [status, setStatus] = useState();
  const [query, setQuery] = useState({});
  const {id}=useParams()
	const {user}=useSelector(state=>state.authUser.user)
  console.log(id,"advisor id ")
  useEffect(()=>{
    client
    // .get(`/service?limit=${limit}&page=${page}`)
    // .then((res) => setOwners(res.data.data));
    if(id){
      client.get(`/advisor/${id}`,{
        params:{
          limit,
          page,
          past:true,
          status: query.status ? query.status : undefined
        }
      }).then(res=>setOwners(res.data.data))
    }else{
      client.get(`/advisor-schedules`,{
        params:{
          limit,
          page,
          advisor_name  :query.name ? query.name : undefined,
          advisor_id:user.category =="advisor" ? user.id: id ? id :undefined,
          status: query.status ? query.status : undefined
        }
      }).then(res=>setOwners(res.data.data))

    }

},[page,limit,query])
console.log(user,"user")
  return (
    <div className="clients-wrapper">
     {
      !inTabs ? 
          <>
               <Helmet>
      <title>{"قائمة الاستشارات"}</title>
    </Helmet>
    <PageTitleBar
      title={<IntlMessages id="قائمة الاستشارات" />}
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
          <CustomCard color="#00A8FF1A" name={"الاستشارات"} />
        </div>
        <div className="col-lg-3 col-md-3">
          <CustomCard color="#23D3811A" name="استشارات مكتملة" />
        </div>
        <div className="col-lg-3 col-md-3">
          <CustomCard color="#FF04041A" name="استشارات متاحة" />
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
              <div className="col-sm-12 col-md-6 mt-1">  قائمة الاستشارات</div>
              <div className="col-sm-12 col-md-6 mt-1">
                <div className="row justify-content-end">
            {
              user.category =="admin" ? 
              <div className="col-md-6">
              <Button
                variant="contained"
                color="primary"
                style={{
                  background: "none",
                  color:"#150941",
                  fontWeight: "bold",
                  fontSize: "20px",
                  color: "#7EA831",
                  border: "1px solid #150941 ",
                }}
                className="mx-smt-15   mr-1 ml-1 "
                onClick={() => history.push("/app/advisors")}
              >
                <span className="mr-1 ml-1">
                  <FormattedMessage id={"قائمة المستشاريين"} />
                </span>
              </Button>
            </div>
            : null
            }
                {
                  user.is_active ?
                  <div className="col-md-6">
                  <Button
                    variant="contained"
                    color="primary"
                    style={{
                      background: "#150941",
                      fontWeight: "bold",
                      fontSize: "20px",
                    }}
                    className="mx-smt-15 btn  mr-1 ml-1 border-0"
                    onClick={() => history.push("/app/advisors/Consulting/add")}
                  >
                    <span className="mr-1 ml-1">
                      <FormattedMessage id={"استشارة جديدة"} />
                    </span>
                  </Button>
                </div> 
                : null
                }
                  
                </div>
              </div>
            </div>
            <hr />
            <div className="row">
              <FiltersAndSearches
                make="make"
                submitbtnid="search.filter"
                fields={user.category =="advisor" ? [{}] : [{ type: "search", name: "name",label:"المستشار",placeholder:"اسم المستشار"  }]}
               
                filters={["status"]}
                query={query}
                setPage={setPage}
                setQuery={setQuery}
              
              />
            </div>
                </>

              
              :
              <div className="row">
              <div className="col-sm-12 col-md-6 mt-1">  قائمة الاستشارات</div>

                <div className="col-md-3">
                    {/* <Button
                      variant="contained"
                      color="primary"
                      style={{
                        background: "none",
                        color:"#150941",
                        fontWeight: "bold",
                        fontSize: "20px",
                        color: "#7EA831",
                        border: "1px solid #150941 ",
                      }}
                      className="mx-smt-15   mr-1 ml-1 "
                      onClick={() => history.push("/app/advisors")}
                    >
                      <span className="mr-1 ml-1">
                        <FormattedMessage id={"قائمة المستشاريين"} />
                      </span>
                    </Button> */}
                  </div>
                  <div className="col-md-3">
                    <Button
                      variant="contained"
                      color="primary"
                      style={{
                        background: "#150941",
                        fontWeight: "bold",
                        fontSize: "20px",
                      }}
                      className="mx-smt-15 btn  mr-1 ml-1 border-0"
                      onClick={() => history.push("/app/advisors/Consulting/add")}
                    >
                      <span className="mr-1 ml-1">
                        <FormattedMessage id={"استشارة جديدة"} />
                      </span>
                    </Button>
                  </div>
                  
                
              <FiltersAndSearches
                make="make"
                submitbtnid="search.filter"
                fields={ user.category == "advisor" ? [{}]:[{ type: "search", name: "name",label:"المستشار",placeholder:"اسم المستشار"  }]}
               
                filters={["status"]}
                query={query}
                setPage={setPage}
                setQuery={setQuery}
              
              />
            </div>
            }
       
        </RctCardContent>
      </RctCard>
      <ConsultingList
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
