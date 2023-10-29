import React, { useEffect, useState } from "react";
import { useLocation, useHistory,useParams } from "react-router-dom";
import { Helmet } from "react-helmet";
// // page title bar
import PageTitleBar from "Components/PageTitleBar/PageTitleBar";
// // intl messages
import IntlMessages from "Util/IntlMessages";

import { RctCard, RctCardContent } from "Components/RctCard";
import { FormGroup, Label, Input, ButtonGroup, Button, Badge } from "reactstrap";
// import Switch from "react-toggle-switch";
import Switch from "@material-ui/core/Switch";

import axios from "axios";
import { FormattedHTMLMessage, FormattedMessage } from "react-intl";
import AddIcon from "@material-ui/icons/Add";
import CloseIcon from "@material-ui/icons/Close";
import Select from "react-select";
import { useSelector } from "react-redux";
import FieldsDropDown from "../../components/shared/FieldsDropDown";
import ServiceProviderDropDown from "../../components/shared/ServiceProviderDropDown";
import moment from "moment";

const client = axios.create({
  baseURL: "https://admin.waqfnami.com/api/admin",
});

const TransactionDetails = () => {
  const [rSelected, setRSelected] = useState(null);
  const [steps, setSteps] = useState();
  const [result, setResult] = useState();
  const [rquiredOptions, setRequiredOptions] = useState([]);
  const { id } = useParams();
  const history=useHistory()
  const [requestStatus,setRequestStatus]=useState()
  const[note,setNote]=useState("")
	const {user}=useSelector(state=>state.authUser.user)
console.log(user,"user redux ")
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
  const [info,setInfo]=useState()
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
        client.get(`/wallet/${id}`).then(res=>{
          console.log(res.data.data,"response ")
          setInfo(res.data.data)
          setNote(res.data.data.note)
        
        })
        
      }
  },[id])
  


 const updateRequset=()=>{
  client.put(`wallet/${id}`,{
   status:requestStatus ==1 ?"paid" : "failed",
   note:note
  }).then((res)=>{
    if(res.data.success){
      swal({
        title: "",
        text:" تم تعديل المعامله بنجاح",
        icon: "success",
      });
      setTimeout(()=>{
        history.push("/app/wallet")
      },2000)
    }
  })
 }
  return (
    <div className="clients-wrapper">
      <Helmet>
        <title>{"الخدمات"}</title>
      </Helmet>
      <PageTitleBar
        title={<IntlMessages id="الخدمات" />}
        match={location}
        enableBreadCrumb
        lastElement={"معاملة"}
      />

      <div className="col-md-11">
        <RctCard>
          <RctCardContent>
          <h3>
          المعاملات
          </h3>
          <div className="row">
            <div className="col-md-9">
              <div className="row">
              <div className="col-md-3">
                  <img src={
                      info?.user?.category =="asset-owner" ? "https://admin.waqfnami.com/" + info?.user?.asset_owner_files?.[0]?.path
                      :  info?.user?.category == "service-provider" ? 
                      
                      "https://admin.waqfnami.com/" + info?.user?.service_provider_files?.[0]?.path
                      
                      : 
                      "https://admin.waqfnami.com/" + info?.user?.advisor_files?.[0].path

                  } 
                  className="w-100"
                  />

              </div>
              <div className="col-md-8">
                <div>
                  <h3>
                    {
                      info?.user?.name
                    }
                  </h3>
                </div>
                <div className="d-flex " style={{gap:"30px"}}>
                    <div>
                      <span>
                      نوع الحساب :
                      </span>
                      <span>
                        {
                          info?.user?.category
                        }
                      </span>
                    </div>
                    <div>
                      <span>
                      تأريخ الانضمام :
                      </span>
                      <span>
                        {
                          moment(info?.user?.created_at).locale("ar").format('DD MMM YYYY h:mm:ss a')
                        }
                      </span>
                    </div>
                </div>
              </div>

              </div>
           

            </div>
            <div className="col-md-3">
              <h3>
              <Badge color="success">
                {
                  info?.user?.is_active ==1 ?"مفعل" : "غير مفعل"
                }
              </Badge>
              </h3>
            </div>
            
          </div>
          <div>
            <h2 className="title" style={{position:"relative"}}>بيانات الرصيد </h2>
            </div>
            <div className="container">
              {
                info?.user?.category =="asset-owner" ? 
                <div className="row justify-content-between">
                  <div className="col-md-4">
                    <h1>
                     الرصيد الاجمالي
                    </h1>
                    <p>
                      {
                        info?.user?.wallet?.pending_balance +  info?.user?.wallet?.valid_balance
                      }
                    </p>
                  </div>
                  <div className="col-md-4">
                    <h1>
                    الرصيد المعلق
                    </h1>
                    <p>
                      {
                        info?.user?.wallet?.pending_balance
                      }
                    </p>
                  </div>
                  <div className="col-md-4">
                    <h1>
                    الرصيد المتاح
                    </h1>
                    <p>
                      {
                        info?.user?.wallet?.valid_balance
                      }
                    </p>
                  </div>
              </div>
                
                : 
                <div className="row justify-content-between">
                  
                  <div className="col-md-4">
                    <h1>
                    اجمالي الارباح
                    </h1>
                    <p>
                      {
                        info?.user?.wallet?.pending_balance+  info?.user?.wallet?.valid_balance
                      }
                    </p>
                  </div>
                  <div className="col-md-4">
                    <h1>
                    الرصيد المتاح
                    </h1>
                    <p>
                      {
                        info?.user?.wallet?.valid_balance
                      }
                    </p>
                  </div>
              </div>
              }
            
            </div>
             
            {/* <div className="row">
              <div className="col-md-4">
                <div>
                  <FormGroup>
                    <Label for="exampleSelect">مزود الخدمة</Label>
                    { user?.category == "service-provider"  || user?.category == "provider-employee" ?  <p>
                      {user?.service_provider.company_name_ar}
                    </p>: 
                   
                      <ServiceProviderDropDown
                      onChange={(sel) => {
                        setService({
                          ...Service,
                          provider_id: sel.value,
                        });
                      }}
                      selectedItem={Service.provider_id}
                      
                    />
                    
                    }
                  </FormGroup>
                </div>
              </div>
              <div className="col-md-4">
                <div>
                  <FormGroup>
                    <Label for="exampleSelect">تصنيف الخدمة</Label>
                    <FieldsDropDown
                      onChange={(sel) => {
                        setService({
                          ...Service,
                          field_id: sel.value,
                        });
                      }}
                      selectedItem={Service.field_id}
                    />
                  </FormGroup>
                </div>
              </div>
              <div className="col-md-8">
                <div>
                  <FormGroup>
                    <Label for="exampleEmail">
                      <FormattedMessage id={"اسم الخدمة"} />
                    </Label>
                    <Input
                      id="exampleSelect"
                      name="select"
                      type="text"
                      value={Service?.title}
                      style={{ borderColor: "#7EA831" }}
                      onChange={(e)=>{
                        setService({
                          ...Service,
                          title:e.target.value
                        })
                      }}
                    />
                  </FormGroup>
                </div>
              </div>
            </div> */}
          </RctCardContent>
        </RctCard>
      
        <div className="col-md-12">
          <RctCard>
            <RctCardContent>
              <div className="col-12">
                <div className="d-flex">
                  <p className="title" style={{position:"relative"}}>
                  بيانات المعاملة
                  </p>
                
                </div>
              </div>
            
              <div className="row mt-2">
                <div className="col-md-9">
                <div className="col-md-12 mt-2">
                <FormGroup>
                    <Label for="exampleSelect"> نوع المعاملة</Label>
                    
                   
                      <Input
                      style={{ borderColor: "#7EA831",color: "#7EA831"  }}
                      placeholder={"90"}
                      type="text"
                      value={info?.transaction_type}
                    
                      className="interval"
                    />
                    
                    
                  </FormGroup>
                </div>
               <div className="row">
               <div className="col-md-6 mt-2">
                <FormGroup>
                    <Label for="exampleSelect"
                    >
                      {
                        info?.transaction_type =="withdraw" ? "المبلغ المطلوب سحبه" : "المبلغ"
                      }
                      </Label>
                    
                   
                      <Input
                      style={{ borderColor: "#7EA831",color: "#7EA831"  }}
                      placeholder={"90"}
                      type="text"
                      value={info?.amount}
                    
                      className="interval"
                    />
                    
                    
                  </FormGroup>
                </div>

                <div className="col-md-6 mt-2">
                <FormGroup>
                    <Label for="exampleSelect"
                    
                    >
                      {
                        info?.transaction_type =="withdraw"  ? "رقم الحساب" : "رقم الحوالة"
                      }
                      
                      
                      </Label>
                    
                   
                      <Input
                      style={{ borderColor: "#7EA831",color: "#7EA831"  }}
                      type="text"
                      value={ info?.transaction_type =="withdraw" ? info?.bank_account: info?.transfer_number}
                    
                      className="interval"
                    />
                    
                    
                  </FormGroup>
                </div>
                <label className="w-100"> المراجع</label>

<div className="d-flex" style={{ columnGap: "10px" }}>
  <div>
    <ButtonGroup
      style={{ padding: "0px 10px", border: "1px solid #7EA831" }}
    >
    
      <Button
        className="service-time"
        outline
        onClick={() => {
         setRequestStatus(1)
        }}
        style={{minWidth:"130px",background:"#D8D8D8"}}
      active={requestStatus ==1}
      >
        تاكيد
      </Button>
      <Button
        className="service-time"
        outline
        onClick={() => {
          setRequestStatus(2)
       
        }}
        style={{minWidth:"130px",background:"#D8D8D8"}}
        active={requestStatus ==2}

      >
        رفض
      </Button>
    </ButtonGroup>
  </div>

</div>

               </div>
               <div className="col-md-12 mt-2">
                <FormGroup>
                    <Label for="exampleSelect">ملاحظات المعاملة</Label>
                    
                   
                      <Input
                      style={{ borderColor: "#7EA831",color: "#7EA831"  }}
                      type="textarea"
                      value={info?.note}
                    rows={4}
                      className="interval"
                      onChange={(e)=>{
                        setNote(e.target.value)
                      }}
                    />
                    
                    
                  </FormGroup>
                </div>
                </div>
              <div className="col-md-3">
                {
                  info?.methods =="bank-transfer" && info?.transaction_type =="deposit" ? 
                  <img src={"https://estithmar.arabia-it.net"+info?.transfear_document?.path} className="w-100" />
:null
                }
              </div>
               
              </div>
          
            
           
              <div className="row justify-content-center mt-3">
        <div className="col-md-4">
          <button
            className="btn btn-block"
           
            style={{ background: "#7EA831", color: "#fff" ,fontSize:"20px"}}
            onClick={()=> updateRequset()}
          >
            حفظ
          </button>
        </div>
        <div className="col-md-4">
          <button
            className="btn btn-block"
           
            style={{ background: "#150941", color: "#fff" ,fontSize:"20px"}}
            onClick={()=>history.push("/app/wallet")}
          >
            الغاء
          </button>
        </div>
      </div>
            </RctCardContent>
          </RctCard>
        </div>
      </div>
    </div>
  );
};
export default TransactionDetails;
