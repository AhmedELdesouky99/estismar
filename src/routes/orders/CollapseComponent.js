import React, { useState } from "react";
import { Alert } from "Constants/constants";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Collapse from "@material-ui/core/Collapse";
import IconButton from "@material-ui/core/IconButton";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
import { FormattedMessage } from "react-intl"

const CollapseComponent = ({idx,service,record}) => {
  const [open, setOpen] = useState(false);
  console.log(record,"record")
console.log(JSON.parse(service?.stages_of_delivery),"karem" , record?.count_type )
  return (
    <>
      <tr key={JSON.stringify(idx)} data-testid={`data-tr-${idx}`}>
        <td key={JSON.stringify(idx)}>
          <IconButton
          style={{border:"1px solid #A5A5A5"}}
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </td>
        {["title", "count", "3"]?.map((data, index) => (
          <>
            <td key={JSON.stringify(index)} align={`${data || ""}`}>
                { index ==1 ? 
                <>
                {record?.[data]}
                { record?.[" count_type"] ?  <FormattedMessage id={record?.[" count_type"]} /> : "s"}
                </>
                : index ==2 ?  <>
                <h1><span class="badge badge-primary">جاري العمل</span></h1>
                </>:  record?.[data]}
            </td>
          </>
        ))}
      </tr>
      <tr>
      <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
        <Collapse in={open} timeout="auto" unmountOnExit>
            <div className="w-100 text-center">
                لا توجد بيانات
            </div>
            </Collapse>
      </TableCell>
      
      </tr>
    </>
  );
};

export default CollapseComponent;
