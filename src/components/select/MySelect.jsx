import React from 'react';
import styles from "./MySelect.module.css";


export const MySelect = ({ options, defaultValue, onChange, value }) => {
  return (
    <select className={styles.select} value={value} onChange={(e) => onChange(e.target.value)}>
      <option value="" disabled>
        {defaultValue}
      </option>
      {options.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
};
