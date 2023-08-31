import { Tooltip } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import { RctCard, RctCardContent } from "Components/RctCard";
import moment from "moment";
import { useSelector } from "react-redux";

const InvoiceTable = ({ ServiceProvider,advisorDetails }) => {
  console.log(ServiceProvider, "ServiceProvider",advisorDetails,"advisorDetails");
  const [InvoiceDetails,SetInvoiceDetails]=useState()
	const {user}=useSelector(state=>state.authUser.user)

  console.log(ServiceProvider,"user")
  return (
    <div>
        {
            InvoiceDetails ?
            <>
            
            <div className="d-flex justify-content-between">
               <div>
               <h3>
                الفواتير
                </h3>
               </div>
                <div>
                <button>
                   <ArrowBackIosIcon />
                </button>
                </div>
            </div>
            <hr/>

            <div>
               <div>
               <span>
                فاتورة ضريبية
                </span>
                <span>
                {
                    InvoiceDetails?.code
                }
                </span>
               </div>
               <div>
                <span>
                تاريخ الفاتورة
                </span>
                <span>
                {
                                moment(InvoiceDetails?.created_at).locale("ar").format('DD MMM YYYY h:mm:ss a')
                            }
                </span>
               </div>
            </div>
<div className="row">
<div className="col-md-6">
            <RctCard>
        <RctCardContent>
            <div className="d-flex " style={{gap:"10px"}}>
            <img src="" />
            <h3>
            {
                ServiceProvider?.company_name_ar
            }
            </h3>
            </div>
            <ul>
                <li className="list-item d-flex">
                    <p>
                    رقم التسجيل الضريبي
                    </p>
                    <p>
                    {
                        ServiceProvider?.tax_nom
                    }
                    </p>
                </li>
                <li className="list-item d-flex">
                    <p>
                    الدولة
                    </p>
                    <p>
                    السعودية
                    </p>
                </li>
                <li className="list-item d-flex">
                    <p>
                    المدينة
                    </p>
                    <p>
                    {
                        ServiceProvider?.city
                    }
                    </p>
                </li>
                <li className="list-item d-flex">

                </li>
                <li className="list-item">

                </li>
            </ul>

        </RctCardContent>
            </RctCard>

            </div>
            <div className="col-md-6">
            <RctCard>
        <RctCardContent>
            <div className="d-flex " style={{gap:"10px"}}>
            {/* <img src="" /> */}
						<img src={require(`Assets/img/mylogo.png`)} style={{maxWidth:"200px"}}/>

            <h3 style={{alignSelf:"center"}}>
            مجموعة ألفا للاستشارات المهنية
            </h3>
            </div>
            <ul>
                <li className="list-item d-flex">
                    <p>
                        رقم التسجيل الضريبي:
                    </p>
                    <p>
                    ٧٧٤٧٧٥٧٧٥٧٥٨٨٧
                    </p>
                </li>
                <li className="list-item d-flex">
                    <p>
                    الدولة:
                    </p>
                    <p>
                    السعودية
                    </p>
                </li>
                <li className="list-item d-flex">
                    <p>
                        
                    المدينة:
                    </p>
                    <p>
                    الرياض
                    </p>
                </li>
                <li className="list-item d-flex">

                </li>
                <li className="list-item d-flex">

                </li>
            </ul>

        </RctCardContent>
            </RctCard>

            </div>
</div>
<table className="table table-hover ">
            <thead>
              <th>الخدمة</th>
              <th>تصنيف الخدمة</th>
              <th> تاريخ بدء الخدمة</th>
              <th>تكلفة الخدمة</th>
              <th>الضرائب (15%)</th>
              <th>
              التكلفة شاملة الضريبة
              </th>
              <th>
              المبلغ المستحق
              </th>
            </thead>
            <tbody>
                {
                    JSON.parse(InvoiceDetails?.meta)?.service ? 
                    <>
                    <tr>
                        <td>
                            {InvoiceDetails?.service_name}
                        </td>
                        <td></td>

                        <td>
                            {
                                moment(InvoiceDetails?.created_at).locale("ar").format('DD MMM YYYY h:mm:ss a')
                            }
                        </td>
                        <td>
                            {
                                InvoiceDetails?.cost - InvoiceDetails?.tax
                            }
                        </td>
                        <td>
                            {
                                InvoiceDetails?.tax
                            }
                        </td>
                        <td>
                            {
                                InvoiceDetails?.cost
                            }
                        </td>
                        <td>
                            {
                                InvoiceDetails?.cost
                            }
                        </td>

                    </tr>
                    </>
                    :null
                }

            
             
            </tbody>
          </table>
            </>

            : 
            <table className="table table-hover ">
            <thead>
              <th>ID</th>
              <th>فاتورة ضريبية</th>
              <th>تاريخ الفاتورة</th>
              <th>الخدمة</th>
              <th>المبلغ</th>
              <th></th>
            </thead>
            <tbody>
              {ServiceProvider?.user?.invoices &&
              ServiceProvider?.user?.invoices?.length
                ? ServiceProvider?.user?.invoices?.map((invoice) => (
                    <tr>
                      <td>{invoice.id}</td>
                      <td>{invoice.code}</td>
                      <td>{invoice.created_at}</td>
                      <td>{JSON.parse(invoice.meta).service?.title}</td>
                      <td>{invoice.cost}</td>
                      <td>
                        <Tooltip title={"common.edit"} placement="top">
                          <button
                            className="border-0"
                            style={{ background: "#23D381", color: "#fff" }}
                            onClick={()=>{
                                console.log(invoice,"invoice details")
                                SetInvoiceDetails(invoice)
                            }}
                          >
                            <i className=" ti-eye m-1"></i>
                          </button>
                        </Tooltip>
                      </td>
                    </tr>
                  ))
                : null}
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
        }
   
    </div>
  );
};
export default InvoiceTable;
