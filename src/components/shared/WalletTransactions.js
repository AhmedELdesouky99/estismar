import React, { useEffect }  from "react"
import { FormattedMessage } from "react-intl";
import { FormGroup, Label, Input, ButtonGroup, Button } from "reactstrap";

const WalletTransactions =({ServiceProvider})=>{
   console.log(ServiceProvider?.user?.wallet?.valid_balance,"ServiceProvider")
return(
    <div>
         <div className="row justify-content-between">
              <div className="col-sm-12 col-md-6 mt-1"> المحفظة</div>
              <div className="col-sm-12 col-md-6 mt-1">
                <div className="row justify-content-end mt-3">
               
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
                      onClick={() => history.push("/app/services/add")}
                    >
                      <span className="mr-1 ml-1">
                        <FormattedMessage id={"إضافة خدمة"} />
                      </span>
                    </Button>
                  </div>
                </div>
              </div>
                   </div>
                   <div className="row justify-content-between mt-3">
                    <div>
                        <h2>
                    اجمالي ارباح المنصة

                        </h2>
                        <h5 className="text-center">

                        </h5>
                    </div>
                    <div>
                        <h2>
                        الرصيد الحالي

                        </h2>
                    <h5 className="text-center">
{
    ServiceProvider?.user?.wallet?.valid_balance
}
                    </h5>
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
                    >
                      <span className="mr-1 ml-1">
                        <FormattedMessage id={"سحب"} />
                      </span>
                    </Button>
                  </div>
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
                {/* {
                    InVoicesArr?.data?.length  ?
                    InVoicesArr.data?.map((Invoice) => (
                            <tr>
                                <td>
                                    {Invoice.id}
                                </td>
                                <td>
    
                                    {
                                        // JSON.parse(transaction.meta)?.service?.title
                                        Invoice?.code
    
    
                                    }
                                </td>
                                <td>
    
                                    {
                                        // JSON.parse(transaction.meta)?.service?.field?.name
    
                                    }
                                </td>
                                <td>
    
                                    {
                                        Invoice?.service_name
    
                                        // transaction?.transaction_amount
                                    }
                                </td>
                                <td>
    
                                    {
                                        Invoice?.cost
    
                                        // moment(transaction?.created_at).locale("ar").format('DD MMM YYYY h:mm:ss a')
    
                                    }
                                </td>
                                <td>
    
                                    {
                                        <button onClick={()=>{
                                            setInvoicedDetails(Invoice)
                                          }} className="border-0 w-100" style={{background:"#23D381",color:"#fff"}}>
                                          <i className=" ti-eye m-1"></i>
                                          <EyeOutlined />
                              
                                          </button>
    
                                    }
                                </td>
                            </tr>
    
    
                        ))
                        : null
                } */}
            </tbody>
         
            </table>
    </div>
)
}
export default WalletTransactions