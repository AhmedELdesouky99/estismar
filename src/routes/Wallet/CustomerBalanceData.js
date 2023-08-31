import React from "react";
import { dataTypes } from "Constants/constants";
import { FormattedMessage } from "react-intl";
import moment from "moment";
import { Badge } from 'reactstrap';
import { DropdownToggle, DropdownMenu, Dropdown } from 'reactstrap';
import StatusDropDown from "Components/shared/StatusDropDown"
const { TEXT, ACTIONS, FUNC,DROPDOWN } = dataTypes;
import { Link, useHistory } from "react-router-dom";

export const CustomerBalanceData = [
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
    headerId: "رصيد حالي",
    dataRef: "logo",
    dataType: FUNC,
    func: (record, locale) => record.valid_balance
    ,
  },
  {
    headerId: "ارصدة معلقة",
    dataRef: "logo",
    dataType: FUNC,
    func: (record, locale) => record.pending_balance,
  },
  {
    headerId: " اجمالي ارباح",
    dataRef: "logo",
    dataType: FUNC,
    func: (record, locale) => record.valid_balance + record.pending_balance,
  },
  {
    headerId: "تاريخ الانضمام",
    dataRef: "logo",
    dataType: FUNC,
    func: (record, locale) => record.user.created_at,
  },

];
