import { FormattedMessage } from "react-intl";
import { FormGroup, Label, Input, Toast } from "reactstrap";
import React, { useEffect, useRef } from "react";
import { useState } from "react";

import { useHistory, useParams } from "react-router-dom";
import swal from "sweetalert";
import { Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import { FormattedHTMLMessage } from "react-intl";
import FieldsDropDown from "../FieldsDropDown";
import { useSelector } from "react-redux";
import { admin, userReq } from "../../../util/axios";
import { UploadFiles } from "../uploadFiles";
import { UploadImage } from "../uploadImage";
import { Form, Button, message } from "antd";
import { password, required } from "../../../util/validations";
import { Spinner } from "../Spinner/index";
import { showErrors } from "../../../util/errorsAlerts";
import { rulesObj } from "../../../util/rules";

const ServiceProviderInputs = ({ providerDetails }) => {
  //refactor
  const [profileForm] = Form.useForm();
  const [disabledSave, setDisabledSave] = useState(true);
  const { user } = useSelector((state) => state.authUser.user);
  const [data, setData] = useState();
  const [files, setFiles] = useState([]);
  const [modal, setModal] = useState(false);
  const [newPassword, setNewPassword] = useState({});
  const [profileImg, setProfileImage] = useState([]);
  const [loader, setLoader] = useState(false);
  // const [filesIds, setFilesIDs] = useState([]);
  const [messageApi, contextHolder] = message.useMessage();
  const filesIds = useRef([]);
  const handleFilesIds = (id) => {
    filesIds.current.push(id);
    console.log(filesIds);
  };

  const history = useHistory();
  const [fields, setFields] = useState([]);

  const toggle = () => setModal(!modal);

  const AddServiceProvider = () => {
    admin
      .post("/service-provider", {
        ...data,
        files_ids: files,
      })
      .then((res) => {
        if (res.data.success) {
          swal({
            title: "",
            text: "تم اضافه مزود الخدمة بنجاح",
            icon: "success",
          });
          if (user.category == "admin") {
            setTimeout(() => {
              history.push("/app/service-provider");
            }, 2000);
          }
        } else {
          showErrors(res.data.errors);
        }
      });
  };
  const EditAssetsOwner = (data) => {
    setLoader(true);
    userReq
      .put(`/auth/update`, {
        ...data,
        user: undefined,
        created_at: undefined,
        files: undefined,
        user_id: undefined,
        services: undefined,
        updated_at: undefined,
        files_ids: files,
        type: "update",
      })
      .then((res) => {
        console.log(res, "83");
        if (res.data.success) {
          swal({
            title: "",
            text: "تم تعديل مزود الخدمة بنجاح",
            icon: "success",
          });
          profileForm.resetFields();
          // if (user.category == rulesObj.admin) {
          setTimeout(() => {
            history.push("/app/services");
          }, 2000);
          // }
        }
      });

    setLoader(false);
  };
  const handleFormChange = (e) => {
    const hasErrors = profileForm
      .getFieldsError()
      .some(({ errors }) => errors.length);
    setDisabledSave(hasErrors);
  };

  const onSubmit = (data) => {
    const body = {
      ...data,
      ...newPassword,
      files_ids: [...filesIds.current],
      fields_id: data.fields_id.map((item) => item.value),
      expire_date: data.expire_date.replaceAll("-", "/"),
      export_date: data.export_date.replaceAll("-", "/"),
    };
    EditAssetsOwner(body);
  };
  console.log(filesIds, "filesIds");
  return (
    // <Spinner isLoading={loader}>
    <>
      {contextHolder}

      <ChangePasswordModal
        modal={modal}
        toggle={toggle}
        setNewPassword={setNewPassword}
      />
      <Form
        form={profileForm}
        name='profile-form'
        initialValues={data}
        onFieldsChange={handleFormChange}
        onFinish={onSubmit}
      >
        <div className='row profile'>
          <div className='col-md-4'>
            <div>
              <p className='title'>بيانات الحساب</p>
              <FormGroup>
                <Label for='exampleEmail'>
                  <FormattedMessage id={"اسم المستخدم"} />
                </Label>
                <Form.Item name='name' rules={required}>
                  <Input
                    style={{ borderColor: "#7EA831" }}
                    type='text'
                    defaultValue={data?.name}
                  />
                </Form.Item>
              </FormGroup>
            </div>
            <div>
              <FormGroup>
                <Label for='exampleEmail'>
                  <FormattedMessage id={"البريد الإلكتروني"} />
                </Label>
                <Form.Item name='email' rules={required}>
                  <Input
                    style={{ borderColor: "#7EA831" }}
                    type='email'
                    defaultValue={data?.email}
                  />
                </Form.Item>
              </FormGroup>
            </div>
            <div className='required'>
              <FormGroup>
                <Label for='exampleEmail'>
                  <FormattedMessage id={" رقم الجوال"} />
                </Label>
                <Form.Item name='phone' rules={required}>
                  <Input
                    style={{ borderColor: "#7EA831" }}
                    type='text'
                    defaultValue={data?.phone}
                  />
                </Form.Item>
              </FormGroup>
            </div>
          </div>
          <div
            className='col-md-4'
            style={{ alignSelf: "center", fontSize: "20px", color: "#707070" }}
          >
            <div>
              <span style={{ color: "#150941", fontWeight: "bold" }}>
                تحديث كلمة المرور
              </span>
              من خلال الزر أدناه سيتم
              <br />
              إعادة توجيهك إلى صفحة جديدة ويجب اتباع
              <br />
              التعليمات
            </div>
            <div>
              <button
                className='btn btn-block'
                style={{ background: "#7EA831", color: "#fff" }}
                onClick={() => toggle()}
              >
                تسجيل كلمة مرور جديدة
              </button>
            </div>
          </div>
          <div className='col-md-3' style={{ alignSelf: "center" }}>
            <UploadImage
              fileList={profileImg}
              setFileList={setProfileImage}
              onSuccess={handleFilesIds}
            />
          </div>
        </div>

        <div className='row required'>
          <div className='col-12'>
            <p className='title'>بيانات الجهة</p>
            <label class='container'>
              <input type='checkbox' />
              <span class='checkmark'></span>
              <p
                style={{
                  fontSize: "27px",
                  color: "#7EA831",
                  fontWeight: "bold",
                }}
              >
                العنوان التجاري
              </p>
            </label>
          </div>
          <div className='col-md-4'>
            <div>
              <FormGroup>
                <Label for='exampleSelect'>الدولة</Label>
                <Form.Item name='country'>
                  <Input
                    id='exampleSelect'
                    name='select'
                    type='select'
                    style={{ borderColor: "#7EA831" }}
                  >
                    <option selected>المملكة العربيه السعودية</option>
                  </Input>
                </Form.Item>
              </FormGroup>
            </div>
          </div>
          <div className='col-md-4'>
            <div>
              <FormGroup>
                <Label for='exampleSelect'>المدينة</Label>
                <Form.Item name='city'>
                  <Input
                    id='exampleSelect'
                    name='select'
                    type='text'
                    style={{ borderColor: "#7EA831" }}
                  />
                </Form.Item>
              </FormGroup>
            </div>
          </div>
        </div>

        <div className='row required'>
          <div className='col-12'>
            <label class='container'>
              <input type='checkbox' />
              <span class='checkmark'></span>
              <p
                style={{
                  fontSize: "27px",
                  color: "#7EA831",
                  fontWeight: "bold",
                }}
              >
                تفاصيل النشاط
              </p>
            </label>
          </div>
        </div>
        <div className='row required'>
          <div className='col-md-4'>
            <div>
              <FormGroup>
                <Label for='exampleEmail'>
                  <FormattedMessage id={"اسم الشركة بالعربية"} />
                </Label>
                <Form.Item name='company_name_ar' rules={required}>
                  <Input
                    style={{ borderColor: "#7EA831" }}
                    type='text'
                    defaultValue={data?.company_name_ar}
                    value={data?.company_name_ar}
                  />
                </Form.Item>
              </FormGroup>
            </div>
          </div>
          {/* <div className="col-md-4">
          <div>
            <FormGroup>
              <Label for="exampleEmail">
                <FormattedMessage id={"اسم الشركة بالانجليزية"} />
              </Label>
              <Input
                style={{ borderColor: "#7EA831" }}
                type="text"
                defaultValue={data?.company_name_en}
                value={data?.company_name_en}
                onChange={(e) => {
                  setData({
                    ...data,
                    company_name_en: e.target.value,
                  });
                }}
              />
            </FormGroup>
          </div>
        </div> */}
          <div className='col-md-4'>
            <div>
              <FormGroup>
                <Label for='exampleEmail'>
                  <FormattedMessage id={"رقم السجل التجاري"} />
                </Label>
                <Form.Item name='tax_nom' rules={required}>
                  <Input
                    style={{ borderColor: "#7EA831" }}
                    type='text'
                    defaultValue={data?.tax_nom}
                    value={data?.tax_nom}
                  />
                </Form.Item>
              </FormGroup>
            </div>
          </div>
        </div>
        <div className='row required'>
          <div className='col-md-4'>
            <div>
              <FormGroup>
                <Label for='exampleEmail'>
                  <FormattedMessage id={"نوع الكيان القانوني"} />
                </Label>
                <Form.Item name='law_type' rules={required}>
                  <Input
                    id='exampleSelect'
                    name='select'
                    type='select'
                    style={{ borderColor: "#7EA831" }}
                    value={data?.law_type}
                  >
                    <option></option>
                    <option
                      value={"مؤسسة فردية"}
                      selected={data?.law_type == "مؤسسة فردية"}
                    >
                      مؤسسة فردية{" "}
                    </option>
                    <option
                      value={"مؤسسة جماعية"}
                      selected={data?.law_type == "مؤسسة جماعية"}
                    >
                      مؤسسة جماعية{" "}
                    </option>
                  </Input>
                </Form.Item>
              </FormGroup>
            </div>
          </div>

          <div className='col-md-4'>
            <div className='row'>
              <div className='col-md-6'>
                <FormGroup>
                  <Label for='exampleEmail'>
                    <FormattedMessage id={"تاريخ الاصدار"} />
                  </Label>
                  <Form.Item name='export_date' rules={required}>
                    <Input
                      style={{ borderColor: "#7EA831" }}
                      type='date'
                      defaultValue={data?.export_date}
                      value={data?.export_date}
                    />
                  </Form.Item>
                </FormGroup>
              </div>
              <div className='col-md-6'>
                <FormGroup>
                  <Label for='exampleEmail'>
                    <FormattedMessage id={"تاريخ الإنتهاء"} />
                  </Label>
                  <Form.Item name='expire_date' rules={required}>
                    <Input
                      style={{ borderColor: "#7EA831" }}
                      type='date'
                      min={data?.export_date}
                      defaultValue={data?.expire_date}
                      value={data?.expire_date}
                    />
                  </Form.Item>
                </FormGroup>
              </div>
            </div>
          </div>
        </div>

        <div className='row required'>
          <div className='col-md-4'>
            <div>
              <FormGroup>
                <Label for='exampleSelect'> رقم الشهادة الضريبية</Label>
                <Form.Item name='tax_cert_nom'>
                  <Input
                    id='exampleSelect'
                    name='select'
                    type='text'
                    style={{ borderColor: "#7EA831" }}
                    defaultValue={data?.tax_cert_nom}
                    value={data?.tax_cert_nom}
                  />
                </Form.Item>
              </FormGroup>
            </div>
          </div>
          <div className='col-md-4'>
            <div>
              <FormGroup>
                <Label for='exampleEmail'>
                  <FormattedMessage id={"المجالات"} />
                </Label>
                <Form.Item name='fields_id' rules={required}>
                  <FieldsDropDown
                    inadd={true}
                    multi={true}
                    onChange={(sel) => {
                      setData({
                        ...data,
                        fields_id: sel.map((one) => one.value),
                      });
                      setFields([...fields, sel]);
                    }}
                    selectedItem={data?.fields_id}
                  />
                </Form.Item>
              </FormGroup>
            </div>
          </div>
        </div>

        <div
          className='row required'
          // style={{ height: "20rem", overflowX: "hidden", overflowY: "auto" }}
        >
          <div className='col-12'>
            <div>
              <label class='container'>
                <input type='checkbox' />
                <span class='checkmark'></span>
                <p
                  style={{
                    fontSize: "27px",
                    color: "#7EA831",
                    fontWeight: "bold",
                  }}
                >
                  المستندات المرفقة{" "}
                </p>
              </label>
              <div className='mb-5'>
                <UploadFiles
                  // uploadAsset={(d) => upload(d)}
                  className='profile'
                  setFiles={setFiles}
                  files={files}
                  onSuccess={handleFilesIds}
                  title='اضغط او اسحب الملفات التي تريد رفعها'
                />
              </div>
            </div>
          </div>
        </div>

        <div className='row justify-content-center mt-2'>
          <div className='col-md-4'>
            <Button
              className='btn btn-block w-100'
              style={{
                background: "#150941",
                color: "#fff",
                fontSize: "20px",
                padding: "0",
              }}
              htmlType='submit'
              disable={disabledSave}
              loading={loader}
              disabled={loader}
              // disabled loading
            >
              حفظ
            </Button>
          </div>
        </div>
      </Form>
      {/* </Spinner> */}
    </>
  );
};

export default ServiceProviderInputs;

const ChangePasswordModal = ({ modal, toggle, setNewPassword }) => {
  const [changePasswordForm] = Form.useForm();

  const handleSubmit = (data) => {
    setNewPassword(data);
    toggle();
  };

  return (
    <Modal isOpen={modal} toggle={toggle}>
      <Form form={changePasswordForm} onFinish={handleSubmit}>
        <ModalHeader toggle={toggle}>
          <h5 className='w-100'>تعيين كلمة مرور</h5>
        </ModalHeader>
        <ModalBody>
          <div className='col-md-12'>
            <FormGroup>
              <Label for='exampleEmail'>كلمة السر</Label>
              <Form.Item name='password' rules={password}>
                <Input
                  id='exampleSelect'
                  name='select'
                  type='password'
                  placeholder='كلمة المرور'
                  style={{ borderColor: "#D4B265" }}
                />
              </Form.Item>
            </FormGroup>
          </div>
          <div className='col-md-12'>
            <FormGroup>
              <Label for='exampleEmail'>تاكيد كلمة السر</Label>
              <Form.Item
                name='password_confirmation'
                dependencies={["password"]}
                rules={[
                  ...required,
                  ({ getFieldValue }) => ({
                    validator(_, value) {
                      if (!value || getFieldValue("password") === value) {
                        return Promise.resolve();
                      }
                      return Promise.reject(new Error("كلمة السر لاتتطابق"));
                    },
                  }),
                ]}
              >
                <Input
                  id='exampleSelect'
                  name='select'
                  type='password'
                  placeholder='تأكيد كلمة المرور'
                  style={{ borderColor: "#D4B265" }}
                />
              </Form.Item>
            </FormGroup>
          </div>
        </ModalBody>
        <ModalFooter>
          <Button color='primary' type='submit' htmlType='submit'>
            حفظ
          </Button>{" "}
        </ModalFooter>
      </Form>
    </Modal>
  );
};
