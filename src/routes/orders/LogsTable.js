import React from "react"
import { FormattedMessage } from "react-intl"
import { Alert } from "Constants/constants";

const LogsTable=({withcheckbox,service,orderDetails})=>{
  console.log(orderDetails,"orderDetails logss ")
    return(
        <>
        <p className="title m-0" style={{position:"relative"}}>
        سجل تحديثات الطلب
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
            {["حالة الطلب","التحديث","بواسطة","النوع","التاريخ","ملاحظة"]?.map((header, idx) => (
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
        {/* {
                        orderDetails?.logs?.map((log,index)=><tr>
                            {console.log(JSON.parse(log.meta,"karem"))}
                            <td>{JSON.parse(log.meta).request_status == 1 ? "مفعل" : JSON.parse(log.meta).request_status == 0 ? "جاري العمل " : "مرفوض" }</td>
                            <td>{JSON.parse(log.meta).log_type}</td>
                            <td>{JSON.parse(log.meta).name}</td>
                            <td>{JSON.parse(log.meta).category =="service-provider" ? "مزود خدمة " : "وقف" }</td>  
                            <td>{
                    moment(log.created_at).locale("ar").format('DD MMM YYYY h:mm:ss a')
                            
                            }</td>
                            <td></td>


                        </tr>)
                    } */}
          {/* { service && ["1"]?.map((record, idx) => (
            <tr key={JSON.stringify(idx)} data-testid={`data-tr-${idx}`}>
              {["title","field","executive_time","cost","support_ratio","is_active"]?.map((data, index) => (
                <>
                  <td key={JSON.stringify(index)} align={`${data?.align || ""}`}>
                   { data == "executive_time" ? <> {service[data]}  <FormattedMessage id={service["executive_time_type"]} /> </>: data == "field" ? service[data].name : service[data]}
                  </td>
                </>
              ))}
            </tr>
          ))} */}
        </tbody>
      </table>
      </>

    )
}
export default LogsTable