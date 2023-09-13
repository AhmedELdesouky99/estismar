import React, { useState } from "react";
import Input from "@material-ui/core/Input";
import { FormGroup, Label } from "reactstrap";
import { FormattedMessage } from "react-intl";
import Select from "react-select";

const DropDownStatus1 = ({onChange,selectedItem}) => {
  const [options, setOptions] = useState([
    { label: "منشور", value: 1 },
    { label: "غير منشور", value: 0 },
  ]);
  return (
    <>
      {/* <Select className="form-control p-0" label={"الحاله"} native input={<Input  id="age-native-helper" 
    onChange={(e)=>{
        setSelecteStatus(e.target.value)
    }}
    />}>
      <option value="" />
      {
        options.map((Item)=><option value={Item.id} >{Item.name}</option>)
      }
     
    </Select> */}
      <Select
        options={options}
        placeholder="الحاله"
        onChange={onChange}
      value={options.find((optn) => +optn.value == +selectedItem)}       
      />
    </>
  );
};
export default DropDownStatus1;
