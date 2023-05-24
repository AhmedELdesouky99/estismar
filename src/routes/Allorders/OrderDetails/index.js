import React, { useEffect, useState } from "react";
import { useLocation, useHistory,useParams } from "react-router-dom";
import { Helmet } from "react-helmet";
// // page title bar
import PageTitleBar from "Components/PageTitleBar/PageTitleBar";
// // intl messages
import IntlMessages from "Util/IntlMessages";
import PerPage from "Components/shared/PerPage";
import { Pagination } from "@material-ui/lab";

import { RctCard, RctCardContent } from "Components/RctCard";
import { FormGroup, Label, Input, ButtonGroup, Button, Progress } from "reactstrap";
// import Switch from "react-toggle-switch";
import Switch from "@material-ui/core/Switch";
import moment from "moment"
import axios from "axios";
import { FormattedHTMLMessage, FormattedMessage } from "react-intl";
import AddIcon from "@material-ui/icons/Add";
import CloseIcon from "@material-ui/icons/Close";
import ServiceProviderDropDown from "../../../components/shared/ServiceProviderDropDown";
import FieldsDropDown from "../../../components/shared/FieldsDropDown";
import Select from "react-select";
import { useSelector } from "react-redux";
import StatusDropDown from "Components/shared/StatusDropDown"
import NoImage from "../../../assets/img/no-image.png";
import noteImage from "../../../assets/img/ic-message.png"
import CollapsibleTable from "./borderTable";
import NoteModal from "./NoteModal";
const client = axios.create({
  baseURL: "https://estithmar.arabia-it.net/api/admin",
});

