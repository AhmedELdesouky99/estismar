import ImgCrop from "antd-img-crop";
import React, { useState } from "react";
import { Upload } from "antd";

export const UploadImage = ({ count = 1, fileList, setFileList }) => {
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
        action='https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aHVtYW58ZW58MHx8MHx8&w=1000&q=80'
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
