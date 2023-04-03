import React from "react";
import { dataTypes } from "Constants/constants";
import { FormattedMessage } from "react-intl";
import moment from "moment";
import { Badge } from 'reactstrap';
import { DropdownToggle, DropdownMenu, Dropdown } from 'reactstrap';
import StatusDropDown from "Components/shared/StatusDropDown"
import { Link } from "react-router-dom";
const { TEXT, ACTIONS, FUNC,DROPDOWN } = dataTypes;

export const TeamData = [
  {
    headerId: "ID",
    dataRef: "id",
    dataType: TEXT,
  },
  {
    headerId: "اسم العضو",
    dataType: FUNC,
    func:(record)=> <Link  style={{color:"#A5A5A5"}} to={`/app/orders/${record?.id}`}>{ record?.name}</Link> 
  },
  {
    headerId: "القسم /الادارة",
    dataType: FUNC,
    func:(record)=> <Link  style={{color:"#A5A5A5"}} to={`/app/service-provider/${record?.service_provider?.user_id}`}>{ record?.service_provider?.company_name_ar}</Link> 
  },
  {
    headerId: "البريد الالكتروني",
    dataRef: "logo",
    dataType: FUNC,
    func: (record, locale) => record?.email,
  },
  {
    headerId: "رقم الجوال",
    dataRef: "logo",
    dataType: FUNC,
    func: (record, locale) => record?.phone,
  },


  {
    headerId: "حالة الطلب",
    dataType: DROPDOWN,

  },
 
  { headerId: "common.actions", dataType: ACTIONS },
];
