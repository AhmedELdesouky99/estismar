import React from "react";
import { dataTypes } from "Constants/constants";
import { FormattedMessage } from "react-intl";
import moment from "moment";
import { Badge } from 'reactstrap';
import { DropdownToggle, DropdownMenu, Dropdown } from 'reactstrap';
import StatusDropDown from "Components/shared/StatusDropDown"
const { TEXT, ACTIONS, FUNC,DROPDOWN } = dataTypes;

export const AdvisorData = [
  {
    headerId: "ID",
    dataRef: "user_id",
    dataType: TEXT,
  },
  {
    headerId: "المستشار",
    dataType: FUNC,
    func: (record, locale) =>record.ar_name,
    
  },
  {
    headerId: "تاريخ الأنضمام",
    dataRef: "created_at",
    dataType: TEXT,
    
  },
  {
    headerId: "الحالة",
    dataType: DROPDOWN,

  },
 
  { headerId: "common.actions", dataType: ACTIONS },
];
