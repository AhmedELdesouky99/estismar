import React from "react";
import { dataTypes } from "Constants/constants";
import { FormattedMessage } from "react-intl";
import moment from "moment";
import { Badge } from 'reactstrap';
import { DropdownToggle, DropdownMenu, Dropdown } from 'reactstrap';
import StatusDropDown from "Components/shared/StatusDropDown"
const { TEXT, ACTIONS, FUNC,DROPDOWN } = dataTypes;

export const ServiceData = [
  {
    headerId: "ID",
    dataRef: "id",
    dataType: TEXT,
  },
  {
    headerId: "اسم الخدمة",
    dataType: TEXT,
    dataRef: "title",
  },
 
  {
    headerId: "مزود الخدمة",
    dataRef: "logo",
    dataType: FUNC,
    func: (record, locale) => record.service_provider?.company_name_ar,
  },
  {
    headerId: "تصنيف الخدمة",
    dataRef: "logo",
    dataType: FUNC,
    func: (record, locale) => record.service_provider?.company_name_ar,
  },
  {
    headerId: " تكلفة الخدمة",
    dataRef: "logo",
    dataType: FUNC,
    func: (record, locale) => record?.cost,
  },
  {
    headerId: " مقدار الدعم",
    dataRef: "logo",
    dataType: FUNC,
    func: (record, locale) => record.support_ratio,
  },
 
  {
    headerId: "الحالة",
    dataType: DROPDOWN,

  },
 
  { headerId: "common.actions", dataType: ACTIONS },
];
