/** Branches Page */
import React, { useEffect, useState } from "react";
import { useLocation, useHistory } from "react-router-dom";
import { Helmet } from "react-helmet";
// page title bar
import PageTitleBar from "Components/PageTitleBar/PageTitleBar";
// intl messages
import IntlMessages from "Util/IntlMessages";

import ServiceProvidersList from "./ServiceProvidersList";
import { RctCard, RctCardContent } from "Components/RctCard";
import CustomCard from "Components/shared/CustomCard";
import { FiltersAndSearches } from "Components/FiltersAndSearches/FiltersAndSearches";
import { FormattedMessage } from "react-intl";

import { Button } from "reactstrap";
import axios from "axios";
import { admin } from "../../util/axios";

export default function ServiceProviders() {
  const location = useLocation();
  const history = useHistory();
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);
  const [services, setServices] = useState();
  const [status, setStatus] = useState();
  const [pageSelect, setPageSelect] = useState(1);
  const [fields, setFields] = useState([]);
  const [query, setQuery] = useState({});

  const [meta, setMeta] = useState();
  useEffect(() => {
    admin
      .get("/service-provider-status")
      .then((res) => setStatus(res.data.data));
  }, []);
  useEffect(() => {
    admin
      .get(`/service-provider`, {
        params: {
          limit,
          page,
          name: query.name ? query.name : undefined,
          status: query.status ? query.status : undefined,
          field_id: query.field_id ? query.field_id : undefined,
        },
      })
      .then((res) => setServices(res.data.data));
  }, [page, limit, query]);
  useEffect(() => {
    admin
      .get("/service-provider-fields", {
        params: {
          page: pageSelect,
        },
      })
      .then((res) => {
        const options = res.data.data.data.map((field) => ({
          label: field.name,
          value: field.id,
        }));
        setFields(options);
        setMeta({
          last_page: res.data.data?.last_page,
          currentPage: res.data.data?.current_page,
        });
      });
  }, [pageSelect]);
  return (
    <div className='clients-wrapper'>
      <Helmet>
        <title>{"sidebar.service-provider"}</title>
      </Helmet>
      <PageTitleBar
        title={<IntlMessages id='sidebar.service-provider' />}
        match={location}
        enableBreadCrumb
        // extraButtons={
        //   <>
        //     {userCan("branches.create") && (
        //       <Button
        //         variant="contained"
        //         color="primary"
        //         className="mx-sm-15 btn btn-success"
        //         onClick={() => history.push("ServiceProviders/add")}
        //       >
        //         <IntlMessages id="create.new.something" values={{ something: messages?.banner }} />
        //       </Button>
        //     )}
        //   </>
        // }
      />
      <div className='row'>
        <div className='col-lg-3 col-md-3'>
          <CustomCard color='#00A8FF1A' name={"مزودي الخدمات"} />
        </div>
        <div className='col-lg-3 col-md-3'>
          <CustomCard color='#23D3811A' name={"مكتملين"} />
        </div>
        <div className='col-lg-3 col-md-3'>
          <CustomCard color='#EEB6561A' name={"قائمة انتظار"} />
        </div>
        <div className='col-lg-3 col-md-3'>
          <CustomCard color='#FF04041A' name={"مرفوض"} />
        </div>
      </div>
      <RctCard>
        <RctCardContent>
          <div className='row justify-content-between'>
            <div className='col-sm-12 col-md-3 mt-1'>قائمة مزودي الخدمات</div>
            <div className='col-sm-12 col-md-3 mt-1'>
              <Button
                variant='contained'
                color='primary'
                style={{
                  background: "#150941",
                  fontWeight: "bold",
                  fontSize: "20px",
                }}
                className='mx-smt-15 btn  mr-1 ml-1 border-0'
                onClick={() => history.push("/app/service-provider/add")}
              >
                <span className='mr-1 ml-1'>
                  <FormattedMessage id={"إضافة مزود خدمة"} />
                </span>
              </Button>
            </div>
          </div>
          <div className='row'>
            <FiltersAndSearches
              make='make'
              submitbtnid='search.filter'
              fields={[
                {
                  type: "search",
                  name: "name",
                  label: "مزود الخدمة",
                  placeholder: "اسم مزود الخدمة",
                },
              ]}
              filters={["parent", "fields", "status"]}
              model='model'
              is_active='isActive'
              multi
              query={query}
              setPage={setPage}
              setQuery={setQuery}
              setPageSelect={setPageSelect}
              options={fields}
              metadata={meta}
            />
          </div>
        </RctCardContent>
      </RctCard>
      <ServiceProvidersList
        loading={false}
        setPage={setPage}
        setLimit={setLimit}
        limit={limit}
        allservices={services}
        status={status}
      />
    </div>
  );
}
