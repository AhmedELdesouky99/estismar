/* eslint-disable prettier/prettier */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/prop-types */
import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { FormattedMessage } from "react-intl";
import NoImage from "../../assets/img/no-image.png";
import CircularProgress from "@material-ui/core/CircularProgress";
import EditIcon from '@material-ui/icons/Edit';
const maxSize = 1024 * 20;
function ImageUpload({
  titleId,
  image,
  setImage,
  required,
  loading,
  error,
  remove,
  imgremove = false,
  loader = false,
  imgheight = 400,
  imgwidth = 600,
  setLoader,
}) {
  useEffect(
    () => () => {
      const item = document.querySelector(`#${titleId}`);
      if (item) {
        item.value = "";
      }
    },
    [],
  );

  return (
    <div className={`form-group ${required ? "required" : ""}`}>
        {
            titleId ? 
            <label className={`control-label ${error ? "error" : ""}`} htmlFor="image">
            <FormattedMessage id={titleId || "missing"} />
          </label>
          :null
        }
    
      <div className="col-md-12">
        <div className="fileinput fileinput-new">
          <div className="card" style={{position:"relative"}} >
            {!loader ? (
              <img width="100%" src={loading ? NoImage : image || NoImage} alt={titleId || ""} />
            ) : (
              <CircularProgress />
            )}
          </div>
          <span className="btn  default btn-file" style={{position:"absolute",bottom:"9px",right:"38%",background:"#00D0F1",color:"#fff",height:"35px"}}>
              <span className="fileinput-new">
                {" "}
                {/* <FormattedMessage id={image ? "changeImage" : "selectImage"} />{" "} */}
                <EditIcon/>
              </span>

              <input type="hidden" />
              <input
                name={titleId}
                id={titleId}
                type="file"
                accept="image/jpeg, jpeg, png, image/png, gif, image/gif"
                onChange={(e) => {
                  const file = e.target.files[0];
                   
                  setImage(file)
                }}
              />
            </span>
          <div className="fileinput-preview fileinput-exists thumbnail"> </div>
          <div>
          </div>
        </div>
      </div>
    </div>
  );
}

ImageUpload.propTypes = {
  titleId: PropTypes.string,
  image: PropTypes.any,
  required: PropTypes.bool,
  loading: PropTypes.bool,
  error: PropTypes.bool,
  setImage: PropTypes.func,
  imgremove: PropTypes.bool,
  remove: PropTypes.func,
  loader: PropTypes.bool,
};

export default ImageUpload;
