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
    dataRef: "id",
    dataType: TEXT,
  },
  {
    headerId: "العنوان (ar)",
    dataType: FUNC,
    func:(record)=> record.title 
  },
  {
    headerId: "التصنيفات الموضوعية",
    dataRef: "logo",
    dataType: FUNC,
    func: (record, locale) => record.category,
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
    func: (record, locale) => record.is_main_page =="0" ? "لا" :"نعم",
  },
  
  {
    headerId: " الصفحة الرئيسية",
    dataRef: "logo",
    dataType: FUNC,
    func: (record, locale) => record.is_active =="0" ? "متوقف" :"منشور",
  },

 
  { headerId: "common.actions", dataType: ACTIONS },
];
