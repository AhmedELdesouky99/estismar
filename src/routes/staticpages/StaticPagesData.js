import React from "react";
import { dataTypes } from "Constants/constants";
import { FormattedMessage } from "react-intl";
import moment from "moment";
import { Badge } from 'reactstrap';
import { DropdownToggle, DropdownMenu, Dropdown } from 'reactstrap';
import StatusDropDown from "Components/shared/StatusDropDown"
const { TEXT, ACTIONS, FUNC,DROPDOWN } = dataTypes;
import { Link, useHistory } from "react-router-dom";

export const StaticPagesData = [
  {
    headerId: "ID",
    dataRef: "id",
    dataType: TEXT,
  },
  {
    headerId: "عنوان الصفحة",
    dataType: FUNC,
    func: (record, locale) => record.code,
    
  },
 
  {
    headerId: " الحالة",
    dataRef: "logo",
    dataType: FUNC,
    func: (record, locale) =>record.created_at,
  },
 

  { headerId: "common.actions", dataType: ACTIONS },
 
];
