import React from "react";
import { InboxOutlined } from "@ant-design/icons";
import { message, Upload } from "antd";
const { Dragger } = Upload;

export const UploadFiles = ({
  setFiles,
  files,
  className = "",
  title = "Click or drag file to this area to upload",
}) => {
  console.log(files, "UploadFiles");
  const props = {
    name: "file",
    multiple: true,
    action:
      "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aHVtYW58ZW58MHx8MHx8&w=1000&q=80",
    onChange(info) {
      const { status } = info.file;
      if (status !== "uploading") {
        console.log(info.file, info.fileList);
      }
      if (status === "done") {
        setFiles((files) => [...files, info.file]);
        message.success(`${info.file.name} file uploaded successfully.`);
      } else if (status === "error") {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
    onDrop(e) {
      setFiles((files) => [...files, e.dataTransfer.files]);

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
