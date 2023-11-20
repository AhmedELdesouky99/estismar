import React from "react";
import { InboxOutlined } from "@ant-design/icons";
import { message, Upload } from "antd";
import { userReq } from "../../../util/axios";
const { Dragger } = Upload;

export const UploadFiles = ({
  setFiles,
  files,
  onSuccess = () => {},
  className = "",
  title = "Click or drag file to this area to upload",
}) => {
  const props = {
    name: "file",
    multiple: true,
    action: (file) => {
      const headers = {
        "Content-Type": "multipart/form-data",
      };
      return new Promise((resolve, reject) => {
        const formData = new FormData();
        formData.append("title", file.name);
        formData.append("file", file);
        userReq
          .post("/auth/upload-file", formData, {
            headers,
          })
          .then((res) => {
            if (res.data.success) {
              onSuccess(res?.data?.data?.id);
              console.log(onSuccess);
              resolve("https://admin.waqfnami.com/api" + res?.data?.data?.path);
            }
          })
          .catch((error) => reject(error));
      });
    },
    onChange(info) {
      const { status } = info.file;
      if (status !== "uploading") {
        console.log(info.file, info.fileList);
      }
      if (status === "done") {
        // uploadAsset(info.file);
        console.log(info.file, "xxx");
        setFiles((files) => [...files, info.file]);
        message.success(`${info.file.name} file uploaded successfully.`);
      } else if (status === "error") {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
    onDrop(e) {
      setFiles((files) => [...files, e.dataTransfer.files]);
      uploadAsset(e.dataTransfer.files);
      console.log("Dropped files", e.dataTransfer.files);
    },
  };

  return (
    <Dragger {...props} defaultFileList={files} className={className}>
      <p className='ant-upload-drag-icon'>
        <InboxOutlined style={{ color: "#150941" }} />
      </p>
      <p className='ant-upload-text'>{title}</p>
      <p className='ant-upload-hint'>
        Support for a single or bulk upload. Strictly prohibited from uploading
        company data or other banned files.
      </p>
    </Dragger>
  );
};
