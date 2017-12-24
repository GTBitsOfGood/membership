import React from 'react';
import propTypes from "prop-types";
import { Select } from "antd";
const Option = Select.Option;


// const SelectMultiple = ({options, placeholder}) => (
//   <Select mode="multiple" placeholder={placeholder}>
//     {options.map((item, index) => <Option key={`${item + index}`} value={item.toLowerCase()}>{item}</Option>)}
//   </Select>
// );

// SelectMultiple.propTypes = {
//   options: propTypes.array,
//   placeholder: propTypes.string
// };

// export default SelectMultiple;


const SelectMultiple = () => (
  <Select mode="multiple" placeholder="Please select favourite colors">
    <Option value="red">Red</Option>
    <Option value="green">Green</Option>
    <Option value="blue">Blue</Option>
  </Select>
);


export default SelectMultiple;