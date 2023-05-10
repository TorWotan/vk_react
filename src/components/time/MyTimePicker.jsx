import 'react-datepicker/dist/react-datepicker.css';
import React from 'react';
import { TimePicker } from 'react-ios-time-picker';

export const MyTimePicker = ({ value, setValue }) => {
  const onChange = (timeValue) => {
    setValue(timeValue);
  };
  return <TimePicker onChange={onChange} value={value} />;
};
