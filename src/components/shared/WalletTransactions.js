import React, { useEffect }  from "react"
import { FormattedMessage } from "react-intl";
import { useSelector } from "react-redux";
import { FormGroup, Label, Input, ButtonGroup, Button } from "reactstrap";
import PullRequest from "./PullRequest";
import { useState } from "react";
import axios from "axios"
const client = axios.create({
  baseURL: "https://estithmar.arabia-it.net/api/",
});
const WalletTransactions =({ServiceProvider,advisorDetails})=>{
	const {user}=useSelector(state=>state.authUser.user)
  const [isopen,setIsOpen]=useState(false)
  const [Transactions,setTransactions]=useState()
   console.log(user,"user kaik")
   useEffect(()=>{
    client.post(`auth/wallet-chrages`,{
     
       token:localStorage.getItem("token")
    }).then(res=>{
      console.log(res.data.data,"data platform")
      setTransactions(res?.data.data)
    })
   },[])
return(
    <div>
         <div className="row justify-content-between">
              <div className="col-sm-12 col-md-6 mt-1"> المحفظة</div>
              <div className="col-sm-12 col-md-6 mt-1">
                <div className="row justify-content-end mt-3">
               { user.category !="admin" ?  null:
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
                     // onClick={() => }
                   >
                     <span className="mr-1 ml-1">
                       {
                       ">"

                       }
                     </span>
                   </Button>
                 </div>
               }
                 
                </div>
              </div>
                   </div>
                   <div className="row justify-content-between mt-3">
                    <div>
                        <h2>
                    اجمالي ارباح 

                        </h2>
                        <h5 className="text-center">
                          {
                            
    ServiceProvider?.user?.wallet?.valid_balance ? ServiceProvider?.user?.wallet?.valid_balance : advisorDetails?.user?.wallet?.valid_balance
                          }

                        </h5>
                    </div>
                    <div>
                        <h2>
                        الرصيد الحالي

                        </h2>
                    <h5 className="text-center">
{
    ServiceProvider?.user?.wallet?.valid_balance ?ServiceProvider?.user?.wallet?.valid_balance :advisorDetails?.user?.wallet?.valid_balance
}
                    </h5>
                  {
                    user?.category != "admin" && 
                      <div className="col-md-12 p-0">
                      <Button
                        variant="contained"
                        color="primary"
                        style={{
                          background: "#7EA831",
                          fontWeight: "bold",
                          fontSize: "20px",
                        }}
                        className="mx-smt-15 btn  mr-1 ml-1 border-0"
                        onClick={()=>setIsOpen(!isopen)}
                      >
                        <span className="mr-1 ml-1">
                          <FormattedMessage id={"سحب"} />
                        </span>
                      </Button>
                    </div>
                  }
                    </div>
                    </div>
        <h4>
        المسحوبات
        </h4>
        <table className="table table-hover ">
            <thead>
                <th>
                    ID
                </th>
                <th>
                رقم المعاملة
                </th>
                <th>
                التاريخ
                </th>
                <th>
                الحساب
                </th>
                <th>
                المبلغ 
                </th>
                <th>
                 الحالة
                </th>
    
            </thead>
            <tbody>
                {
                  Transactions?.map((oneTrans)=>(
                    <tr>
                      <td>
                        {oneTrans?.id}
                      </td>
                      <td></td>
                      <td>
                        {
                          oneTrans.created_at
                        }
                      </td>
                      <td>
                        {
                          oneTrans?.bank_account
                        }
                      </td>
                      <td>
                        {
                          oneTrans?.amount
                        }
                      </td>
                      <td>
                        {
                          oneTrans?.status
                        }
                      </td>

                    </tr>
                  ))
                }
            </tbody>
         
            </table>
            <PullRequest isopen={isopen}  setIsOpen={setIsOpen}  />
    </div>
)
}
export default WalletTransactions