import React from "react";
import { dataTypes } from "Constants/constants";
import { FormattedMessage } from "react-intl";
import moment from "moment";
import { Badge } from 'reactstrap';
import { DropdownToggle, DropdownMenu, Dropdown } from 'reactstrap';
import StatusDropDown from "Components/shared/StatusDropDown"
import { Link } from "react-router-dom";
const { TEXT, ACTIONS, FUNC,DROPDOWN } = dataTypes;

export const TagsData = [
  {
    headerId: "ID",
    dataRef: "id",
    dataType: TEXT,
  },
  {
    headerId: "التصنيفات الموضوعية",
    dataType: FUNC,
    func:(record)=> record.title 
  },
  {
    headerId: "الحالة",
    dataRef: "logo",
    dataType: FUNC,
    func: (record, locale) => record.is_active =="0" ? "متوقف" :"منشور",
  },

 
  { headerId: "common.actions", dataType: ACTIONS },
];
