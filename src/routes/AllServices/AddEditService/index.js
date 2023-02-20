import React, { useEffect, useState } from "react";
import { useLocation, useHistory } from "react-router-dom";
import { Helmet } from "react-helmet";
// // page title bar
import PageTitleBar from "Components/PageTitleBar/PageTitleBar";
// // intl messages
import IntlMessages from "Util/IntlMessages";

import { RctCard, RctCardContent } from "Components/RctCard";
import { FormGroup, Label, Input, ButtonGroup, Button } from "reactstrap";
import Switch from 'react-toggle-switch';

import axios from "axios";
import { FormattedMessage } from "react-intl";
import AddIcon from '@material-ui/icons/Add';
const client = axios.create({
  baseURL: "https://estithmar.arabia-it.net/api/admin",
});

const AddEditService = () => {
    const [rSelected, setRSelected] = useState(null);
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
                    <Label for="exampleSelect">الدولة</Label>
                    <Input
                      id="exampleSelect"
                      name="select"
                      type="select"
                      style={{ borderColor: "#D4B265" }}
                    >
                      <option selected>المملطة العربيه السعودية</option>
                    </Input>
                  </FormGroup>
                </div>
              </div>
              <div className="col-md-4">
                <div>
                  <FormGroup>
                    <Label for="exampleSelect">الدولة</Label>
                    <Input
                      id="exampleSelect"
                      name="select"
                      type="select"
                      style={{ borderColor: "#D4B265" }}
                    >
                      <option selected>المملطة العربيه السعودية</option>
                    </Input>
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
                      type="select"
                      style={{ borderColor: "#D4B265" }}
                      //   value={}
                      onChange={(e) => {}}
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
                          fontWeight: "bold",
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
                            fontWeight: "bold",
                            marginRight: "16px",
                          }}
                        >
                          وصف الخدمة
                        </p>
                      </label>
                    </div>
                    <div className="col-md-10">
                      <Input
                        style={{ borderColor: "#D4B265" }}
                        placeholder={"ادخل خطوات التنفيذ كل خطوة على حدا"}
                        type="text"
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
                      ></div>
                    </div>
                    <div className="col-12">
                      <label class="container">
                        <input type="checkbox" />
                        <span class="checkmark" style={{ right: "0px" }}></span>
                        <p
                          style={{
                            fontSize: "27px",
                            color: "#D4B265",
                            fontWeight: "bold",
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
                        type="text"
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
                      ></div>
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
                
            <div className="d-flex" style={{columnGap:"10px"}}>
                <div>
              <ButtonGroup style={{padding:"0px 10px" ,border:"1px solid #D4B265"}}>
                <Button
                  className="service-time"
                  outline
                  onClick={() => setRSelected(1)}
                  active={rSelected === 1}
                >
                  يوم
                </Button>
                <Button
                className="service-time"
                  outline
                  onClick={() => setRSelected(2)}
                  active={rSelected === 2}
                >
                  شهر
                </Button>
                <Button
                  className="service-time"
                  outline
                  onClick={() => setRSelected(3)}
                  active={rSelected === 3}
                >
                  سنة
                </Button>
              </ButtonGroup>
                </div>
                <div style={{alignSelf:"center"}}>
                <Switch  on={true}/>
                </div>
            </div>
            <div className="row mt-2">
                    <div className="col-md-3">
                            <Input
                                style={{ borderColor: "#D4B265" }}
                                placeholder={"90"}
                                type="text"
                                className="interval"
                                style={{color:"#D4B265",fontWeight:"bold"}}
                            />
                    </div>
                    <span style={{fontWeight:"bold",color:"#9C9C9C"}}>
                        {
                            rSelected ==1 ? "يوم" : rSelected == 2 ? "شهر" : "سنة"
                        }
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
                            fontWeight: "bold",
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
                      />
                    </div>
                    <div className="col-md-2">
                      <Input
                        style={{ borderColor: "#D4B265" }}
                        placeholder={
                         "المده الزمنية"
                        }
                        type="text"
                      />
                    </div>
                    <div className="col-md-2">
                      <Input
                        style={{ borderColor: "#D4B265" }}
                        placeholder={
                         "يوم"
                        }
                        type="text"
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
                      >
                        <AddIcon />
                      </button>
                    </div>
                    <div className="col-md-8">
                        <div className="card mt-2" style={{borderColor:"#D4B265" ,minHeight:"100px"}}>

                        </div>

                    </div>

            </div>
            <div className="row">
                <div className="col-md-12">
                <p className="title"> متطلبات الخدمة</p>

                </div>
                <div className="col-md-10">
                <Input
                        style={{ borderColor: "#D4B265" }}
                        placeholder={
                         "اختر من القائمة / ادخل متطلبات خدمتك"
                        }
                        type="text"
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
                      >
                        <AddIcon />
                      </button>
                    </div>
                    <div className="col-md-10">
                        <div className="card mt-2" style={{borderColor:"#D4B265" ,minHeight:"100px"}}>

                        </div>

                    </div>
                

            </div>
            <div className="row">
                <div className="col-md-12">
                <p className="title"> متطلبات الخدمة</p>

                </div>
                <div className="col-md-10">
                <Input
                        style={{ borderColor: "#D4B265" }}
                        placeholder={
                         "اختر من القائمة / ادخل متطلبات خدمتك"
                        }
                        type="text"
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
                      >
                        <AddIcon />
                      </button>
                    </div>
                    <div className="col-md-10">
                        <div className="card mt-2" style={{borderColor:"#D4B265" ,minHeight:"100px"}}>

                        </div>

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
