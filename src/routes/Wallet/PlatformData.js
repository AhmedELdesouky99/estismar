import React from "react";
import { dataTypes } from "Constants/constants";
import { FormattedMessage } from "react-intl";
import moment from "moment";
import { Badge } from 'reactstrap';
import { DropdownToggle, DropdownMenu, Dropdown } from 'reactstrap';
import StatusDropDown from "Components/shared/StatusDropDown"
const { TEXT, ACTIONS, FUNC,DROPDOWN } = dataTypes;
import { Link, useHistory } from "react-router-dom";

export const PlatformData = [
  {
    headerId: "ID",
    dataRef: "id",
    dataType: TEXT,
  },
  {
    headerId: "رقم الطلب",
    dataType: FUNC,
    func: (record, locale) => record.code,
    
  },
 
  {
    headerId: "العملية",
    dataRef: "logo",
    dataType: FUNC,
    func: (record, locale) =>record.transaction,
  },
  {
    headerId: " نسبة المنصة",
    dataRef: "logo",
    dataType: FUNC,
    func: (record, locale) => record.platfom_amount
    ,
  },
  {
    headerId: "تاريخ المعاملة",
    dataRef: "logo",
    dataType: FUNC,
    func: (record, locale) => record.created_at,
  },

];
