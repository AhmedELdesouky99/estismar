import React from "react";
import { dataTypes } from "Constants/constants";
import { FormattedMessage } from "react-intl";
import moment from "moment";
import { Badge } from 'reactstrap';
import { DropdownToggle, DropdownMenu, Dropdown } from 'reactstrap';
import StatusDropDown from "Components/shared/StatusDropDown"
const { TEXT, ACTIONS, FUNC,DROPDOWN } = dataTypes;
import { Link, useHistory } from "react-router-dom";

export const MyWalletTransactionData = [
  {
    headerId: "ID",
    dataRef: "id",
    dataType: TEXT,
  },
  {
    headerId: "رقم المعاملة",
    dataType: FUNC,
    func: (record, locale) => record.transfer_number,
    
  },
 
  {
    headerId: "التاريخ",
    dataRef: "logo",
    dataType: FUNC,
    func: (record, locale) =>record.created_at,
  },
  {
    headerId: "الحساب",
    dataRef: "logo",
    dataType: FUNC,
    func: (record, locale) => record.bank_account
    ,
  },
  {
    headerId: "المبلغ",
    dataRef: "logo",
    dataType: FUNC,
    func: (record, locale) => record.amount,
  },
  {
    headerId: "الحالة",
    dataRef: "logo",
    dataType: FUNC,
    func: (record, locale) => record.status,
  },

];
