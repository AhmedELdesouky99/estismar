import React, { useState }  from "react"
import { useEffect } from "react"
import axios from "axios"
import { RctCard, RctCardContent } from "Components/RctCard";
import MyWalletTransactionList from "./MyWalletTransactionList";
import PullRequest from "../../components/shared/PullRequest";
import { Button } from "reactstrap";
import { FormattedMessage } from "react-intl";

const client = axios.create({
    baseURL: "https://estithmar.arabia-it.net/api/",
  });
const MyWallet=()=>{
    const [page,setPage]=useState(1)
    const[limit,setLimit]=useState(10)
    const[myWalletData,setMyWalletData]=useState()
    const[Balance,setBalance]=useState()
    const [isopen,setIsOpen] =useState()
    useEffect(()=>{
        client.post(`/auth/wallet-chrages`,{
          token:localStorage.getItem("token")
        }).then(res=>{
          console.log(res.data.data,"kaki")
        setMyWalletData(res.data.data)
        })
        client.post(`/auth/wallet`,{
            token:localStorage.getItem("token")
          }).then(res=>{
            setBalance(res.data.data,"kaki2")
          })
    },[])
    return(
        <RctCard>
            <RctCardContent>
                <h3>
                المحفظة
                </h3>
                <hr/>
                <div className="row justify-content-between">
                    <div className="col-md-6 text-center">
                        <h2>
                        اجمالي الارباح   
                        </h2>
                        <p>
                            {
                               Number( Balance?.valid_balance )+ Number(Balance?.pending_balance)
                            }
                        </p>
                    </div>
                    <div className="col-md-6 text-center">
                         <h2>
                         الرصيد الحالي   
                        </h2>
                        <p>
                            {
                               Number( Balance?.valid_balance )
                            }
                        </p>
                       <div className="w-100">
                       <Button
                        variant="contained"
                        color="primary"
                        style={{
                          background: "#7EA831",
                          fontWeight: "bold",
                          fontSize: "20px",
                          minWidth:"200px",
                          maxWidth:"250px"
                        }}
                        className="mx-smt-15 btn  mr-1 ml-1 border-0"
                        onClick={()=>setIsOpen(!isopen)}
                      >
                        <span className="mr-1 ml-1">
                          <FormattedMessage id={"سحب"} />
                        </span>
                      </Button>
                       </div>
                    </div>
                </div>
                <h3>
                    المسحوبات
                    </h3>
                    <hr/>
                    <MyWalletTransactionList 
                       loading={false}
                     
                       allowners={myWalletData}
                    />
            <PullRequest isopen={isopen}  setIsOpen={setIsOpen}  />

            </RctCardContent>
        </RctCard>
    )
}
export default MyWallet