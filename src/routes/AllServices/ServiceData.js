import React from "react";
import { dataTypes } from "Constants/constants";
import { FormattedMessage } from "react-intl";
import moment from "moment";
import { Badge } from 'reactstrap';
import { DropdownToggle, DropdownMenu, Dropdown } from 'reactstrap';
import StatusDropDown from "Components/shared/StatusDropDown"
const { TEXT, ACTIONS, FUNC,DROPDOWN } = dataTypes;
import { Link, useHistory } from "react-router-dom";

export const ServiceData = [
  {
    headerId: "ID",
    dataRef: "id",
    dataType: TEXT,
  },
  {
    headerId: "اسم الخدمة",
    dataType: TEXT,
    dataRef: "title",
  },
 
  {
    headerId: "مزود الخدمة",
    dataRef: "logo",
    dataType: FUNC,
    func: (record, locale) =><Link  style={{color:"#A5A5A5"}} to={`/app/services/${record.id}`}>{ record.service_provider?.company_name_ar}</Link>,
  },
  {
    headerId: "تصنيف الخدمة",
    dataRef: "logo",
    dataType: FUNC,
    func: (record, locale) => record.field?.name,
  },
  {
    headerId: " تكلفة الخدمة",
    dataRef: "logo",
    dataType: FUNC,
    func: (record, locale) => record?.cost,
  },
  {
    headerId: " مقدار الدعم",
    dataRef: "logo",
    dataType: FUNC,
    func: (record, locale) => record.support_ratio,
  },
 
  {
    headerId: "الحالة",
    dataType: DROPDOWN,

  },
 
  { headerId: "common.actions", dataType: ACTIONS },
];
