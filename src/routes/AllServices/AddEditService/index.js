import React, { useEffect, useState } from "react";
import { useLocation, useHistory,useParams } from "react-router-dom";
import { Helmet } from "react-helmet";
// // page title bar
import PageTitleBar from "Components/PageTitleBar/PageTitleBar";
// // intl messages
import IntlMessages from "Util/IntlMessages";

import { RctCard, RctCardContent } from "Components/RctCard";
import { FormGroup, Label, Input, ButtonGroup, Button } from "reactstrap";
// import Switch from "react-toggle-switch";
import Switch from "@material-ui/core/Switch";

import axios from "axios";
import { FormattedHTMLMessage, FormattedMessage } from "react-intl";
import AddIcon from "@material-ui/icons/Add";
import CloseIcon from "@material-ui/icons/Close";
import ServiceProviderDropDown from "../../../components/shared/ServiceProviderDropDown";
import FieldsDropDown from "../../../components/shared/FieldsDropDown";
import Select from "react-select";

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
  const [Delivery, setDelivery] = useState({
    title:"",
    count: 10,
    count_type: "day",
  });
  const [serviceborder, setServiceBorder] = useState({
    title: "",
    price: 0,
  });
  const [serviceRequirements, setServiceRequirements] = useState({
    id: 1,
    title: "عقد التاسيس",
  });
  const [Service, setService] = useState(
    {
      "title" : "",
      "description" : "",
      "provider_id" : "",
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
    client.get("/required-files").then((res) => {
      const options = res.data.data?.map((one) => ({
        label: one.title,
        value: one.id,
      }));
      setRequiredOptions(options);
    });
  }, []);
  useEffect(()=>{
      if(id){
        client.get(`/service/${id}`).then(res=>{
            const border= JSON.parse(res.data.data.service_border)
            const service_requirment=JSON.parse(res.data.data.service_requirment)
            const stages_of_delivery=JSON.parse(res.data.data.stages_of_delivery)
            const executive_steps=JSON.parse(res.data.data.executive_steps)
            const executive_result=JSON.parse(res.data.data.executive_result)
            setService({
              title:res.data.data.title,
              field_id:res.data.data.field_id,
              provider_id:res.data.data.service_provider.user_id,
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
  return (
    <div className="clients-wrapper">
      <Helmet>
        <title>{"الخدمات"}</title>
      </Helmet>
      <PageTitleBar
        title={<IntlMessages id="الخدمات" />}
        match={location}
        enableBreadCrumb
      />

      <div className="col-md-11">
        <RctCard>
          <RctCardContent>
            <div className="row">
              <div className="col-md-4">
                <div>
                  <FormGroup>
                    <Label for="exampleSelect">مزود الخدمة</Label>
                    {
                   
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
                      style={{ borderColor: "#D4B265" }}
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
            </div>
          </RctCardContent>
        </RctCard>
        <div className="col-md-12">
          <div className="row">
            <div className="col-md-8">
              <RctCard>
                <RctCardContent>
                  <div>
                    <label class="container">
                      <input type="checkbox" />
                      <span class="checkmark" style={{ right: "0px" }}></span>
                      <p
                        style={{
                          fontSize: "27px",
                          color: "#D4B265",
                          marginRight: "16px",
                        }}
                      >
                        وصف الخدمة
                      </p>
                    </label>
                    <FormGroup>
                      <Input
                        id="exampleText"
                        name="text"
                        type="textarea"
                        onChange={(e) => {
                          setService({
                            ...Service,
                            description: e.target.value,
                          });
                        }}
                        value={Service.description}
                        style={{
                          height: "90px",
                          resize: "none",
                          borderColor: "#D4B265",
                        }}
                      />
                    </FormGroup>
                  </div>
                  <div className="row gap-3">
                    <div className="col-12">
                      <label class="container">
                        <input type="checkbox" />
                        <span class="checkmark" style={{ right: "0px" }}></span>
                        <p
                          style={{
                            fontSize: "27px",
                            color: "#D4B265",
                            marginRight: "16px",
                          }}
                        >
                          خطوات التنفيذ
                        </p>
                      </label>
                    </div>
                    <div className="col-md-10">
                      <Input
                        style={{ borderColor: "#D4B265" }}
                        placeholder={"ادخل خطوات التنفيذ كل خطوة على حدا"}
                        type="text"
                        value={steps}
                        onChange={(e) => setSteps(e.target.value)}
                      />
                    </div>
                    <div className="col-md-2">
                      <button
                        className="btn"
                        style={{
                          color: "#fff",
                          background: "#005D5E",
                          maxHeight: "41px",
                        }}
                        onClick={() => {
                          const executivesteps = [...Service?.executive_steps];
                          executivesteps.push(steps);
                          setService({
                            ...Service,
                            executive_steps: executivesteps,
                          });
                          setSteps("");
                        }}
                      >
                        <AddIcon />
                      </button>
                    </div>
                    <div className="col-12">
                      <div
                        className="card mt-3"
                        style={{
                          borderColor: "#D4B265",
                          padding: "10px",
                          minHeight: "100px",
                        }}
                      >
                        {
                          Service?.executive_steps?.map((onstep,index)=>(
                            <div
                            className="d-flex mt-2"
                            style={{
                              background: "#CF4949",
                              padding: "5px 10px",
                              justifyContent: "space-between",
                            }}
                          >
                            <div style={{ color: "#FFFFFF" }}>
                              {onstep}
                            </div>
                            <div>
                              <CloseIcon
                                style={{
                                  width: "19px",
                                  height: "19px",
                                  borderRadius: "50px",
                                  background: "#fff",
                                  color: "#CF4949",
                                  cursor:"pointer"
                                }}
                                onClick={() => {
                                  const stagesofDeliveryList = [
                                    ...Service?.executive_steps,
                                  ];
                                  const filterdStagesofDelivery =
                                    stagesofDeliveryList.filter(
                                      (one, idx) => idx != index
                                    );
                                  setServiceBorder({});
                                  setService({
                                    ...Service,
                                    executive_steps:
                                      filterdStagesofDelivery,
                                  });
                                }}
                              />
                            </div>
                          </div>
                          ))
                        }
                      </div>
                    </div>
                    <div className="col-12">
                      <label class="container">
                        <input type="checkbox" />
                        <span class="checkmark" style={{ right: "0px" }}></span>
                        <p
                          style={{
                            fontSize: "27px",
                            color: "#D4B265",
                            marginRight: "16px",
                          }}
                        >
                          مخرجات الخدمة/ مواصفات التسليمات
                        </p>
                      </label>
                    </div>
                    <div className="col-md-10">
                      <Input
                        style={{ borderColor: "#D4B265" }}
                        placeholder={
                          "ادخل مخرجات الخدمة/ مواصفات التسليمات كل على حدا"
                        }
                        value={result}
                        type="text"
                        onChange={(e) => setResult(e.target.value)}
                      />
                    </div>
                    <div className="col-md-2">
                      <button
                        className="btn"
                        style={{
                          color: "#fff",
                          background: "#005D5E",
                          maxHeight: "35px",
                        }}
                        onClick={() => {
                          const executiveresult = [...Service?.executive_result];
                          executiveresult.push(result);
                          setService({
                            ...Service,
                            executive_result: executiveresult,
                          });
                          setResult("");
                        }}
                      >
                        <AddIcon />
                      </button>
                    </div>
                    <div className="col-12">
                      <div
                        className="card mt-3"
                        style={{
                          borderColor: "#D4B265",
                          padding: "10px",
                          minHeight: "100px",
                        }}
                      >
                         {
                          Service?.executive_result?.map((oneresult,index)=>(
                            <div
                            className="d-flex mt-2"
                            style={{
                              background: "#CF4949",
                              padding: "5px 10px",
                              justifyContent: "space-between",
                            }}
                          >
                            <div style={{ color: "#FFFFFF" }}>
                              {oneresult}
                            </div>
                            <div>
                              <CloseIcon
                                style={{
                                  width: "19px",
                                  height: "19px",
                                  borderRadius: "50px",
                                  background: "#fff",
                                  color: "#CF4949",
                                  cursor:"pointer"
                                }}
                                onClick={() => {
                                  const stagesofDeliveryList = [
                                    ...Service?.executive_result,
                                  ];
                                  const filterdStagesofDelivery =
                                    stagesofDeliveryList.filter(
                                      (one, idx) => idx != index
                                    );
                                  setServiceBorder({});
                                  setService({
                                    ...Service,
                                    executive_result:
                                      filterdStagesofDelivery,
                                  });
                                }}
                              />
                            </div>
                          </div>
                          ))
                        }


                      </div>
                    </div>
                  </div>
                </RctCardContent>
              </RctCard>
            </div>
            <div className="col-md-4">
              <RctCard>
                <RctCardContent>
                  <div className="col-12">
                    <p className="title">بيانات التكلفة</p>
                    <div>
                      <Switch
                        inputProps={{ "aria-label": "primary checkbox" }}
                        checked={Service?.cost_after_study}
                        onChange={(e)=>{
                          setService({
                            ...Service,
                            cost_after_study:e.target.checked
                          })
                        }}
                      />
                      <span style={{ color: "#707070" }}>
                        التكلفة بعد دراسة الطلب
                      </span>
                    </div>
                  
               <div>
               <div className="col-md-12">
                      <Label for="exampleSelect" style={{color:"#A5A5A5"}}>تكلفة الخدمة</Label>
                    </div>
                    <div className="col-md-12 d-flex mb-3">
                      <div>
                        <Input
                          style={{
                            borderColor: "#A5A5A5",
                            width: "90%",
                            background: "#E3E3E3",
                          }}
                          className="interval "
                          type="text"
                          value={Service?.cost}
                          onChange={(e) => {
                            setService({
                              ...Service,
                              cost: +e.target.value,
                              tax_ratio: +e.target.value * .15
                            });
                          }}
                        />
                      </div>
                      <div>
                        <span style={{ color: "#9C9C9C" }}>ر.س</span>
                      </div>
                    </div>
               </div>
               <div style={{padding:"10px 0px ",borderBottom:"1px solid #ccc"}}>
               <div className="col-md-12">
                      <Label for="exampleSelect" style={{color:"#A5A5A5",fontSize:"14px"}}> 
                      + ضريبة القيمة المضافة (15%)
                      </Label>
                    </div>
                    <div className="col-md-12 d-flex">
                      <div >
                        <Input
                          style={{
                            borderColor: "#A5A5A5",
                            width: "90%",
                            background: "#E3E3E3",
                          }}
                          className="interval "
                          type="text"
                          value={Service?.tax_ratio}
                          onChange={(e) => {
                            setService({
                              ...Service,
                              tax_ratio: +e.target.value,
                            });
                          }}
                        />
                      </div>
                      <div>
                        <span style={{ color: "#9C9C9C" }}>ر.س</span>
                      </div>
                    </div>
               </div>
               <div className="text-center" style={{color:"#A5A5A5",padding:"10px",borderBottom:"1px dashed #D3B166"}}>
               <p style={{fontSize:"25px"}}>
               التكلفة شاملة الضريبة
               </p>
               <span style={{fontSize:"25px"}}>
                {Service?.cost + Service?.tax_ratio}
               </span>
               <span style={{fontSize:"12px"}}>
                ر.س
               </span>
               </div>
                  </div>
                </RctCardContent>
              </RctCard>
            </div>
          </div>
        </div>
        <div className="col-md-12">
          <RctCard>
            <RctCardContent>
              <div className="col-12">
                <div className="d-flex">
                  <p className="title">مدة التنفيذ</p>
                  <p
                    style={{
                      color: "#A5A5A5",
                      alignSelf: "self-end",
                      fontSize: "15px",
                    }}
                  >
                    اختر الوحدة الزمنية المناسبة لك لتحديد مدة تنفيذ الخدمة سواء
                    بالساعة أو اليوم أو الشهر
                  </p>
                </div>
              </div>
              <label>الوحدة الزمنية</label>

              <div className="d-flex" style={{ columnGap: "10px" }}>
                <div>
                  <ButtonGroup
                    style={{ padding: "0px 10px", border: "1px solid #D4B265" }}
                  >
                    <Button
                      className="service-time"
                      outline
                      onClick={() => {
                        setRSelected(1);
                        setService({
                          ...Service,
                          executive_time_type: "day",
                        });
                      }}
                      active={rSelected === 1}
                    >
                      يوم
                    </Button>
                    <Button
                      className="service-time"
                      outline
                      onClick={() => {
                        setRSelected(2);
                        setService({
                          ...Service,
                          executive_time_type: "month",
                        });
                      }}
                      active={rSelected === 2}
                    >
                      شهر
                    </Button>
                    <Button
                      className="service-time"
                      outline
                      onClick={() => {
                        setRSelected(3);
                        setService({
                          ...Service,
                          executive_time_type: "year",
                        });
                      }}
                      active={rSelected === 3}
                    >
                      سنة
                    </Button>
                  </ButtonGroup>
                </div>
                <div style={{ alignSelf: "center" }}>
                  <Switch inputProps={{ "aria-label": "primary checkbox" }} checked={true}/>
                </div>
              </div>
              <div className="row mt-2">
                <div className="col-md-3">
                  <Input
                    style={{ borderColor: "#D4B265",color: "#D4B265"  }}
                    placeholder={"90"}
                    type="text"
                    onChange={(e) => {
                      setService({
                        ...Service,
                        executive_time: e.target.value,
                      });
                    }}
                    className="interval"
                  />
                </div>
                <span style={{ color: "#9C9C9C" }}>
                  {rSelected == 1 ? "يوم" : rSelected == 2 ? "شهر" : "سنة"}
                </span>
              </div>
              <div className="row">
                <div className="col-12">
                  <label class="container">
                    <input type="checkbox" />
                    <span class="checkmark" style={{ right: "0px" }}></span>
                    <p
                      style={{
                        fontSize: "27px",
                        color: "#D4B265",
                        marginRight: "16px",
                      }}
                    >
                      مراحل التسليم
                    </p>
                  </label>
                </div>
                <div className="col-md-6">
                  <Input
                    style={{ borderColor: "#D4B265" }}
                    placeholder={
                      "ادخل مخرجات الخدمة/ مواصفات التسليمات كل على حدا"
                    }
                    type="text"
                    onChange={(e) => {
                      setDelivery({
                        ...Delivery,
                        title: e.target.value,
                      });
                    }}
                  />
                </div>
                <div className="col-md-2">
                  <Input
                    style={{ borderColor: "#D4B265" }}
                    placeholder={"المده الزمنية"}
                    type="text"
                    onChange={(e) => {
                      setDelivery({
                        ...Delivery,
                        count: e.target.value,
                      });
                    }}
                  />
                </div>
                <div className="col-md-2">
                  <Select
                    options={[
                      { label: "يوم", value: "day" },
                      { label: "شهر", value: "month" },
                      { label: "سنة", value: "year" },
                    ]}
                    placeholder="يوم"
                    onChange={(sel) => {
                      setDelivery({
                        ...Delivery,
                        count_type: sel.value,
                      });
                    }}
                  />
                </div>
                <div className="col-md-2">
                  <button
                    className="btn"
                    style={{
                      color: "#fff",
                      background: "#005D5E",
                      maxHeight: "35px",
                    }}
                    onClick={() => {
                      const DeliveryStage = [...Service?.stages_of_delivery];
                      DeliveryStage.push(Delivery);
                      setDelivery({});
                      setService({
                        ...Service,
                        stages_of_delivery: DeliveryStage,
                      });
                    }}
                  >
                    <AddIcon />
                  </button>
                </div>
                <div className="col-md-8">
                  <div
                    className="card mt-2"
                    style={{ borderColor: "#D4B265", minHeight: "100px" }}
                  >
                    <div className="row" style={{ margin: "3px" }}>
                      {Service?.stages_of_delivery?.map((oneservice, index) => (
                        <div className="col-md-12 mt-2">
                          <div
                            className="d-flex"
                            style={{
                              background: "#CF4949",
                              padding: "5px 10px",
                              justifyContent: "space-between",
                            }}
                          >
                            <div style={{ color: "#FFFFFF" }}>
                              {oneservice?.title}
                            </div>
                            <div className="d-flex">
                              <div
                                style={{ marginLeft: "10px", color: "#fff" }}
                              >
                                {oneservice?.count}{" "}
                                {
                                  <FormattedHTMLMessage
                                    id={oneservice?.count_type || "missing"}
                                  />
                                }
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
                                    const stagesofDeliveryList = [
                                      ...Service?.stages_of_delivery,
                                    ];
                                    const filterdStagesofDelivery =
                                      stagesofDeliveryList.filter(
                                        (one, idx) => idx != index
                                      );
                                    setServiceBorder({});
                                    setService({
                                      ...Service,
                                      stages_of_delivery:
                                        filterdStagesofDelivery,
                                    });
                                  }}
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12">
                  <p className="title"> متطلبات الخدمة</p>
                </div>
                <div className="col-md-10">
                  {/* "service_requirment" */}
                  <Select
                    options={rquiredOptions}
                    onChange={(sel) => {
                      setServiceRequirements({
                        title: sel.label,
                        id: sel.value,
                      });
                    }}
                    placeholder="اختر من القائمة / ادخل متطلبات خدمتك"
                  />
                </div>
                <div className="col-md-2">
                  <button
                    className="btn"
                    style={{
                      color: "#fff",
                      background: "#005D5E",
                      maxHeight: "35px",
                    }}
                    onClick={() => {
                      const serviceRequirementsList = [
                        ...Service?.service_requirment,
                      ];
                      serviceRequirementsList.push(serviceRequirements);
                      setService({
                        ...Service,
                        service_requirment: serviceRequirementsList,
                      });
                    }}
                  >
                    <AddIcon />
                  </button>
                </div>
                <div className="col-md-10">
                  <div
                    className="card mt-2"
                    style={{ borderColor: "#D4B265", minHeight: "100px" }}
                  >
                    <div className="row" style={{ margin: "3px" }}>
                      {Service?.service_requirment?.map((oneservice, index) => (
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
                              {oneservice?.title}
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
                                  const serviceRequirementList = [
                                    ...Service?.service_requirment,
                                  ];
                                  const filterdService =
                                    serviceRequirementList.filter(
                                      (one, idx) => idx != index
                                    );
                                  setServiceBorder({});
                                  setService({
                                    ...Service,
                                    service_requirment: filterdService,
                                  });
                                }}
                              />
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12">
                  <p className="title"> حدود النطاق </p>
                </div>
                <div className="col-md-7">
                  <Input
                    style={{ borderColor: "#D4B265" }}
                    placeholder={"الأمور التي خارج النطاق"}
                    type="text"
                    value={serviceborder.title ? serviceborder.title : ""}
                    onChange={(e) => {
                      setServiceBorder({
                        ...serviceborder,
                        title: e.target.value,
                      });
                    }}
                  />
                </div>
                <div className="col-md-3 d-flex justify-content-between">
                  <div>
                    <Input
                      style={{ borderColor: "#D4B265" }}
                      placeholder={"00"}
                      className="interval"
                      type="text"
                      value={serviceborder.price ? serviceborder.price : ""}
                      onChange={(e) => {
                        setServiceBorder({
                          ...serviceborder,
                          price: +e.target.value,
                        });
                      }}
                    />
                  </div>
                  <div>
                    <span style={{ color: "#9C9C9C" }}>ر.س</span>
                  </div>
                </div>
                <div className="col-md-2">
                  <button
                    className="btn"
                    style={{
                      color: "#fff",
                      background: "#005D5E",
                      maxHeight: "35px",
                    }}
                    onClick={() => {
                      const serviceborderList = [...Service?.service_border];
                      serviceborderList.push(serviceborder);
                      setServiceBorder({});
                      setService({
                        ...Service,
                        service_border: serviceborderList,
                      });
                    }}
                  >
                    <AddIcon />
                  </button>
                </div>
                <div className="col-md-10">
                  <div
                    className="card mt-2"
                    style={{ borderColor: "#D4B265", minHeight: "100px" }}
                  >
                    <div className="row" style={{ margin: "3px" }}>
                      {Service?.service_border?.map((oneservice, index) => (
                        <div className="col-md-12 mt-2">
                          <div
                            className="d-flex"
                            style={{
                              background: "#CF4949",
                              padding: "5px 10px",
                              justifyContent: "space-between",
                            }}
                          >
                            <div style={{ color: "#FFFFFF" }}>
                              {oneservice?.title}
                            </div>
                            <div className="d-flex">
                              <div
                                style={{ marginLeft: "10px", color: "#fff" }}
                              >
                                {oneservice?.price} {" ر.س"}
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
                                    const serviceborderList = [
                                      ...Service?.service_border,
                                    ];
                                    const filterdServiceBorder =
                                      serviceborderList.filter(
                                        (one, idx) => idx != index
                                      );
                                    setServiceBorder({});
                                    setService({
                                      ...Service,
                                      service_border: filterdServiceBorder,
                                    });
                                  }}
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <div className="row justify-content-center mt-3">
        <div className="col-md-4">
          <button
            className="btn btn-block"
           
            style={{ background: "#005D5E", color: "#fff" ,fontSize:"20px"}}
            onClick={()=> id ? EditService(): AddService()}
          >
            حفظ
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
export default AddEditService;
