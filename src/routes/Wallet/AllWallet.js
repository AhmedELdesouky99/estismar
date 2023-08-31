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
import { useSelector } from "react-redux";
import PendingWalletList from "./PendingWalletLis";
import AllWalletTransactions from "./AllWalletTransactionsList";
import CustomerBalanceList from "./CustomersBalanceList";
import PlatformBalanceList from "./PlatformBalanceList";
const client = axios.create({
  baseURL: "https://estithmar.arabia-it.net/api/admin",
});
export default function Wallet({inTabs}) {
  const location = useLocation();
  const history = useHistory();
  const [page, setPage] = useState(1);
  const [pageTransactions, setPageTransactions] = useState(1);
  const [pageCustomerBalance, setPageCustomerBalance] = useState(1);
  const [pagePlatformBalance, setPagePlatformBalance] = useState(1);



  const [limit, setLimit] = useState(10);
  const [limitTransactions, setLimitTransactions] = useState(10);
  const [limitCustomerBalance, setLimitCustomerBalance] = useState(10);
  const [limitPlatformBalance, setLimitPlatformrBalance] = useState(10);



  const [owners, setOwners] = useState();
  const [data,setData]=useState()
  const [status, setStatus] = useState();
  const [query, setQuery] = useState({});
  const[customerBalanceData,setCustomerBalanceData]=useState()
  const [PlatformData,setPlatformData]=useState()
  const {id}=useParams()
  const [customerBalance,SetCustomerBalance]=useState()
  const [platform,setPlatform]=useState()
	const {user}=useSelector(state=>state.authUser.user)
  
  useEffect(()=>{
    console.log(user,"user")
    if(user.category =="service-provider"){
      const clienturl= axios.create({
        baseURL: "https://estithmar.arabia-it.net/api",
      });
      clienturl.get(`/provider/request`,{
        params:{
          limit,
          token:localStorage.getItem("token"),
          page,
          status: query.status ? query.status : undefined,
        }
      }).then(res=>setOwners(res.data.data))
    }else{
      client.get(`/wallet?pending_requests=true`,{
        params:{
          limit,
          page,
        }
      }).then(res=>{
        console.log(res.data.data,"data adata ")
        setOwners(res.data.data)
      })
    }
    
},[page,limit,query])
useEffect(()=>{
    console.log(user,"user")
      client.get(`/wallet?wallet_charges=true`,{
        params:{
          limit:limitTransactions,
          page:pageTransactions,
        }
      }).then(res=>{
        console.log(res.data.data,"data adata ")
        setData(res.data.data)
      })
    
},[pageTransactions,limitTransactions,query])
useEffect(()=>{
    console.log(user,"user")
      client.get(`/wallet?wallets=true`,{
        params:{
          limit:limitCustomerBalance,
          page:pageCustomerBalance,
        }
      }).then(res=>{
        console.log(res.data.data,"data adata ")
        setCustomerBalanceData(res.data.data)
      })
    
},[pageCustomerBalance,limitCustomerBalance,query])
useEffect(()=>{
      client.get(`/wallet?platform_income=true`,{
        params:{
          limit:limitCustomerBalance,
          page:pageCustomerBalance,
        }
      }).then(res=>{
        console.log(res.data.data,"data platform")
        setPlatformData(res.data.data.query_result)
      })
    
},[pagePlatformBalance,limitPlatformBalance,query])

console.log(user,"user")
const changeStatus=()=>{
    setPlatform(false)
    setCustomerBalanceData(true)
}
  return (
    <div className="clients-wrapper">
     {
      !inTabs ? 
          <>
               <Helmet>
      <title>{"الطلبات"}</title>
    </Helmet>
    <PageTitleBar
      title={<IntlMessages id="wallet" />}
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
          <CustomCard color="#00A8FF1A" name={"اجمالي الخدمات"} />
        </div>
        <div className="col-lg-3 col-md-3">
          <CustomCard color="#23D3811A" name="خدمات متاحة" />
        </div>
        <div className="col-lg-3 col-md-3">
          <CustomCard color="#EEB6561A" name="قيد الانتظار" />
        </div>
        <div className="col-lg-3 col-md-3">
          <CustomCard color="#FF04041A" name="خدمات متوقفة" />
        </div>
      </div>
        
        :
        null

      }
 
      <RctCard>
        <RctCardContent>
        <PendingWalletList
        loading={false}
        setPage={setPage}
        setLimit={setLimit}
        limit={limit}
        allowners={owners}
        status={status}
      />
       
        </RctCardContent>
      </RctCard>
      <RctCard>
        <RctCardContent>
            <div className="row justify-content-between">
                <div className="col-md-6">
                    <h3>
                        {
                            customerBalance ? "ارصدة العملاء": platform ?  "ارباح المنصة":"قائمةالمعاملات المالية"
                        }
                    
                    </h3>
                </div>
                <div className="col-md-6">
                <div className="row">
                  <div className="col-md-6">
                    <Button
                      variant="contained"
                      color="primary"
                      style={{
                        background: "none",
                        fontWeight: "bold",
                        fontSize: "20px",
                        color: "#7EA831",
                        border: "1px solid #7EA831 ",
                      }}
                      className="mx-smt-15 btnAdd  mr-1 ml-1 border-0"
                      onClick={() => platform ?  changeStatus()
                        
                        
                        : SetCustomerBalance(!customerBalance)}
                    >
                      <span className="mr-1 ml-1">
                        <FormattedMessage id={ customerBalance ?  "المعاملات المالية": platform ?"المعاملات المالية" :  " ارصدة العملاء"} />
                      </span>
                    </Button>
                  </div>
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
                      onClick={() => {
                        setPlatform(!platform)
                        SetCustomerBalance(false)
                      }}
                    >
                      <span className="mr-1 ml-1">
                        <FormattedMessage id={ platform ?" ارصدة العملاء" : "ارباح المنصة"} />
                      </span>
                    </Button>
                  </div>
                </div>
                </div>

            </div>
            {
                customerBalance ?
               <CustomerBalanceList 
               loading={false}
                setPage={setPageCustomerBalance}
                setLimit={setLimitCustomerBalance}
                limit={limitCustomerBalance}
                allowners={customerBalanceData}
                status={status}
               
               
               /> 
                :
                platform ? 
                
                <PlatformBalanceList 
                loading={false}
                setPage={setPagePlatformBalance}
                setLimit={setLimitPlatformrBalance}
                limit={limitPlatformBalance}
                allowners={PlatformData}
                status={status}
                
                
                />
                : 
                
                <AllWalletTransactions
                loading={false}
                setPage={setPageTransactions}
                setLimit={setLimitTransactions}
                limit={limitTransactions}
                allowners={data}
                status={status}
              />
            }
        
       
        </RctCardContent>
      </RctCard>
    </div>
  );
}
