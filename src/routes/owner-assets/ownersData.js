import React from "react";
import { dataTypes } from "Constants/constants";
import { FormattedMessage } from "react-intl";
import moment from "moment";
import { Badge } from 'reactstrap';
import { DropdownToggle, DropdownMenu, Dropdown } from 'reactstrap';
import StatusDropDown from "Components/shared/StatusDropDown"
import { Link } from "react-router-dom";
const { TEXT, ACTIONS, FUNC,DROPDOWN } = dataTypes;

export const OwnersData = [
  {
    headerId: "ID",
    dataRef: "user_id",
    dataType: TEXT,
  },
  {
    headerId: "الأوقاف",
    dataType: FUNC,
    func:(record)=> <Link  style={{color:"#A5A5A5"}} to={`/app/owners-assets/${record.user_id}`}>{ record.asset_name_ar}</Link> 
  },
  {
    headerId: "تاريخ الانضمام",
    dataRef: "logo",
    dataType: FUNC,
    func: (record, locale) => moment(record?.created_at).locale("ar").format('DD MMM YYYY h:mm:ss a')
  },

  {
    headerId: "الحالة",
    dataType: DROPDOWN,

  },
 
  { headerId: "common.actions", dataType: ACTIONS },
];
