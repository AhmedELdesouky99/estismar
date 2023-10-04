import React from "react";
import { dataTypes } from "Constants/constants";
import { FormattedMessage } from "react-intl";
import moment from "moment";
import { Badge } from 'reactstrap';
import { DropdownToggle, DropdownMenu, Dropdown } from 'reactstrap';
import StatusDropDown from "Components/shared/StatusDropDown"
import { Link } from "react-router-dom";
const { TEXT, ACTIONS, FUNC,DROPDOWN } = dataTypes;

export const ServiceData = [
  {
    headerId: "ID",
    dataRef: "id",
    dataType: TEXT,
  },
  {
    headerId: "الخدمة",
    dataType: FUNC,
    func:(record)=> <Link  style={{color:"#A5A5A5"}} to={`/app/orders/${record.id}`}>{ record?.service?.title}</Link> 
  },
  {
    headerId: "مزود الخدمة",
    dataType: FUNC,
    func:(record)=> <Link  style={{color:"#A5A5A5"}} to={`/app/service-provider/${record.service_provider.user_id}`}>{ record.service_provider.company_name_ar}</Link> 
  },
  {
    headerId: "تاريخ الطلب",
    dataRef: "logo",
    dataType: FUNC,
    func: (record, locale) => record.created_at,
  },
  {
    headerId: "  تاريخ التعديل",
    dataRef: "logo",
    dataType: FUNC,
    func: (record, locale) => record.updated_at,
  },


  {
    headerId: "حالة الطلب",
    dataType: DROPDOWN,

  },
 
  { headerId: "common.actions", dataType: ACTIONS },
];
