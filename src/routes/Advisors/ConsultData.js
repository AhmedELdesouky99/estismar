import React from "react";
import { dataTypes } from "Constants/constants";
import { FormattedMessage } from "react-intl";
import moment from "moment";
import { Badge } from 'reactstrap';
import { DropdownToggle, DropdownMenu, Dropdown } from 'reactstrap';
import StatusDropDown from "Components/shared/StatusDropDown"
const { TEXT, ACTIONS, FUNC,DROPDOWN } = dataTypes;
import { Link, useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
// const {user}=useSelector(state=>state.authUser.user)

export const ConsultData = [
  {
    headerId: "ID",
    dataRef: "id",
    dataType: TEXT,
  },
  {
    headerId: "المستشار",
    dataType: FUNC,
    func: (record, locale) =>record.advisor?.ar_name,
    
  },
  {
    headerId: "مجال الاستشارة",
    dataType: FUNC,
    func: (record, locale) =>record?.advisor?.fields?.map((field=>field.name)),
    
  },
  {
    headerId: " التاريخ / الساعة",
    dataType: FUNC,
    func: (record, locale) =>moment(`${record.date}T${record.time}`).format("DD/MM/YYYY hh:mm:ss "),
    
  },
  {
    headerId: "الحالة",
    dataType: DROPDOWN,

  },
 
  { headerId: "common.actions", dataType: ACTIONS },
];
