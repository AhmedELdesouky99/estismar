import React from "react";
import { dataTypes } from "Constants/constants";
import { FormattedMessage } from "react-intl";
import moment from "moment";
import { Badge } from 'reactstrap';
import { DropdownToggle, DropdownMenu, Dropdown } from 'reactstrap';
import StatusDropDown from "Components/shared/StatusDropDown"
const { TEXT, ACTIONS, FUNC,DROPDOWN } = dataTypes;
import { Link, useHistory } from "react-router-dom";

export const OrderData = [
  {
    headerId: "ID",
    dataRef: "id",
    dataType: TEXT,
  },
  {
    headerId: "اسم الخدمة",
    dataType: FUNC,
    func: (record, locale) => record?.service?.title,
    
  },
 
  {
    headerId: "مزود الخدمة",
    dataRef: "logo",
    dataType: FUNC,
    func: (record, locale) =><Link  style={{color:"#A5A5A5"}} to={`/app/services/${record.id}`}>{ record.service_provider?.company_name_ar}</Link>,
  },
  {
    headerId: "الاوقاف",
    dataRef: "logo",
    dataType: FUNC,
    func: (record, locale) => record.asset_owner?.asset_name_ar
    ,
  },
  {
    headerId: "تاريخ الطلب",
    dataRef: "logo",
    dataType: FUNC,
    func: (record, locale) => moment(record?.created_at).locale("ar").format('DD MMM YYYY h:mm:ss a'),
  },
  {
    headerId: "تاريخ التعديل",
    dataRef: "logo",
    dataType: FUNC,
    func: (record, locale) => moment(record?.updated_at).locale("ar").format('DD MMM YYYY h:mm:ss a'),
  },
 
 
  {
    headerId: "الحالة",
    dataType: DROPDOWN,

  },
 
  { headerId: "common.actions", dataType: ACTIONS },
];