const AddEditService = () => {
  const [rSelected, setRSelected] = useState(null);
  const [steps, setSteps] = useState();
  const [result, setResult] = useState();
  const [rquiredOptions, setRequiredOptions] = useState([]);
  const [limit,setLimit]=useState(10)
  const [page,setPage]=useState(1)
  const { id } = useParams();
  const history=useHistory()
	const {user}=useSelector(state=>state.authUser.user)
  const [order,setOrder]=useState()
  const[isopen,setIsOpen]=useState(false)
  const [Delivery, setDelivery] = useState({
    title:"",
    count: 10,
    count_type: "day",
  });
  const [serviceborder, setServiceBorder] = useState({
    title: "",
    price: 0,
  });
  const [serviceRequirements, setServiceRequirements] = useState();
 
  useEffect(() => {
    client.get("/service-requirment").then((res) => {
      const options = res.data.data?.map((one) => ({
        label: one.title,
        value:one.title,
      }));
      setRequiredOptions(options);
    });
  }, []);
  useEffect(()=>{
      if(id){
        client.get(`/service-request/${id}?page=${page}`).then(res=>{
          setOrder(res.data.data)
           
        })
        
      }
  },[id,page])
  return (
    <div className="clients-wrapper">
      <Helmet>
        <title>{"الخدمات"}</title>
      </Helmet>
      <PageTitleBar
        title={<IntlMessages id="الخدمات" />}
        match={location}
        enableBreadCrumb
        lastElement={"رقم الطلب"}
      />

      <div className="col-md-12">
        <RctCard>
          <RctCardContent>
              <div className="row justify-content-between">
                <div>
                  <span>
                  رقم الطلب:
                  </span>
                  <span>
                    {order?.code}
                  </span>
                </div>
                <div>
                  <span>
                  تاريخ الإنشاء:
                  </span>
                  <span>
                    {
                    moment(order?.created_at).locale("ar").format('DD MMM YYYY h:mm:ss a')
                   }
                  </span>
                </div>
                <div>
    <StatusDropDown inorder={true}  activationStatus={order?.status} id={order?.id} client={client} url={`service-request/${order?.id}`}/>
                </div>
              </div>
              <div className="row mt-2">
                <div className="row w-100 m-0 justify-content-between">
                  <div>
                  البدء:
                  {order?.start_date}
                  </div>
                  <div>
                  التسليم:
                  {order?.end_date}
                  
                  </div>
                </div>
              <Progress
                value={50}
                className="w-100"
                color="success"
                />
              </div>
              <div className="mt-3 row">
              <table className="table table-hover w-100">
                <thead>
                    <th>
                    اسم الخدمة
                    </th>
                    <th>
                    تصنيف الخدمة
                    </th>
                    <th>
                    مدة التنفيذ
                    </th>
                    <th>
                    التكلفة
                    </th>
                    <th>
                    الدعم
                    </th>
                    <th>
                    حالة الخدمة
                    </th>
                  </thead>
                  <tbody>
                    <td>
                      {order?.service?.title}
                    </td>
                    <td>
                      {order?.service?.field?.name}
                    </td>
                    <td>
                      {order?.service?.executive_time} {order?.service?.executive_time_type}
                    </td>
                    <td>
                    {order?.total}
                      
                    </td>
                    <td>
                      {order?.service?.support_ratio} {"%"}
                    </td>
                    <td>
    <StatusDropDown notAllowed={true} activationStatus={order?.service?.is_active}  client={client}  url={`service-request/${order?.id}`} />

                    </td>

                  </tbody>
              </table>
              </div>
            </RctCardContent>
          </RctCard>
        </div>
        <div className="col-md-12">
        <RctCard>
          <RctCardContent>
          <div>
                <h3 className="title" style={{position:"relative"}}>
                مراحل التسليم
                 </h3>
              </div>
              <div className="mt-3 row">
                   <CollapsibleTable serviceRequestId={id} 
                   setOrder={setOrder}
                   Delivery={order && !order.service_request_deliveries.length? JSON.parse(order?.service?.stages_of_delivery) :  order && order.service_request_deliveries.length ?order.service_request_deliveries :[]}
                   />
              </div>
              
            </RctCardContent>
          </RctCard>
        </div>
        <div className="row">
          <div className="col-md-4 col-sm-12"> 
          <RctCard>
          <RctCardContent>
          <div>
                <h3 className="title" style={{position:"relative"}}>
                مزود الخدمة
                </h3>
              </div>
              <div className="d-flex" style={{gap:"10px"}} >
              <img src={order?.service_provider?.files?.find(file=>file.title =="profile")?.path ? `https://estithmar.arabia-it.net${order?.service_provider?.files?.find(file=>file.title =="profile")?.path}`:  NoImage } style={{border:""}} height={"100px"}  width={"auto"}/>
                  <span style={{alignSelf:"center"}}>
                    {order?.service_provider?.company_name_ar}
                  </span>
              </div>
              <dvi>
                <ul style={{padding:"20px 0px ",listStyleType:"none"}}>
                  <li className="order-list-item">
                    <span>
                    رقم الجوال
                    </span>
                    <span>
                      {" "}
                        {order?.service_provider?.user?.phone}
                    </span>
                  </li>
                  <li className="order-list-item">
                    <span>
                    البريد الالكتروني
                    </span>
                    <span>
                      {" "}
                        {order?.service_provider?.user?.email}
                    </span>
                  </li>
                  <li className="order-list-item"> 
                    <span>
                    الدولة
                    </span> 
                    <span>
                      {" "}
                        المملكة العربيه السعودية
                    </span>
                  </li>
                  <li className="order-list-item">
                    <span>
                    المدينة
                    </span>
                    <span>
                      {" "}
                        {order?.service_provider?.city}
                    </span>
                  </li>
                  <li className="order-list-item">
                    <span>
                    الحي  
                    </span>
                    <span>
                      {" "}
                        {order?.asset_owner?.district}
                    </span>
                  </li>
                </ul>
              </dvi>
          </RctCardContent>
          </RctCard>
          </div>
          <div className="col-md-4 col-sm-12"> 
          <RctCard>
          <RctCardContent>
             <div>
                <h3 className="title" style={{position:"relative"}}>
                الوقف
                </h3>
              </div>
              <div className="d-flex" style={{gap:"10px"}} >
              <img src={order?.asset_owner?.files?.find(file=>file.title =="profile")?.path ? `https://estithmar.arabia-it.net${order?.asset_owner?.file?.find(file=>file.title =="profile")?.path}`:  NoImage } style={{border:""}} height={"100px"}  width={"auto"}/>
                  <span style={{alignSelf:"center"}}>
                    {order?.asset_owner?.asset_name_ar}
                  </span>
              </div>
              <dvi>
                <ul style={{padding:"20px 0px ",listStyleType:"none"}}>
                  <li className="order-list-item">
                    <span>
                    رقم الجوال
                    </span>
                    <span>
                      {" "}
                        {order?.asset_owner?.asset_nom}
                    </span>
                  </li>
                  <li className="order-list-item">
                    <span>
                    البريد الالكتروني
                    </span>
                    <span>
                      {" "}
                        {order?.asset_owner?.user?.email}
                    </span>
                  </li>
                  <li className="order-list-item">
                    <span>
                    الدولة
                    </span>
                    <span>
                      {" "}
                        المملكة العربيه السعودية
                    </span>
                  </li>
                  <li className="order-list-item">
                    <span>
                    المدينة
                    </span>
                    <span>
                      {" "}
                        {order?.asset_owner?.city}
                    </span>
                  </li>
                  <li className="order-list-item">
                    <span>
                    الحي  
                    </span>
                    <span>
                      {" "}
                        {order?.asset_owner?.district}
                    </span>
                  </li>
                </ul>
              </dvi>
              
            </RctCardContent>
          </RctCard>

          </div>
          <div className="col-md-4 col-sm-12"> 
          <RctCard>
          <RctCardContent>
          <div>
                <h3 className="title" style={{position:"relative"}}>
                الفاتورة
                </h3>
              </div>
          
              <dvi>
                <ul style={{padding:"20px 0px ",listStyleType:"none"}}>
                  <li className="order-list-item d-flex justify-content-between">
                    <span>
                    تكلفة الخدمة
                    </span>
                    <span>
                      {" "}
                      {order?.coast + order?.wakf_share_total}
                    </span>
                  </li>
                  <li className="order-list-item d-flex justify-content-between" >
                    <span>
                    ضريبة القيمة المضافة (15%)
                    </span>
                    <span>
                      {" "}
                      {order?.tax_total}
                    </span>
                  </li>
                  <li className="order-list-item d-flex justify-content-between">
                    <span>
                        الملحقات
                    </span>
                    <span>
                      {" "}
                      {order?.extra_total}
                    </span>
                  </li>
                  <li className="order-list-item d-flex justify-content-between"> 
                    <span>
                    التكلفة شاملة الضريبة
                    </span> 
                    <span>
                      {" "}
                      {order?.total}
                    </span>
                  </li>
                
                  <li className="order-list-item d-flex justify-content-between">
                    <span>
                    تكلفة نهائية للخدمة  
                    </span>
                    <span>
                      {" "}
                      {order?.total}
                      
                    </span>
                  </li>
                </ul>
              </dvi>
          </RctCardContent>
          </RctCard>
          </div>
        </div>
        <div className="row">
        
          <div className="col-md-12   col-sm-12"> 
          <RctCard>
          <RctCardContent>
              <div>
                <h3 className="title" style={{position:"relative"}}>
                ملاحظات الطلب
                </h3>
              </div>
              <div>
                <ul style={{listStyleType:"none"}}>
                  {
                    order?.service_request_note?.map((note)=>(
                      <li>
                       <div style={{color:"#005D5E"}}>
                       <img src={noteImage} style={{width:"19px"}}/>
                        {" "}
                        {note.type}
                       </div>
                       <div style={{padding:"0px 20px",color:"#828282"}}>
                        {note.content}
                       </div>
                      </li>
                    ))
                  }
                </ul>
         
           

              </div>
            </RctCardContent>
          </RctCard>
            <div className="row justify-content-between mt-2 mb-2" style={{margin:"0px"}}>
              <div>
              <>
            <Pagination
              count={Math.ceil(order?.service_request_note_count / limit)}
              page={page}
              onChange={(e, value) => {
                setPage(value);
           
              }}
            />
            </>
              </div>
                <div>
                  <button onClick={()=>setIsOpen(!isopen)} className="btn" style={{background:"#D4B265",color:"#fff"}}> 
                  اضف ملاحظة  
                  </button>
                </div>
            </div>
          </div>
       
        </div>
        
        <div className="row">
        <div className="col-md-12">
        <RctCard>
          <RctCardContent>
             
            <div>
                <h3 className="title" style={{position:"relative"}}>
                سجل تحديثات الطلب                </h3>
              </div>
              <div className="mt-3 row">
              <table className="table table-hover w-100">
                <thead>
                    <th>
                    حالة الطلب
                    </th>
                    <th>
                    التحديث
                    </th>
                    <th>
                    بواسطة
                    </th>
                    <th>
                    النوع
                    </th>
                    <th>
                    التاريخ
                    </th>
                    <th>
                    ملاحظة
                    </th>
                  </thead>
                  <tbody>
                    {/* <td>
                      {order?.service?.title}
                    </td>
                    <td>
                      {order?.service?.field?.name}
                    </td>
                    <td>
                      {order?.service?.executive_time} {order?.service?.executive_time_type}
                    </td>
                    <td>
                    {order?.total}
                      
                    </td>
                    <td>
                      {order?.service?.support_ratio} {"%"}
                    </td>
                    <td>
    <StatusDropDown notAllowed={true} activationStatus={order?.service?.is_active}  client={client} />

                    </td> */}

                  </tbody>
              </table>
              </div>
            </RctCardContent>
          </RctCard>
        </div>
        </div>
        <NoteModal isopen={isopen}  setIsOpen={setIsOpen} serviceRequestId={id}/>
    </div>
  );
};
export default AddEditService;
