import React from "react"
import { FormattedMessage } from "react-intl"
import { Alert } from "Constants/constants";

const ServiceTable=({withcheckbox,service})=>{
    return(
        <>
        <p className="title m-0" style={{position:"relative"}}>
        الخدمة
        </p>
        <table className="table table-hover mt-4" style={{borderBottom:"1px solid #eee"}}>
        <thead>
          <tr data-testid="header-row">
            {withcheckbox && (
              <th>
                <Checkbox
                  // indeterminate={numSelected > 0 && numSelected < rowCount}
                  checked={allchecked}
                  onChange={onSelectAllClick}
                  inputProps={{ "aria-label": "select all desserts" }}
                />
              </th>
            )}
            {["اسم الخدمة","تصنيف الخدمة","مدة التنفيذ","التكلفة","الدعم","حالة الخدمة"]?.map((header, idx) => (
              <th key={JSON.stringify(idx)} align="center">
                <div
                  key={header}
                  role="button"
                  className={"pointer"}
                  // onKeyDown={() => header?.handleAction()}
                  // onClick={() => header?.handleAction()}
                  tabIndex={0}
                >
                  <span data-testid="capitalized-header" style={{ textTransform: "capitalize" }}>
                   
                  
                      
                      <FormattedMessage id={header || Alert("Missing Header ID")} />
                    
                  
                  </span>
                </div>
              </th>
            ))}
          </tr>
        </thead>

        <tbody>
          { service && ["1"]?.map((record, idx) => (
            <tr key={JSON.stringify(idx)} data-testid={`data-tr-${idx}`}>
              {["title","field","executive_time","cost","support_ratio","is_active"]?.map((data, index) => (
                <>
                  <td key={JSON.stringify(index)} align={`${data?.align || ""}`}>
                   { data == "executive_time" ? <> {service[data]}  <FormattedMessage id={service["executive_time_type"]} /> </>: data == "field" ? service[data].name : service[data]}
                  </td>
                </>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      </>

    )
}
export default ServiceTable