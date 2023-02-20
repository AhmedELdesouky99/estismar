import React from "react";
import { dataTypes } from "Constants/constants";
import { FormattedMessage } from "react-intl";
import moment from "moment";
import { Badge } from 'reactstrap';
import { DropdownToggle, DropdownMenu, Dropdown } from 'reactstrap';
import StatusDropDown from "Components/shared/StatusDropDown"
const { TEXT, ACTIONS, FUNC,DROPDOWN } = dataTypes;

export const ServiceData = [
  {
    headerId: "ID",
    dataRef: "id",
    dataType: TEXT,
  },
  {
    headerId: "مزودالخدمة",
    dataType: TEXT,
    dataRef: "company_name_ar",
  },
  {
    headerId: "تاريخ الانضمام",
    dataRef: "logo",
    dataType: FUNC,
    func: (record, locale) => record.created_at,
  },
  {
    headerId: "مجالات الخدمة",
    dataRef: "field",
    dataType: FUNC,
    func: (record, locale) => record.fields.map((field,index)=> record.fields.length > index+1 ? field.name + "- " : field.name) ,
  },
  {
    headerId: "الحالة",
    dataType: DROPDOWN,
  },
 
  { headerId: "common.actions", dataType: ACTIONS },
];
