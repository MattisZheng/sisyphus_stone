import { useState } from 'react';

const EditableInput = (type: string, value: string, onChange, onBlur) => {
  const [inputValue, setInputValue] = useState(value);

  const Change = (e) => {
    setInputValue(e.target.value);
    onChange(e);
  };

  const Blur = () => {
    console.log('save');
  };

  return <input type={type} value={inputValue} onChange={onChange} onBlur={Blur} />;
};

export default EditableInput;
