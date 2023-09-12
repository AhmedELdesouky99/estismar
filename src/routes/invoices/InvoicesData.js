import React from "react";
import { dataTypes } from "Constants/constants";
import { FormattedMessage } from "react-intl";
import moment from "moment";
import { Badge } from 'reactstrap';
import { DropdownToggle, DropdownMenu, Dropdown } from 'reactstrap';
import StatusDropDown from "Components/shared/StatusDropDown"
const { TEXT, ACTIONS, FUNC,DROPDOWN } = dataTypes;
import { Link, useHistory } from "react-router-dom";

export const InvoicesData = [
  {
    headerId: "ID",
    dataRef: "id",
    dataType: TEXT,
  },
  {
    headerId: "فاتورة ضريبية",
    dataType: FUNC,
    func: (record, locale) => record.code,
    
  },
 
  {
    headerId: "تاريخ الفاتورة",
    dataRef: "logo",
    dataType: FUNC,
    func: (record, locale) =>record.created_at,
  },
  {
    headerId: "المبلغ",
    dataRef: "logo",
    dataType: FUNC,
    func: (record, locale) => record.cost,
  },

  { headerId: "common.actions", dataType: ACTIONS },
 
];
