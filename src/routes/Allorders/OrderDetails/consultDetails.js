import React, { useEffect, useState } from "react";
import { useLocation, useHistory,useParams } from "react-router-dom";
import { Helmet } from "react-helmet";
// // page title bar
import PageTitleBar from "Components/PageTitleBar/PageTitleBar";
// // intl messages
import IntlMessages from "Util/IntlMessages";
import PerPage from "Components/shared/PerPage";
import { Pagination } from "@material-ui/lab";
import Rating from '@material-ui/lab/Rating';

import { RctCard, RctCardContent } from "Components/RctCard";
import { FormGroup, Label, Input, ButtonGroup, Button, Progress, Row, Col } from "reactstrap";
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

import VideocamIcon from '@material-ui/icons/Videocam';
const ConsultDetails = () => {
  const [rSelected, setRSelected] = useState(null);
  const [steps, setSteps] = useState();
  const [result, setResult] = useState();
  const [rquiredOptions, setRequiredOptions] = useState([]);
  const [limit,setLimit]=useState(10)
  const [page,setPage]=useState(1)
  const { id } = useParams();
  const history=useHistory()
	const {user}=useSelector(state=>state.authUser.user)
  const client = user.category == "admin" ? axios.create({
    baseURL: "https://estithmar.arabia-it.net/api/admin",
  }):  axios.create({
    baseURL: "https://estithmar.arabia-it.net/api",
  })
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
 console.log(user,"user order")
 const goToZoomLink=(link)=>{
  if(link){
      window.open(link,"_blank")
  }
}
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
      if(id && user.category =="admin"){
        client.get(`/advisor-schedules/${id}`).then(res=>{
          setOrder(res.data.data)
           
        })
        
      }else if(id && user.category !="admin"){
        
        client.get(`/advisor/advisor-schedules/${id}?token=${localStorage.getItem("token")}`).then(res=>{
          setOrder(res.data.data)
        })
      }
  },[id,page])
  console.log(order,"order")
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
                    {order?.created_at && 
                    moment(order?.created_at).locale("ar").format('DD MMM YYYY h:mm:ss a')
                   }
                  </span>
                </div>
                <div>
    <StatusDropDown inorder={true}  activationStatus={order?.status} id={order?.id} client={client} url={`service-request/${order?.id}`}/>
                </div>
              </div>
              
              <div className="mt-3 row">
              <table className="table table-hover w-100">
              <thead>
                    <th>
                    مجال الاستشارة
                    </th>
                    <th>
                    تاريخ الاستشارة
                    </th>
                    <th>
                    مدة الاستشارة
                    </th>
                    
                    <th>
                    تكلفة الاستشارة
                    </th>
                    <th>
                    </th>
                   
                  </thead>
                  <tbody>
                    <td>
                      {order?.advisor?.fields?.map((field)=>field.name)}
                    </td>
                    <td>
                      {
                        moment(order?.date).locale("ar").format('DD MMM YYYY') + " / " +
                        order?.time
                      }
                    </td>
                    <td>
                      {
                     order?.schedule?.nom_hours

                      }
                    </td>
                    <td>
                    {order?.cost}
                      
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
     
        <div className="row">
        {
          user.category !="advisor" && 
                    <div className="col-md-4 col-sm-12"> 
                    <RctCard>
                    <RctCardContent>
                    <div>
                          <h3 className="title" style={{position:"relative"}}>
                          المستشار
                          </h3>
                        </div>
                        <div className="d-flex" style={{gap:"10px"}} >
                        <img src={order?.service_provider?.files?.find(file=>file.title =="profile")?.path ? `https://estithmar.arabia-it.net${order?.service_provider?.files?.find(file=>file.title =="profile")?.path}`:  NoImage } style={{border:""}} height={"100px"}  width={"auto"}/>
                            <span style={{alignSelf:"center"}}>
                              {order?.advisor?.ar_name}
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
                                  {order?.advisor?.user?.email}
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
        } 
        <div className="col-12">
        <RctCard>
          <RctCardContent>
          <div>
                <h3 className="title" style={{position:"relative"}}>
                رابط الاستشارة
                </h3>
              </div>
          <Row gutter={[16,16]} className="mt-2">
                                        <Col lg={10} md={10} sm={12} xs={12}>
                                        <Input  style={{textAlign:"left"}} type="text" disabled value={order?.link}/>
                                 
                                        </Col>
                                        <Col lg={2} md={2} sm={12} xs={12}>
                                        <Button 
                                        onClick={()=>goToZoomLink(`${order?.link}?token=${localStorage.getItem("token")}`)}
                                        size="large" style={{background:"none",borderColor:"#A5A5A5",padding:"0px 30px",borderRadius:"0px"}}>
                                            
                                        <VideocamIcon style={{fontSize:"25px",color:"#A5A5A5",margin:"-9px",}}/>
                                        <p style={{color:"#A5A5A5",padding:"15px",display:"inline-block"}}>
                                            ارسال
                                            </p>
                                   </Button>
                                        </Col>
                                 
                                    </Row>
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
              {
                user.category =="admin" ||    user.category =="advisor"? 
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
                          : 
                         <div className="text-center">
                           <button className="w-50" style={{color:"#fff" ,background:"#150941",border:"none" ,padding:"6px"}} >
                            طلب اجتماع
                          </button>
                         </div>
              }
              
            </RctCardContent>
          </RctCard>

          </div>
         {
          user.category =="admin"  || user.category =="advisor" ? 
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
                    تكلفة الاستشارة
                    </span>
                    <span>
                      {" "}
                      {order?.cost}
                    </span>
                  </li>
                  <li className="order-list-item d-flex justify-content-between" >
                    <span>
                    ضريبة القيمة المضافة (15%)
                    </span>
                    <span>
                      {" "}
                      {+order?.cost * .15 }
                    </span>
                  </li>
                  <li className="order-list-item d-flex justify-content-between">
                    <span>
                    التكلفة شاملة الضريبة
                    </span>
                    <span>
                      {" "}
                      { +order?.cost + order?.cost * .15}
                    </span>
                  </li>
                  <li className="order-list-item d-flex justify-content-between"> 
                    <span>
                    التكلفة النهائية

                    </span> 
                    <span>
                      {" "}
                      {+order?.cost + order?.cost * .15}
                      
                    </span>
                  </li>
                
                
                </ul>
              </dvi>
          </RctCardContent>
          </RctCard>
          </div>
          :    
          <div className="col-md-8 col-sm-12">
            <RctCard>
          <RctCardContent>

    <h3 Style={{
      color: "#150941",
      padding: "10px 0px",
      borderBottom: "1px solid #eee",
      marginBottom: "10px",
    }}>
    تقييم الوقف
    </h3>
    <div className="row">
        <div className="col-md-8 col-sm-12">
            <div className="row ">
                <div className="col-lg-6 col-md-6 col-sm-12">
                    <p style={{color:"#9c9c9c"}}>
                        سرعة التجاوب
                    </p>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12">
                    <Rating name="read-only" value={4} readOnly />
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12">
                    <p style={{color:"#9c9c9c"}}>
                        جودة الخدمات
                    </p>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12">
                    <Rating name="read-only" value={4} readOnly />

                </div>
                <div className="col-lg-6 col-md-6 col-sm-12">
                    <p style={{color:"#9c9c9c"}}>
                        السعر
                    </p>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12">
                    <Rating name="read-only" value={4} readOnly />

                </div>
                <div className="col-lg-6 col-md-6 col-sm-12">
                    <p style={{color:"#9c9c9c"}}>
                        مدى الاستفادة من الخدمة
                    </p>

                </div>
                <div className="col-lg-6 col-md-6 col-sm-12">
                    <Rating name="read-only" value={4} readOnly />

                </div>
            </div>
        </div>
        <div className='text-center col-lg-4 col-md-4 col-sm-12' style={{ alignSelf: "center" }}>
            <h4 style={{ color: "#150941" }}>
                اجمالي التقييم
            </h4>
            <Rating  style={{margin:"auto"}} name="read-only" value={4} readOnly />

        </div>
    </div>
          </RctCardContent>
          </RctCard>
          </div>
         }
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
                    order?.appointment_note?.map((note)=>(
                      <li>
                       <div style={{color:"#150941"}}>
                       <img src={noteImage} style={{width:"19px"}}/>
                        {" "}
                        {note.type}
                        {moment(order?.updated_at).locale("ar").format('DD MMM YYYY')}
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
              count={Math.ceil(order?.appointment_note_count / limit)}
              page={page}
              onChange={(e, value) => {
                setPage(value);
           
              }}
            />
            </>
              </div>
                <div>
                  <button onClick={()=>setIsOpen(!isopen)} className="btn" style={{background:"#7EA831",color:"#fff"}}> 
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
                  {
                        order?.logs?.map((log,index)=><tr>
                            <td>{JSON.parse(log.meta).request_status == 1 ? "مفعل" : JSON.parse(log.meta).request_status == 0 ? "جاري العمل " : "مرفوض" }</td>
                            <td>{JSON.parse(log.meta).log_type}</td>
                            <td>{JSON.parse(log.meta).name}</td>
                            <td>{JSON.parse(log.meta).category =="service-provider" ? "مزود خدمة " : "وقف" }</td>  
                            <td>{
                    moment(log.created_at).locale("ar").format('DD MMM YYYY h:mm:ss a')
                            
                            }</td>
                            <td></td>


                        </tr>)
                    }
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
        <NoteModal isopen={isopen} inConsult={true} setIsOpen={setIsOpen} serviceRequestId={id} setOrder={setOrder}/>
    </div>
  );
};
export default ConsultDetails;
