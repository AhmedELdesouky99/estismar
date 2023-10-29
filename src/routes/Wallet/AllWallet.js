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
import Select from "react-select";
import MyWallet from "./MyWallet";

const client = axios.create({
  baseURL: "https://admin.waqfnami.com/api/admin",
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
  const [PlatFormIncom,setPlatformIncom]=useState()
  const[userCategory,SetUserCategory]=useState()
  const [transType,setTransType]=useState()
	const {user}=useSelector(state=>state.authUser.user)
  
  useEffect(()=>{
    client.get(`/wallet?pending_requests=true`,{
      params:{
        limit,
        page,
        user_category:userCategory,
        transaction_type:transType
      }
    }).then(res=>{
      console.log(res.data.data,"data adata ")
      setOwners(res.data.data)
    })
},[page,limit,query,userCategory,transType])
useEffect(()=>{
    console.log(user,"user")
      client.get(`/wallet?wallet_charges=true`,{
        params:{
          limit:limitTransactions,
          page:pageTransactions,
          user_category:query.user_category,
          status:query.status
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
          user_category: platform ? query.user_category :undefined

        }
      }).then(res=>{
        console.log(res.data.data,"data platform")
        setPlatformData(res.data.data)
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
 
   {
    user.category =="admin" ? 
    <>
       <RctCard>
        <RctCardContent>
          <div className="row justify-content-between">
            <div className="col-md-6">
            <h3>
          تاكيد معاملات
          </h3>

            </div>
            <div className="col-md-6">
            <div className="row justify-content-end"> 
              <div className="col-md-4">
              <Select
                options={[
                  {
                    label:"مستشار",
                    value:"advisor"
                  },
                  {
                    label:"وقف",
                    value:"asset-owner"
                  }
                ]}
                placeholder="اختر نوع الحساب"
                onChange={(select)=>{
                    console.log(select,"select")
                    SetUserCategory(select.value)
                }}
            />
              </div>
              <div className="col-md-4">
              <Select
                options={[
                  {
                    label:"سحب" ,
                    value:"withdraw"
                  },
                  {
                    label:"ايداع" ,
                    value:"deposit"
                  }
                ]}
                placeholder="اختر نوع المعاملة"
                onChange={(select)=>{
                  console.log(select,"select")
                  setTransType(select.value)
              }}
            />
              </div>
            </div>
              {/* <FiltersAndSearches 
              
              submitbtnid="search.filter"
             
              filters={  ["service_provider","support"]}
              query={query}
              setPage={setPage}
              setQuery={setQuery}
              
              /> */}
            </div>
          </div>
         
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
            
                {
                  platform && 
                  <div className="row justify-content-between w-100 mt-4 text-center">
                          <div className="col-md-4">
                            <p>
                            ارباح الخدمات
                            </p>
                            <p>
                              {
                                PlatformData?.service_profit
                              }
                            </p>
                          </div>
                          <div className="col-md-4">
                            <p>
                            ارباح استشارات
                            </p>
                            <p>
                              {
                                PlatformData?.advise_profit
                              }
                            </p>
                          </div>
                          <div className="col-md-4">
                            <p>
                            اجمالي ارباح المنصة
                            </p>
                            <p>
                            {
                                PlatformData?.advise_profit +  PlatformData?.service_profit
                              }
                            </p>
                          </div>
                        
                      </div>
                }
                      
            </div>
            <div className="row w-100">
                  <FiltersAndSearches 
                    make="make"
                    submitbtnid="search.filter"
                   
                    filters={ !customerBalance && !platform ? ["userCategory","TransactionType","Transstatus"]: ["userCategory"]}
                    query={query}
                    setPage={setPage}
                    setQuery={setQuery}
                  
                  />
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
                allowners={PlatformData.query_result}
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
    </>
    
    
    : <MyWallet />
   }
    </div>
  );
}
