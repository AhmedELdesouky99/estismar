/* eslint-disable no-unused-expressions */
/* eslint-disable prettier/prettier */
/* eslint-disable eqeqeq */
/* eslint-disable no-nested-ternary */
/* eslint-disable react/prop-types */
/* eslint-disable radix */
import React, { useState, useRef, useEffect } from "react";
import PropTypes from "prop-types";
import { FormattedMessage, injectIntl, intlShape } from "react-intl";
import { Alert } from "Constants/constants";
import { TextField, Button } from "@material-ui/core";

import { useHistory, useLocation } from "react-router";

// import AllyName from "components/DropDowns/AllyName";
import { Form, FormGroup, Input, Label } from "reactstrap";
import IntlMessages from "Util/IntlMessages";
import DropDownStatus from "../shared/DropDownStatus";
import CustomSelect from "../shared/custom-select";
import FieldsDropDown from "../shared/FieldsDropDown";
import ServiceProviderDropDown from "../shared/ServiceProviderDropDown";
import Select from "react-select";

const trimFields = ["email", "nid"];

export function FiltersAndSearches({
  fields,
  filters,
  refetch,
  submitbtnid,
  setQuery,
  minimumDate,
  maximumDate,
  extraButtons,
  mobile,
  mobileRef,
  setPage,
  role,
  is_active,
  make,
  model,
  car,
  multi,
  manager,
  branch,
  branchmanager,
  coupoun,
  branchesDeletedFilter,
  isDeltedFilterSelected,
  setValue,
  setPageSelect,
  options,
  metadata,
}) {
  const submitBtnRef = useRef();
  const history = useHistory();
  const location = useLocation();
  const [collectedQuery, setcollectedQuery] = useState({});

  // NOTE: Mobile number is set twice.

  /**
   * depends on history location search on mount
   * if we have values this function should pass all values to the corresponding field
   */

  function clearInputs() {
    setMobileNumber("");
    setValue ? setValue(0) : null;
    const query = {};
    setPickupDate(null);
    setDropoffDate(null);
    setPage(1);
    setcollectedQuery(query);
    setQuery(query);
  }

  return (
    <form className="w-100" onSubmit={(e) => e.preventDefault()}>
      <div className="row grid-gap-10 w-100 m-0">
        {fields
          ?.filter((field) => field?.type === "search")
          .map((field) => {
            if (!field.name) return Alert("Please Provide a name");
            return (
              <div className={ role ? "col-sm-12 col-md-10 mt-1"  : "col-sm-12 col-md-3 mt-1"} key={field?.name}>
                <FormGroup>
                  <Label for="exampleEmail">
                    <FormattedMessage id={field?.label} />
                  </Label>
                  <Input
                    style={{ borderColor: "#D4B265" }}
                    id={field?.name}
                    name={
                      field?.placeholder || (
                        <FormattedMessage id={`${field?.name}.placeholder`} />
                      )
                    }
                    placeholder={field.placeholder}
                    onChange={(e) => {
                      setcollectedQuery({
                        ...collectedQuery,
                        [field?.name]: trimFields.includes(field.name)
                          ? e.target.value.trim()
                          : e.target.value.trimStart(),
                      });
                    }}
                    type="text"
                  />
                </FormGroup>
              </div>
            );
          })}
 
        {filters?.includes("fields") && (
          <div className="col-md-3 mt-1">
            <FormGroup>
              <Label for="exampleEmail">
                <FormattedMessage id={"قائمة التصنيفات"} />
              </Label>

              <FieldsDropDown
                onChange={(sel) => {
                  setcollectedQuery({ ...collectedQuery, field_id: sel.value });
                }}
              />
            </FormGroup>
          </div>
        )}
        {filters?.includes("service_provider") && (
          <div className="col-md-3 mt-1">
            <FormGroup>
              <Label for="exampleEmail">
                <FormattedMessage id={"مزود الخدمة"} />
              </Label>

              <ServiceProviderDropDown
                onChange={(sel) => {
                  setcollectedQuery({ ...collectedQuery, service_provider_id: sel.value });
                }}
              />
            </FormGroup>
          </div>
        )}
       {filters?.includes("status") && (
          <div className="col-md-2 mt-1">
            <FormGroup>
              <Label for="exampleEmail">
                <FormattedMessage id={"االحالة"} />
              </Label>
              <DropDownStatus
                valueAttribute="id"
                selectedStatus={collectedQuery?.status}
                onChange={(status) => {
                  return setcollectedQuery({ ...collectedQuery, status: status.value == 0 ? "0" :status.value });
                }}
              />
            </FormGroup>
          </div>
        )}
        {
          filters?.includes("support") && (
            <div className="col-md-2 mt-1">
            <FormGroup>
              <Label for="exampleEmail">
                <FormattedMessage id={"الدعم"} />
              </Label>
              <Select
              options={[
                {label:"مدعوم",value:"1"},
                {label:"غير مدعوم",value:"0"}
            ]}
              placeholder="عرض الكل"
                onChange={(sel) => {
                  return setcollectedQuery({ ...collectedQuery, support_ratio: sel.value });
                }}
              />
            </FormGroup>
          </div>
          )
        }
        <div
          className="mt-1 d-flex flex-row justify-content-end"
          style={{ alignSelf: "center" }}
        >
          <Button
            variant="contained"
            color="primary"
            style={{
              background: "#D4B265",
              width: "200px",
              fontWeight: "bold",
            }}
            className="mx-smt-15 btn  mr-1 ml-1"
            type="submit"
            ref={submitBtnRef}
            onClick={() => {
              const trimmedQuery = {};
              sessionStorage.setItem(
                location.pathname,
                JSON.stringify(collectedQuery)
              );
              Object.entries(collectedQuery).forEach(([key, val]) => {
                trimmedQuery[key] = typeof val === "string" ? val?.trim() : val;
              });

              // history.replace({ search: JSON.stringify(trimmedQuery) });
              setPage(1);
              setQuery(trimmedQuery);
              // submitFilter(trimmedQuery)
              // refetch();
            }}
          >
            <span className="mr-1 ml-1">
              <FormattedMessage id={"تصفية"} />
            </span>
          </Button>
          {/* <Button
            variant="contained"
            color="primary"
            className="mx-smt-15 btn btn-danger mr-1 ml-1"
            onClick={() => {
              clearInputs();
              history.replace({ search: "" });
            }}
          >
            <span className="mr-1 ml-1">
              <FormattedMessage id="clear" />
            </span>
            <i className="zmdi zmdi-delete ml-1 mr-1" />
          </Button> */}
          {extraButtons}
        </div>
      </div>
    </form>
  );
}

FiltersAndSearches.propTypes = {
  setPage: PropTypes.func,
  setQuery: PropTypes.func,
  submitbtnid: PropTypes.string,
  maximumDate: PropTypes.string,
  minimumDate: PropTypes.string,
  mobileRef: PropTypes.string,
  mobile: PropTypes.bool,
  fields: PropTypes.array,
  filters: PropTypes.array,
  is_active: PropTypes.string,
  multi: PropTypes.bool,
  model: PropTypes.string,
  make: PropTypes.string,
  refetch: PropTypes.func.isRequired,
  extraButtons: PropTypes.oneOfType([PropTypes.element, PropTypes.array]),
};
