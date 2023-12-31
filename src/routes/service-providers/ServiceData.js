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
    dataRef: "user_id",
    dataType: TEXT,
  },
  {
    headerId: "مزودالخدمة",
    dataType: FUNC,
    dataRef: "company_name_ar",
    func: (record, locale) => <Link  style={{color:"#A5A5A5"}} to={`/app/service-provider/${record.user_id}`}>{ record.company_name_ar}</Link> ,

  },
  {
    headerId: "تاريخ الانضمام",
    dataRef: "logo",
    dataType: FUNC,
    func: (record, locale) => moment(record?.created_at).locale("ar").format('DD MMM YYYY h:mm:ss a')
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
