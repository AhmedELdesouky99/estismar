import React, { useEffect, useState } from "react";
import { useLocation, useHistory,useParams } from "react-router-dom";
import { Helmet } from "react-helmet";
// // page title bar
import PageTitleBar from "Components/PageTitleBar/PageTitleBar";
// // intl messages
import IntlMessages from "Util/IntlMessages";

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
  const [Service, setService] = useState(
    {
      "title" : "",
      "description" : "",
      "provider_id" : user?.category == "service-provider"  || user?.category =="provider-employee"? user?.id : "" ,
      "field_id" : "",
  
      "executive_steps" : [], 
      "executive_result" : [],
  
      "cost" :"1000", 
      "tax_ratio" : "10", 
      "support_ratio" : "50", 
      "cost_after_study" : false,
  
      "executive_time_type" : "", 
      "executive_time" : "", 
      "stages_of_delivery" : [ 
         
      ], 
      "service_requirment" : [
        
      ], 
      "service_border" : [
         
      ]
  }
  );
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
        client.get(`/service-request/${id}`).then(res=>{
          setOrder(res.data.data)
            // const border= JSON.parse(res.data.data.service_border)
            // const service_requirment=res.data.data.service_requirment
            // const stages_of_delivery=JSON.parse(res.data.data.stages_of_delivery)
            // const executive_steps=JSON.parse(res.data.data.executive_steps)
            // const executive_result=JSON.parse(res.data.data.executive_result)
            // setService({
            //   title:res.data.data.title,
            //   field_id:res.data.data.field_id,
            //   provider_id:user?.category == "service-provider"  || user?.category =="provider-employee" ? user?.id :res.data.data.service_provider.user_id ,
            //   description:res.data.data.description,
            //   service_border:border,
            //   service_requirment:service_requirment,
            //   executive_time:res.data.data.executive_time,
            //   stages_of_delivery:stages_of_delivery,
            //   cost:res.data.data.cost,
            //   tax_ratio:res.data.data.tax_ratio,
            //   cost_after_study:res.data.data.cost_after_study,
            //   executive_time_type:res.data.data.executive_time_type,
            //   executive_steps:executive_steps,
            //   executive_result:executive_result,
            //   support_ratio:res.data.data.support_ratio

            // })
            // setRSelected(res.data.data.executive_time_type =="month" ? 2 : res.data.data.executive_time_type == "day" ? 1 : 3)
        })
        
      }
  },[id])
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
                   <CollapsibleTable  Delivery={order && !order.service_request_deliveries.length? JSON.parse(order?.service?.stages_of_delivery) :  order && order.service_request_deliveries.length ?order.service_request_deliveries :[]}/>
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
                      1000
                    </span>
                  </li>
                  <li className="order-list-item d-flex justify-content-between" >
                    <span>
                    ضريبة القيمة المضافة (15%)
                    </span>
                    <span>
                      {" "}
                      150
                    </span>
                  </li>
                  <li className="order-list-item d-flex justify-content-between"> 
                    <span>
                    التكلفة شاملة الضريبة
                    </span> 
                    <span>
                      {" "}
                      1150
                    </span>
                  </li>
                  <li className="order-list-item d-flex justify-content-between">
                    <span>
                    مقدار الدعم (50%)
                    </span>
                    <span>
                      {" "}
                      (575)
                    </span>
                  </li>
                  <li className="order-list-item d-flex justify-content-between">
                    <span>
                    تكلفة نهائية للخدمة  
                    </span>
                    <span>
                      {" "}
                      575
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
            </RctCardContent>
          </RctCard>
            <div className="row justify-content-end mt-2 mb-2" style={{margin:"0px"}}>
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
        <NoteModal isopen={isopen}  setIsOpen={setIsOpen}/>
    </div>
  );
};
export default AddEditService;
