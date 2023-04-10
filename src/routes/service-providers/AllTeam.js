import React, { useEffect, useState, useCallback } from "react";
import { useLocation, useHistory, useParams } from "react-router-dom";
import { Helmet } from "react-helmet";
// // page title bar
import PageTitleBar from "Components/PageTitleBar/PageTitleBar";
// // intl messages
import IntlMessages from "Util/IntlMessages";

import { RctCard, RctCardContent } from "Components/RctCard";
import CustomCard from "Components/shared/CustomCard";

import { FiltersAndSearches } from "Components/FiltersAndSearches/FiltersAndSearches";
import axios from "axios";
import { Button } from "reactstrap";
import { FormattedMessage } from "react-intl";
import TeamWorkList from "./TeamWorkList";
import { useSelector } from "react-redux";
import AddEditTeamMember from "./AddEditTeamMember";
const client = axios.create({
  baseURL: "https://estithmar.arabia-it.net/api/",
});
export default function AllTeam() {
  const location = useLocation();
  const history = useHistory();
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);
  const [owners, setOwners] = useState();
  const [status, setStatus] = useState();
  const [query, setQuery] = useState({});
  const { id } = useParams();
  const { user } = useSelector((state) => state.authUser);
  const [AddPage, setAddPage] = useState();
  const [TeamMemberId,setTeamMemberId]=useState()
  useEffect(() => {
    client
      .get(`/provider/user`, {
        params: {
          limit,
          page,
          token: user.access_token ? user.access_token : undefined,
          name:query.name ? query.name : undefined,
          status: query.status ? query.status : undefined,
          group_name:query.group_name ? query.group_name :undefined
        },
      })
      .then((res) => setOwners(res.data.data));
  }, [page, limit, query,AddPage]);

  return (
    <div className="clients-wrapper">
      {!AddPage ? (
        <>
          <div className="row justify-content-between mb-2">
            <div className="col-sm-12 col-md-6 mt-1"> قائمة فريق العمل</div>
            <div className="col-sm-12 col-md-6 mt-1">
              <div className="row justify-content-end">
                <div className="col-md-6">
                  <Button
                    variant="contained"
                    color="primary"
                    style={{
                      background: "#005D5E",
                      fontWeight: "bold",
                      fontSize: "20px",
                    }}
                    className="mx-smt-15 btn  mr-1 ml-1 border-0"
                    onClick={() =>
                      {
                        setTeamMemberId(null);
                        setAddPage(true)
                      }
                      
                      }
                  >
                    <span className="mr-1 ml-1">
                      <FormattedMessage id={"إضافة عضو جديد"} />
                    </span>
                  </Button>
                </div>
              </div>
            </div>
          </div>
          <hr />
          <div className="row">
            <FiltersAndSearches
              make="make"
              submitbtnid="search.filter"
              fields={[
                {
                  type: "search",
                  name: "name",
                  label: "الاسم",
                  placeholder: "اكتب اسم العضو",
                },
                {
                  type: "search",
                  name: "group_name",
                  label: "القسم /الادارة",
                  placeholder: "اكتب  القسم",
                },
              ]}
              query={query}
              setPage={setPage}
              setQuery={setQuery}
              filters={["status"]}
            />
          </div>

          <TeamWorkList
            loading={false}
            setPage={setPage}
            setLimit={setLimit}
            limit={limit}
            allowners={owners}
            status={status}
            setAddPage={setAddPage} 
            setTeamMemberId={setTeamMemberId}
          />
        </>
      ) : (
        <AddEditTeamMember setAddPage={setAddPage} TeamMemberId={TeamMemberId} setTeamMemberId={setTeamMemberId}/>
      )}
    </div>
  );
}
