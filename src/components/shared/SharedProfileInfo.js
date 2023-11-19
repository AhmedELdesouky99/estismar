import React from "react";
import { RctCard, RctCardContent } from "Components/RctCard";
import moment from "moment";
import StatusDropDown from "Components/shared/StatusDropDown";
import { useHistory } from "react-router-dom";
import NoImage from "../../assets/img/no-image.png";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import { useSelector } from "react-redux";
import { admin } from "../../util/axios";
import { rulesObj } from "../../util/rules";
import { Image } from "antd";

const SharedProfileInfo = ({ providerDetails, isAssetOwner }) => {
  const { id } = useParams();
  const { user } = useSelector((state) => state.authUser.user);
  console.log(user, "SharedProfileInfo");
  console.log(providerDetails, "providerDetails");

  const profile = providerDetails?.files?.find(
    (file) => file.title == "profile"
  )?.path;
  let history = useHistory();
  console.log(providerDetails, "providerDetails", user, "karem");
  return (
    <RctCard>
      <RctCardContent>
        <div className='row justify-content-between'>
          <div className='col-md-9'>
            <div className='row' style={{ gap: "15px" }}>
              <div>
                <Image
                  src={
                    profile
                      ? `https://estithmar.arabia-it.net${profile}`
                      : NoImage
                  }
                  style={{ border: !profile ? "1px solid #ccc" : "" }}
                  height={"120px"}
                  width={"150px"}
                />
              </div>
              <div>
                {/* <p>
                  {providerDetails?.company_name_ar ||
                    providerDetails?.asset_name_ar}
                </p> */}
                <p>{user.name}</p>
                <p>
                  {moment(user?.created_at).locale("ar").format("DD MMM YYYY")}
                </p>
                <StatusDropDown
                  activationStatus={user?.is_active}
                  client={admin}
                  url={`service-provider/${id}`}
                  notAllowed={user.category !== rulesObj.admin}
                />
              </div>
            </div>
          </div>
          {isAssetOwner ? null : (
            <div className='col-md-3 text-center'>
              {/* <p>
              الخدمات المباعة
              </p>
              <p>
                14
              </p> */}
              {user.category == "admin" ? (
                <button
                  className='btn btn-block'
                  onClick={() => history.push("/app/services/add")}
                  disabled={!providerDetails?.user?.is_active}
                  style={{
                    background: "#150941",
                    color: "#fff",
                    fontSize: "15px",
                    minWidth: "100px",
                    width: "fit-content",
                    margin: "auto",
                  }}
                >
                  إضافة خدمة
                </button>
              ) : null}
            </div>
          )}
        </div>
      </RctCardContent>
    </RctCard>
  );
};
export default SharedProfileInfo;
