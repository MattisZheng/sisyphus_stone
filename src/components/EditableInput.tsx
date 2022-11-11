import { useState } from 'react';

const EditableInput = (type: string, value: string, onChange:any, onBlur:any) => {
  const initvalue = value;
  console.log(initvalue);
  const [inputValue, setInputValue] = useState(value);
  
  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const updateValue = () => {
    console.log('save');
  };

  return <input type={type} value={inputValue} onChange={handleChange} onBlur={updateValue} />;
};

export default EditableInput;
