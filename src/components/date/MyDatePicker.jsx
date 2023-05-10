import 'react-datepicker/dist/react-datepicker.css';
import DatePicker from 'react-datepicker';

import React from 'react';

export const MyDatePicker = ({ startDate, setStartDate }) => {
  return <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />;
};
