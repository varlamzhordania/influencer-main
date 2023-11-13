import React from "react";

const ToggleSwitch = ({ label, setChecked }) => {
  return (
    <div className="switch-container font-bold flex flex-col items-center justify-center">
      {label}
      <div className="toggle-switch">
        <input
          type="checkbox"
          onChange={(e) => {
            console.log("switched", e.target.checked);
            setChecked(e.target.checked);
          }}
          className="checkbox"
          name={label}
          id={label}
        />
        <label className="label" htmlFor={label}>
          <span className="inner" />
          <span className="switch" />
        </label>
      </div>
    </div>
  );
};

export default ToggleSwitch;
