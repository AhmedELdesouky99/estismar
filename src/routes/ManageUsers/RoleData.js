import React from "react";
import { dataTypes } from "Constants/constants";
const { TEXT, ACTIONS, FUNC,DROPDOWN } = dataTypes;

export const RoleData = [
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
    headerId: "الوصف",
    dataType: TEXT,
    dataRef: "description",
  },
  {
    headerId: "عدد المستخدمين",
    dataType: TEXT,
    dataRef: "users_count",
  },
 
 
  { headerId: "common.actions", dataType: ACTIONS },
];
