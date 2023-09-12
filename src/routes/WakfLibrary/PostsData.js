import React from "react";
import { dataTypes } from "Constants/constants";
import { FormattedMessage } from "react-intl";
import moment from "moment";
import { Badge } from 'reactstrap';
import { DropdownToggle, DropdownMenu, Dropdown } from 'reactstrap';
import StatusDropDown from "Components/shared/StatusDropDown"
import { Link } from "react-router-dom";
const { TEXT, ACTIONS, FUNC,DROPDOWN } = dataTypes;

export const PostsData = [
  {
    headerId: "ID",
    dataRef: "user_id",
    dataType: TEXT,
  },
  {
    headerId: "العنوان (ar)",
    dataType: FUNC,
    func:(record)=> <Link  style={{color:"#A5A5A5"}} to={`/app/owners-assets/${record.user_id}`}>{ record.asset_name_ar}</Link> 
  },
  {
    headerId: "التصنيفات الموضوعية",
    dataRef: "logo",
    dataType: FUNC,
    func: (record, locale) => record.created_at,
  },
  {
    headerId:  "تاريخ النشر",
    dataRef: "logo",
    dataType: FUNC,
    func: (record, locale) => record.created_at,
  },
  {
    headerId: " الصفحة الرئيسية",
    dataRef: "logo",
    dataType: FUNC,
    func: (record, locale) => record.created_at,
  },
  

  {
    headerId: "الحالة",
    dataType: DROPDOWN,

  },
 
  { headerId: "common.actions", dataType: ACTIONS },
];
