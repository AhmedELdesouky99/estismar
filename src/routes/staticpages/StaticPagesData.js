import React from "react";
import { dataTypes } from "Constants/constants";
import { FormattedMessage } from "react-intl";
import moment from "moment";
// import { Badge } from 'reactstrap';
import { DropdownToggle, DropdownMenu, Dropdown } from 'reactstrap';
import StatusDropDown from "Components/shared/StatusDropDown"
const { TEXT, ACTIONS, FUNC,DROPDOWN } = dataTypes;
import { Link, useHistory } from "react-router-dom";
import Badge from '@material-ui/core/Badge';

export const StaticPagesData = [
  {
    headerId: "ID",
    dataRef: "id",
    dataType: TEXT,
  },
  {
    headerId: "عنوان الصفحة",
    dataType: FUNC,
    func: (record, locale) => record.title,
    
  },
 
  {
    headerId: " الحالة",
    dataRef: "logo",
    dataType: FUNC,
    func: (record, locale) => record.is_published ? <div style={{width:"120px",background:"#31CE77",color:"#fff",textAlign:"center",padding:"5px",padding:"5px"}}>
      منشور
  </div> :<div style={{width:"120px",background:"#FF0404",color:"#fff",textAlign:"center",padding:"5px",padding:"5px"}}>
      غير منشور
  </div> ,
  },
 

  { headerId: "common.actions", dataType: ACTIONS },
 
];
