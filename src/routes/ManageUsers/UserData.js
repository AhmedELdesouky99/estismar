import React from "react";
import { dataTypes } from "Constants/constants";
const { TEXT, ACTIONS, FUNC,DROPDOWN } = dataTypes;

export const UserData = [
  {
    headerId: "ID",
    dataRef: "id",
    dataType: TEXT,
  },
  {
    headerId: "الاسم",
    dataType: TEXT,
    dataRef: "name",
  },
  {
    headerId: "البريد الالكتروني",
    dataType: TEXT,
    dataRef: "email",
  },
  {
    headerId: "الجوال",
    dataType: TEXT,
    dataRef: "phone",
  },
  {
    headerId: "الصلاحيات",
    dataType: TEXT,
    dataRef: "category",
  },
  {
    headerId: "حالة الحساب",
    dataType: DROPDOWN,
  },
 
  { headerId: "common.actions", dataType: ACTIONS },
];
