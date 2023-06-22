import React, { useEffect, useState } from "react";
import { useLocation, useHistory,useParams } from "react-router-dom";
import { Helmet } from "react-helmet";
// // page title bar
import PageTitleBar from "Components/PageTitleBar/PageTitleBar";
// // intl messages
import IntlMessages from "Util/IntlMessages";

import { RctCard, RctCardContent } from "Components/RctCard";
import { FormGroup, Label, Input, ButtonGroup, Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
// import Switch from "react-toggle-switch";
import Switch from "@material-ui/core/Switch";

import axios from "axios";
import { FormattedHTMLMessage, FormattedMessage } from "react-intl";
import AddIcon from "@material-ui/icons/Add";
import CloseIcon from "@material-ui/icons/Close";
// import ServiceProviderDropDown from "../../../components/shared/ServiceProviderDropDown";
// import FieldsDropDown from "../../../components/shared/FieldsDropDown";
import Select from "react-select";
import { useSelector } from "react-redux";
import ServiceProviderDropDown from "../../components/shared/ServiceProviderDropDown";
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import FieldsDropDown from "../../components/shared/FieldsDropDown";
import AdvisorsDropDown from "../../components/shared/advisorDropDown";
const client = axios.create({
  baseURL: "https://estithmar.arabia-it.net/api/admin",
});

const AddEditConsult = () => {
  const [rSelected, setRSelected] = useState(null);
  const [steps, setSteps] = useState();
  const [result, setResult] = useState();
  const [modal,setModal]=useState(false)
  const [rquiredOptions, setRequiredOptions] = useState([]);
  const { id } = useParams();
  const history=useHistory()
  const [activeTab,setActiveTab]=useState()
	const {user}=useSelector(state=>state.authUser.user)
  const [data,setData]=useState({})
  
const[days,setDays]=useState([])
  const [Delivery, setDelivery] = useState({
    title:"",
    count: 10,
    count_type: "day",
  });
  const [serviceborder, setServiceBorder] = useState({
    title: "",
    price: 0,
  });
const toggle=()=>setModal(!modal)

  const [serviceRequirements, setServiceRequirements] = useState();
  // const[rSelected,setRSelected]=useState()
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
        client.get(`/service/${id}`).then(res=>{
            const border= JSON.parse(res.data.data.service_border)
            const service_requirment=res.data.data.service_requirment
            const stages_of_delivery=JSON.parse(res.data.data.stages_of_delivery)
            const executive_steps=JSON.parse(res.data.data.executive_steps)
            const executive_result=JSON.parse(res.data.data.executive_result)
            setService({
              title:res.data.data.title,
              field_id:res.data.data.field_id,
              provider_id:user?.category == "service-provider"  || user?.category =="provider-employee" ? user?.id :res.data.data.service_provider.user_id ,
              description:res.data.data.description,
              service_border:border,
              service_requirment:service_requirment,
              executive_time:res.data.data.executive_time,
              stages_of_delivery:stages_of_delivery,
              cost:res.data.data.cost,
              tax_ratio:res.data.data.tax_ratio,
              cost_after_study:res.data.data.cost_after_study,
              executive_time_type:res.data.data.executive_time_type,
              executive_steps:executive_steps,
              executive_result:executive_result,
              support_ratio:res.data.data.support_ratio

            })
            setRSelected(res.data.data.executive_time_type =="month" ? 2 : res.data.data.executive_time_type == "day" ? 1 : 3)
        })
        
      }
  },[id])
  const useStyles = makeStyles((theme) => ({
    container: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      width: 200,
    },
  }));
  
 const AddService=()=>{
  client
  .post("/service", {
    ...Service,
  }).then(res=>{
    if(res.data.success){
      
      swal({
        title: "",
        text:" تم اضافه الخدمة بنجاح",
        icon: "success",
      });
    }
  }).then(()=>{
    setTimeout(()=>{
      history.push("/app/services")
    },2000)
  })
 }
 const EditService=()=>{
  client.put(`service/${id}`,{
    ...Service,
    service_requirment:Service.service_requirment.map((req)=>req.title),
    type : "update",
  }).then((res)=>{
    if(res.data.success){
      swal({
        title: "",
        text:" تم تعديل الخدمة بنجاح",
        icon: "success",
      });
      setTimeout(()=>{
        history.push("/app/services")
      },2000)
    }
  })
 }
 const EditConsult =()=>{
  
 }
 const SaveConsult=()=>{
  client
  .post("/advisor-schedules", {
    ...data,
    type: rSelected == 3 ? "custome" : rSelected == 1 ? "once" :"dialy",
    days:rSelected ==3  || rSelected == 1? days :undefined,
    advisor_id: user.category !="advisor" ? data.advisor_id : user.id


  }).then(res=>{
    if(res.data.success){
      
      swal({
        title: "",
        text:" تم اضافه الاستشارة بنجاح",
        icon: "success",
      });
    }
  }).then(()=>{
    setTimeout(()=>{
      history.push("/app/advisors/Consulting")
    },2000)
  })
 }
 console.log(user,"user in add  " )
  return (
    <div className="clients-wrapper">
      <Helmet>
        <title>{"الخدمات"}</title>
      </Helmet>
      <PageTitleBar
        title={<IntlMessages id="الخدمات" />}
        match={location}
        enableBreadCrumb
        lastElement={Service?.title || "اضافة استشارات"}
      />

      <div className="col-md-12">
        <div className="col-md-12">
        <RctCard>
                <RctCardContent>
          <div className="row">
            <div className="col-md-5">
            <FormGroup>
                    <Label for="exampleSelect"> المستشار </Label>
                 {
                  user.category !="advisor" ?
                  <AdvisorsDropDown  
                  onChange={(sel) => {
                    console.log(sel,"karem mohamed ")
                    setData({
                      ...data,
                      advisor_id: sel.value,
                    });
                  }}
                  selectedItem={data?.advisor_id}
                 
                 
                 />    
                 : <p>
                  {user.name }
                 </p> 
                 }
                
                  </FormGroup>
              
            </div>
            <div className="col-md-3">
            <FormGroup>
                    <Label for="exampleSelect"> مدة الاستشارة </Label>
                 <div className="d-flex" style={{gap:"10px"}}>
                  <Input  onChange={(e)=>setData({...data,nom_hours:e.target.value})}/>
                <span style={{alignSelf:"center"}}>
                 ساعه  

                </span>
                  </div>
                  </FormGroup>
              
            </div>
            <div className="col-md-4">
            <FormGroup>
                    <Label for="exampleSelect">  تكلفة الاستشارة </Label>
                 <div className="d-flex" style={{gap:"10px"}}>
                  <Input  onChange={(e)=>setData({...data,cost:e.target.value})} />
                <span style={{alignSelf:"center",width:"-webkit-fill-available"}}>
                ر.س / مدة الاستشارة
                </span>
                  </div>
                  </FormGroup>
              
            </div>
   
    
          </div>
          <div>
            <p>
             الأيام
            </p>
            <div className="row">
            <div className="d-flex" style={{ columnGap: "10px" }}>
                  <ButtonGroup
                  style={{display:"flex",gap:"18px"}}
                  >
                    {
                      ["Sat","Sun","Mon","Tue","Wed","Thu","Fri"].map((day,index)=>(
                        <Button
                        className="daysselect"

                        outline
                        onClick={()=>{
                          setActiveTab(index)
                        }}
                        active={activeTab ==index}
                        // active={rSelected ==2  || (rSelected ==3 && days?.includes(day)) || (rSelected ==1 && days?.includes(day)) } 
                       
                      >
                        {<FormattedMessage id={day} />}
                      </Button>

                      ))
                    }
                  </ButtonGroup>
                  <div className="col-md-2">
                  <button
                    className="btn"
                    style={{
                      color: "#fff",
                      background: "#005D5E",
                      maxHeight: "35px",
                      alignSelf:"center"
                    }}
                    onClick={() => {
                      setModal(!modal)
                    }}
                  >
                    <AddIcon />
                  </button>
                </div>
              </div>

            </div>
          </div>
          </RctCardContent>
              </RctCard>
        </div>
        <div className="row justify-content-center mt-3">
        <div className="col-md-3 mb-2 mt-2">
          <button
            className="btn btn-block"
           
            style={{ background: "#E3E3E3", color: "#A5A5A5" ,fontSize:"20px"}}
            onClick={()=> id ? EditConsult() : SaveConsult()}
          >
            حفظ
          </button>
        </div>
      </div>

      </div>
      <Modal isOpen={modal} size="lg" toggle={toggle}>
        <ModalHeader toggle={toggle}>  موعد استشارة </ModalHeader>
        <ModalBody>
        <div className="col-md-12">
                        <FormGroup>
                        <Label for="exampleEmail">
                        <FormattedHTMLMessage id={"الفترة الزمنية"} />
                        </Label>
                        <Input
                          id="exampleTime"
                          name="time"
                          placeholder="time placeholder"
                          type="time"
                          onChange={(e)=>setData({
                            ...data,
                            time:e.target.value
                          })}
                        />
                    </FormGroup>
                        </div>
                        <div className="col-md-12">
                          <Label>
                          التكرار
                          </Label>
                        <div>
                  <ButtonGroup
                    style={{ padding: "0px 10px", border: "1px solid #D4B265",gap:"10px"}}
                  >
                    <Button
                      className="service-time"
                      outline
                      onClick={() => {
                        setRSelected(1);
                       
                      }}
                      active={rSelected === 1}
                    >
                      مرة واحدة
                    </Button>
                    <Button
                      className="service-time"
                      outline
                      onClick={() => {
                        setRSelected(2);
                      
                      }}
                      active={rSelected === 2}
                    >
                      يومي
                    </Button>
                    <Button
                      className="service-time"
                      outline
                      onClick={() => {
                        setRSelected(3);
                       
                      }}
                      active={rSelected === 3}
                    >
                      مخصص
                    </Button>
                  </ButtonGroup>
                </div>
                <div className="d-flex mt-2 mb-2" style={{ columnGap: "10px" }}>
                  <ButtonGroup
                  style={{display:"flex",gap:"18px"}}
                  >
                    {
                      ["Sat","Sun","Mon","Tue","Wed","Thu","Fri"].map((day,index)=>(
                        <Button
                        className="daysselect"
                        outline 
                        active={rSelected ==2  || (rSelected ==3 && days?.includes(day)) || (rSelected ==1 && days?.includes(day)) } 
                        onClick={()=>{

                          if(days?.includes(day)){
                            const filterDays=days.filter(oneDay=>oneDay != day)
                          setDays(filterDays)

                          }else{
                          setDays([...days ,day])
                            
                          }
                        }}
                      >
                        {<FormattedMessage id={day} />}
                      </Button>

                      ))
                    }
                  </ButtonGroup>
                 
              </div>
                        </div>
                        <div className="alert alert-info " style={{lineHeight:"2"}}>
                            
                          <div>
                          التكرار
                          </div>
                          <div>
                            <span>
                            مرة واحدة
                            {"  "}
                            </span>
                            <span>
                            إضافة موعد الاستشارة مرة واحدة في اليوم / الأيام المحددة وعدم تكرار موعد الاستشارة في الاسبوع التالي.
                            </span>
                            
                          </div>
                          <div>
                            <span>
                            يومي
                            {"           "}
                            </span>
                            <span>
                            إضافة موعد الاستشارة في كل أيام الاسبوع مع تكرار موعد الاستشارة في الاسبوع التالي.
                            </span>

                          </div>
                          <div>
                            <span>
                            مخصص
                            {"     "}
                            </span>
                            <span>
                            إضافة موعد الاستشارة في يوم / أيام مخصصه من الاسبوع مع تكرار موعد الاستشارة في الاسبوع التالي.
                            </span>
                          </div>
                          
                        </div>
        </ModalBody>
        <ModalFooter className="d-flex justify-content-center"> 
          <Button color="" onClick={()=>{
            console.log(data,"dataaa")
             toggle()
          }} className="w-50">
              إضافة   
          </Button>{' '}
          <Button color=""  onClick={()=> {
            setData({})
            toggle()
          }} className="w-50">
            إنهاء      
          </Button>{' '}
          {/* <Button color="secondary" onClick={toggle}>
            Cancel
          </Button> */}
        </ModalFooter>
      </Modal>
    </div>
  );
};
export default AddEditConsult;
