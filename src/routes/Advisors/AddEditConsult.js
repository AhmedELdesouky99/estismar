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
import moment from "moment";
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
  const [specificDay,setSpecificDay]=useState()
  const [advisorId,setAdvisorId]=useState()
  const [daysOut,setDaysOut]=useState([])
  const [data,setData]=useState({
    schedule:{

  }})
  
const[days,setDays]=useState([])

  const [serviceborder, setServiceBorder] = useState({
    title: "",
    price: 0,
  });
const toggle=()=>setModal(!modal)


  useEffect(() => {
    client.get("/service-requirment").then((res) => {
      const options = res.data.data?.map((one) => ({
        label: one.title,
        value:one.title,
      }));
      setRequiredOptions(options);
    });
  }, []);

 const EditConsult =()=>{
  
 }
 const SaveConsult=()=>{
  client
  .post("/advisor-schedules", {
    ...data,
    advisor_id: user.category !="advisor" ? data.advisor_id ? data.advisor_id: advisorId : user.id


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
 const AddTime=()=>{
  if(rSelected ==2){
      const DataCopied =data 
      const dailyArr=DataCopied?.schedule?.daily
      if(!dailyArr){
        DataCopied.schedule.daily=[
          
            {
              "day"  : "Sun",
              "times" : [DataCopied.time]
          },
          {
              "day"  : "Mon",
              "times" : [DataCopied.time]

          },
          {
              "day"  : "Tue",
              "times" : [DataCopied.time]

          },
          {
              "day"  : "Wed",
              "times" : [DataCopied.time]

          },
          {
              "day"  : "Thu",
              "times" : [DataCopied.time]

          },
          {
              "day"  : "Fri",
              "times" : [DataCopied.time]
              
          },
          {
            "day"  : "Sat",
            "times" : [DataCopied.time]
            
        }
          
        ]
        console.log(data,"data ofof")
        // setData(
        //   ...data,
        //   DataCopied
        // )
        toggle()
      }
      else{
        const arrmodify=dailyArr.map((dayone)=>({
          "day"  : dayone.day,
          times:[...dayone.times,DataCopied.time]
        }))
        DataCopied.schedule.daily=arrmodify
        setData({
          ...data,
          DataCopied
        })
        toggle()
        
      }
  }  else if(rSelected ==3){
    const DataCopied =data 
    const customearr=DataCopied?.schedule?.custome
    if(customearr){
      const arrmodify=customearr.map((dayone)=>({
        "day"  : dayone.day,
        times:[...dayone.times,DataCopied.time]
      }))
      DataCopied.schedule.custome=arrmodify
      setData({
        ...data,
        DataCopied
      })
      toggle()
    }else{
      DataCopied.schedule.custome= days.map((day)=>({
        "day"  : day,
        times:[DataCopied.time]
      }))
      setData({
        ...data,
        DataCopied
      })
      toggle()
    }
    console.log(days,"days")
  }else {
    const DataCopied =data 
    const oncearr=DataCopied?.schedule?.once
    if(oncearr){
      const arrmodify=oncearr.map((dayone)=>({
        "day"  : dayone.day,
        times:[...dayone.times,DataCopied.time]
      }))
      DataCopied.schedule.once=arrmodify
      setData({
        ...data,
        DataCopied
      })
      toggle()
    }else{
      DataCopied.schedule.once= days.map((day)=>({
        "day"  : day,
        times:[DataCopied.time]
      }))
      setData({
        ...data,
        DataCopied
      })
      toggle()
    }
  }

 }
 const handelChangeAdvisor=(id)=>{
  client.get(`/advisor-schedules?advisor_schedule=${id}`).then((res)=>{
    setAdvisorId(id)
    var alldays=[]
    if(res.data?.data?.days?.daily?.length){
      alldays=[...res.data.data.days.daily]
    }
    if(res.data?.data?.days?.once){
      alldays=[...alldays,...res.data.data.days.once]
    }
    if(res.data?.data?.days?.custome){
      alldays=[...alldays,...res.data.data.days.custome]

    }
    if(!res.data?.data?.days?.daily?.length && !res.data?.data?.days?.once  && !res.data?.data?.days?.custome){
      setData({
        schedule:{

        }
      })
      setDaysOut([])
      setActiveTab(null)
      setSpecificDay([])
      
      return
    }
    // const alldays=[...res.data.data.days.daily,...res.data.data.days.once,...res.data.data.days.custome]
    setDaysOut(alldays)
    setData({
      ...data,
      schedule:res?.data?.data?.days,
      cost:res?.data?.data?.cost,
      nom_hours:res?.data?.data?. nom_hours,
      advisor_id:id

    })
  })
 }
 useEffect(()=>{
if( user.category =="advisor" ){
  handelChangeAdvisor(user.id)

}
 },[user])
 console.log(data,"data karem")
  return (
    <div className="clients-wrapper">
      <Helmet>
        <title>{"الخدمات"}</title>
      </Helmet>
      <PageTitleBar
        title={<IntlMessages id="الخدمات" />}
        match={location}
        enableBreadCrumb
        lastElement={"اضافة استشارات"}
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
                    handelChangeAdvisor(sel.value)
                 
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
                  <Input  value={data?.nom_hours ? data?.nom_hours : "" } onChange={(e)=>setData({...data,nom_hours:e.target.value})}/>
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
                  <Input  value={data?.cost ? data?.cost : ""} onChange={(e)=>setData({...data,cost:e.target.value})} />
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
                          console.log(daysOut,"daysOut")
                          
                          const getDay=daysOut.filter((dayf)=>dayf.day == day)
                          console.log(getDay,"getDay")
                          setSpecificDay(getDay)
                          
                        }}
                        style={{zIndex: activeTab ==index ? 0 :"" }}
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
        <div className="col-md-10">
                  <div
                    className="card mt-2"
                    style={{ borderColor: "#D4B265", minHeight: "100px" }}
                  >
                    <div className="row" style={{ margin: "3px" }}>
                      {
                        specificDay?.map((oneday)=> oneday.times?.map((time, index) => (
                          <div className="col-md-3 mt-2">
                            <div
                              className="d-flex"
                              style={{
                                background: "#CF4949",
                                padding: "5px 10px",
                                justifyContent: "space-between",
                              }}
                            >
                              <div style={{ color: "#FFFFFF" }}>
                                {time} - {+time.split(":")[0] + +data.nom_hours +`:${time.split(":")[1]}` }
                                {console.log(moment(time).add(1,"hours"),"ssss")}
                              </div>
                              <div>
                                <CloseIcon
                                  style={{
                                    width: "19px",
                                    height: "19px",
                                    borderRadius: "50px",
                                    background: "#fff",
                                    color: "#CF4949",
                                    cursor: "pointer",
                                  }}
                                  onClick={() => {
                                  console.log(specificDay,"specificDay",data)
                                  }}
                                />
                              </div>
                            </div>
                          </div>
                        )))
                      
                      
                      }
                    </div>
                  </div>
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
                          onChange={(e)=>{
                            var addMlSeconds = 60 * 60 * 1000;
                            var newDateObj = new Date(addMlSeconds + e.target.value);
                            console.log(newDateObj,"ssstime")
                            setData({
                              ...data,
                              time:e.target.value
                            })}
                          }
                          
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
            //  toggle()

             AddTime(data)
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
