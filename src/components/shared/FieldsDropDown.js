import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { ButtonGroup, Button, CircularProgress } from "@material-ui/core";
import Select, { components } from "react-select";
import { FormattedMessage } from "react-intl";
import { userReq } from "../../util/axios";

const Menu = (props) => (
  <>
    <components.Menu {...props}>
      <div style={{ minHeight: "auto" }} className='d-flex flex-column'>
        <div style={{ flex: "1 0 auto" }}>
          {props.selectProps.fetchingData ? (
            <span className='fetching'>
              <CircularProgress />
            </span>
          ) : (
            <div>{props.children}</div>
          )}
        </div>
        <ButtonGroup fullWidth size='lg' dir='ltr' width='100%'>
          <Button
            onClick={props.selectProps.nextPage}
            disabled={
              +props?.selectProps?.pagination?.currentPage ===
              +props?.selectProps?.pagination?.last_page
            }
          >
            <FormattedMessage id='next' />
          </Button>
          <Button
            onClick={props.selectProps.previousPage}
            disabled={+props?.selectProps?.pagination?.currentPage === 1}
          >
            <FormattedMessage id='previous' />
          </Button>
        </ButtonGroup>
      </div>
    </components.Menu>
  </>
);

Menu.propTypes = {
  selectProps: PropTypes.any,
  children: PropTypes.any,
};

const Option = (props) => (
  <>
    <components.Option {...props}>{props.children}</components.Option>
  </>
);

Option.propTypes = {
  children: PropTypes.any,
};

const FieldsDropDown = ({
  fetchingData,
  onChange,
  selectedItem,
  multi,
  inadd,
  ...props
}) => {
  const [options, setOptions] = useState([]);
  const [pagination, setPagintation] = useState();
  const [page, setPage] = useState(1);

  const incPage = () => setPage((pg) => pg + 1);
  const decPage = () => setPage((pg) => pg - 1);
  useEffect(() => {
    userReq
      .get("/fields", {
        params: {
          page,
          limit: 10,
        },
      })
      .then((res) => {
        const Alloptions = res.data.data.data.map((field) => ({
          label: field.name,
          value: field.id,
        }));
        if (inadd) {
          setOptions([...Alloptions]);
        } else {
          setOptions([{ label: "الكل", value: -1 }, ...Alloptions]);
        }
        setPagintation({
          last_page: res.data.data?.last_page,
          currentPage: res.data.data?.current_page,
        });
      });
  }, [page]);
  return (
    <div>
      <Select
        className='dropdown-select'
        isMulti={multi}
        options={options}
        pagination={pagination}
        components={{ Menu, Option }}
        placeholder={"اختر مجال الخدمات"}
        value={
          multi
            ? options.filter((optn) => selectedItem?.includes(+optn.value))
            : options.find((optn) => +optn.value == +selectedItem)
        }
        fetchingData={fetchingData}
        nextPage={() => incPage()}
        previousPage={() => decPage()}
        onChange={onChange}
        {...props}
      />
    </div>
  );
};

FieldsDropDown.propTypes = {
  options: PropTypes.array,
  nextPage: PropTypes.func,
  previousPage: PropTypes.func,
  fetchingData: PropTypes.bool,
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
  pagination: PropTypes.object,
};

export default FieldsDropDown;
