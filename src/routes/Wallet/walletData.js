import React from "react";
import { dataTypes } from "Constants/constants";
import { FormattedMessage } from "react-intl";
import moment from "moment";
import { Badge } from 'reactstrap';
import { DropdownToggle, DropdownMenu, Dropdown } from 'reactstrap';
import StatusDropDown from "Components/shared/StatusDropDown"
const { TEXT, ACTIONS, FUNC,DROPDOWN } = dataTypes;
import { Link, useHistory } from "react-router-dom";

export const WalletData = [
  {
    headerId: "ID",
    dataRef: "id",
    dataType: TEXT,
  },
  {
    headerId: "بواسطة",
    dataType: FUNC,
    func: (record, locale) => record.user.name,
    
  },
 
  {
    headerId: "نوع الحساب",
    dataRef: "logo",
    dataType: FUNC,
    func: (record, locale) =>record.user.category,
  },
  {
    headerId: "نوع المعاملة",
    dataRef: "logo",
    dataType: FUNC,
    func: (record, locale) => record.methods
    ,
  },
  {
    headerId: "المبلغ",
    dataRef: "logo",
    dataType: FUNC,
    func: (record, locale) => record.amount,
  },
 
 
 
  
 
  { headerId: "common.actions", dataType: ACTIONS },
];
