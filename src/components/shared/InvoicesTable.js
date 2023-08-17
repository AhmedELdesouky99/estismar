import { Tooltip } from "@material-ui/core"
import React, { useEffect }  from "react"
import { Link, useHistory } from "react-router-dom";

const InvoiceTable =({ServiceProvider})=>{
   console.log(ServiceProvider?.user?.invoices,"ServiceProvider")
return(
    <div>
        <h4>
        karem
        </h4>
        <table className="table table-hover ">
            <thead>
                <th>
                    ID
                </th>
                <th>
                فاتورة ضريبية
                </th>
                <th>
                تاريخ الفاتورة
                </th>
                <th>
                الخدمة
                </th>
                <th>
                المبلغ 
                </th>
                <th>
                 
                </th>
    
            </thead>
            <tbody>
                {
                    ServiceProvider?.user?.invoices && ServiceProvider?.user?.invoices?.length ? 
                    ServiceProvider?.user?.invoices?.map((invoice)=>
                                (
                                    <tr>
                                        <td>{invoice.id}</td>
                                        <td>{invoice.code}</td>
                                        <td>
                                            {
                                                invoice.created_at
                                            }
                                        </td>
                                        <td>
                                            {
                                                JSON.parse(invoice.meta).service?.title
                                            }
                                        </td>
                                        <td>
                                            {invoice.cost}
                                        </td>
                                        <td>
                                        <Tooltip title={ "common.edit"} placement="top">
          <Link to={`service-provider/`}>
            <button className="border-0" style={{background:"#23D381",color:"#fff"}}>
            <i className=" ti-eye m-1"></i>
            </button>
          </Link>
        </Tooltip>
                                        </td>

                                    </tr>
                                )
                    )
                    : null
                }
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
export default InvoiceTable