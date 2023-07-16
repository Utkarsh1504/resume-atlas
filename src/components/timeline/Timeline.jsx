/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
import { useState } from "react";
import styles from "./timeline.module.css";

const DateLine = ({ title }) => {
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");

  const handleMonthChange = (event) => {
    const { value } = event.target;
    setMonth(value);
  };

  const handleYearChange = (event) => {
    const { value } = event.target;
    setYear(value);
  };

  const renderMonthOptions = () => {
    const monthOptions = [
      { value: "01", label: "January" },
      { value: "02", label: "February" },
      { value: "03", label: "March" },
      { value: "04", label: "April" },
      { value: "05", label: "May" },
      { value: "06", label: "June" },
      { value: "07", label: "July" },
      { value: "08", label: "August" },
      { value: "09", label: "September" },
      { value: "10", label: "October" },
      { value: "11", label: "November" },
      { value: "12", label: "December" },
    ];

    return monthOptions.map((option) => (
      <option key={option.value} value={option.value}>
        {option.label}
      </option>
    ));
  };

  const renderYearOptions = () => {
    const currentYear = new Date().getFullYear();
    const yearOptions = [];

    for (let i = currentYear; i >= currentYear - 15; i--) {
      yearOptions.push({ value: String(i), label: String(i) });
    }

    return yearOptions.map((option) => (
      <option key={option.value} value={option.value}>
        {option.label}
      </option>
    ));
  };

  return (
    <div className={styles.dateline}>
      <label className={styles.title} htmlFor="monthSelect">
        {title} <span>optional</span>
      </label>
      <div className={styles.date_cont}>
        <select
          className={styles.month}
          id="monthSelect"
          value={month}
          onChange={handleMonthChange}
        >
          <option value="">Month</option>
          {renderMonthOptions()}
        </select>
        <select
          className={styles.year}
          id="yearSelect"
          value={year}
          onChange={handleYearChange}
        >
          <option value="">Year</option>
          {renderYearOptions()}
        </select>
      </div>
    </div>
  );
};

const Timeline = () => {
  return (
    <>
      <div className={styles.timeline}>
        <DateLine title="Start Date" />
        <DateLine title="End Date" />
      </div>
      <div className={styles.checkbox_checks}>
        <div className={styles.checks_cont}>
          <div>
            <input type="checkbox" />
            <label htmlFor="don't-show">Don't Show</label>
          </div>
          <div>
            <input type="checkbox" />
            <label htmlFor="don't-show">Only year</label>
          </div>
        </div>
        <div className={styles.checks_cont}>
          <div>
            <input type="checkbox" />
            <label htmlFor="don't-show">Present(Current)</label>
          </div>
          <div>
            <input type="checkbox" />
            <label htmlFor="don't-show">Don't Show</label>
          </div>
          <div>
            <input type="checkbox" />
            <label htmlFor="don't-show">Only year</label>
          </div>
        </div>
      </div>
    </>
  );
};

export default Timeline;
