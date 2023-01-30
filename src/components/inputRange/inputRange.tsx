import React, { FC } from 'react';

type inputRangeProps = {
  name: string;
  value: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
};

const InputRange: FC<inputRangeProps> = ({ name, value, onChange }) => {
  return (
    <div className="input-range">
      <label htmlFor={`${name}_input`} className="form-label">
        {`${name}: `}
        <input
          className="num-input"
          type="number"
          value={value}
          onChange={onChange}
        />
        <strong>GB</strong>
      </label>
      <input
        type="range"
        className="form-range"
        min="0"
        max="1000"
        step="1"
        id={`${name}_input`}
        value={value}
        onChange={onChange}
      ></input>
      <div className="d-flex justify-content-between fs-6">
        <strong>0</strong>
        <strong>1000</strong>
      </div>
    </div>
  );
};

export default InputRange;
