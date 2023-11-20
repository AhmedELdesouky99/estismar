import ImgCrop from "antd-img-crop";
import React, { useState } from "react";
import { Upload } from "antd";
import { userReq } from "../../../util/axios";

export const UploadImage = ({
  count = 1,
  fileList,
  setFileList,
  onSuccess = () => {},
}) => {
  const onChange = ({ fileList: newFileList }) => {
    setFileList(newFileList);
  };
  const onPreview = async (file) => {
    let src = file.url;
    if (!src) {
      src = await new Promise((resolve) => {
        const reader = new FileReader();
        reader.readAsDataURL(file.originFileObj);
        reader.onload = () => resolve(reader.result);
      });
    }
    const image = new Image();
    image.src = src;
    const imgWindow = window.open(src);
    imgWindow?.document.write(image.outerHTML);
  };
  return (
    <ImgCrop rotationSlider>
      <Upload
        action={(file) => {
          console.log(file);
          const headers = {
            "Content-Type": "multipart/form-data",
          };
          return new Promise((resolve, reject) => {
            const formData = new FormData();
            formData.append("title", "profile-img");
            formData.append("file", file);
            userReq
              .post("/auth/upload-file", formData, {
                headers,
              })
              .then((res) => {
                if (res.data.success) {
                  onSuccess(res?.data?.data?.id);
                  resolve(
                    "https://admin.waqfnami.com/api" + res?.data?.data?.path
                  );
                }
              })
              .catch((error) => reject(error));
          });
        }}
        listType='picture-card'
        fileList={fileList}
        onChange={onChange}
        onPreview={onPreview}
      >
        {fileList.length < count && "+ Upload"}
      </Upload>
    </ImgCrop>
  );
};
