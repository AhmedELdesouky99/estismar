/* eslint-disable prettier/prettier */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/prop-types */
import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { FormattedMessage } from "react-intl";
import UploadImage from "../../assets/img/ic-upload.png";
import CircularProgress from "@material-ui/core/CircularProgress";
import EditIcon from '@material-ui/icons/Edit';
import { useRef } from "react";
const maxSize = 1024 * 20;
function FileUpload({
  titleId,
  image,
  setImage,
  required,
  loading,
  error,
  name,
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
  const inputFile = useRef(null);
    

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
          <div className="card text-center" style={{position:"relative",padding:"20px"}} >
            {!loader ? (
              <img className="m-auto" style={{cursor:"pointer"}}  onClick={()=>{
                !image ?  inputFile.current.click() : inputFile.current.click()
              }}  src={loading ? UploadImage : image || UploadImage} alt={titleId || ""}  style={{maxWidth:loading ?"150px" :"150px"}}/>
            ) : (
              <CircularProgress />
            )}
              <input type="hidden" />
              <input
              style={{display:"none"}}
                name={titleId}
                id={titleId}
                ref={inputFile}
                type="file"
                accept="image/jpeg, jpeg, png, image/png, gif, image/gif"
                onChange={(e) => {
                  const file = e.target.files[0];
                   
                  setImage(file)
                }}
              />
              <p>
                {name}
              </p>
          </div>
          <div className="fileinput-preview fileinput-exists thumbnail"> </div>
          <div>
          </div>
        </div>
      </div>
    </div>
  );
}

FileUpload.propTypes = {
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

export default FileUpload;
