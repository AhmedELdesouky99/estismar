import { Tooltip } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import { RctCard, RctCardContent } from "Components/RctCard";
import moment from "moment";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import axios from "axios"
import { Helmet } from "react-helmet";
import PageTitleBar from "Components/PageTitleBar/PageTitleBar";
import IntlMessages from "Util/IntlMessages";

const client = axios.create({
    baseURL: "https://estithmar.arabia-it.net/api/" 
   
  });
const MyInvoiceDetails =()=>{
  const [InvoiceDetails,SetInvoiceDetails]=useState()

const {id} =useParams()
  useEffect(()=>{
   
  
    client.post(`auth/invoices/${id}`,{
    token:localStorage.getItem("token")
    }).then(res=>{
        SetInvoiceDetails(res.data.data)
    //   setOwners(res.data.data)
    })

   
},[])
// console.log( InvoiceDetails && InvoiceDetails," JSON.parse(InvoiceDetails?.meta)")
         console.log(InvoiceDetails && JSON.parse(InvoiceDetails?.meta)?.advisorAppointment ,"JSON.parse(InvoiceDetails?.meta)?.advisorAppointment ")

    return(
        <div className="clients-wrapper">
             <Helmet>
         <title>{"الفواتير"}</title>
       </Helmet>
       <PageTitleBar
         title={<IntlMessages id="الفواتير" />}
         match={location}
         enableBreadCrumb
         lastElement={InvoiceDetails?.code}
        
      />
        <div className="d-flex justify-content-between">
           <div>
           <h3>
            الفواتير
            </h3>
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
         InvoiceDetails &&     JSON.parse(InvoiceDetails?.meta)?.advisorAppointment &&
         
         JSON.parse(InvoiceDetails?.meta)?.advisorAppointment?.advisor?.ar_name
        //  console.log(JSON.parse(InvoiceDetails?.meta)?.advisorAppointment ,"JSON.parse(InvoiceDetails?.meta)?.advisorAppointment ")
        }
        </h3>
        </div>
        <ul className="mt-2">
            <li className="list-item d-flex">
                <p>
                رقم التسجيل الضريبي
                </p>
                <p>
                {
                    // ServiceProvider?.tax_nom
                }
                </p>
            </li>
            <li className="list-item d-flex">
                <p>
                الدولة
                </p>
                <p>
                {
                    
         InvoiceDetails &&     JSON.parse(InvoiceDetails?.meta)?.advisorAppointment?.advisor?.resident
                }
                </p>
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
            InvoiceDetails &&     JSON.parse(InvoiceDetails?.meta)?.advisorAppointment ? 
                <>
                <tr>
                    <td>
                        استشارة
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
      <div className="row">
            <div className="col-md-4">
                <RctCard>
                    <RctCardContent>
                        <h3 className="title" style={{position:"relative"}}>
                        تفاصيل التكلفة
                        </h3>
                        <ul className="list">
                            <li className="list-item d-flex justify-content-between">
                                <p>
                                تكلفة الاستشارة
                                </p>
                                <p>
                                {
                            InvoiceDetails?.cost - InvoiceDetails?.tax
                        }
                                </p>
                            </li>
                            <li className="list-item d-flex justify-content-between">
                            <p>
                            ضريبة القيمة المضافة (15%)
                                </p>
                                <p>
                                    {
                                        InvoiceDetails?.tax
                                    }
                                </p>
                            </li>
                            <li className="list-item d-flex justify-content-between">
                            <p>
                            التكلفة شاملة الضريبة
                                </p>
                                <p>
                                    
                                    {
                                        InvoiceDetails?.cost
                                    }
                                </p>

                            </li> 
                            <li className="list-item d-flex justify-content-between">
                            <p>
                            المبلغ المستحق
                                </p>
                                <p>
                                        
                                            {
                                                InvoiceDetails?.cost
                                            }
                                        
                                </p>
                            </li>             


                        </ul>
                    </RctCardContent>
                </RctCard>

            </div>
      </div>
        </div>
    )
}
export default MyInvoiceDetails