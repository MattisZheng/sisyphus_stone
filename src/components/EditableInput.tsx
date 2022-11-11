import { useState } from 'react';

const EditableInput = (type: string, value: string, onChange:any, onBlur:any) => {
  
  const [inputValue, setInputValue] = useState();

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const updateValue = () => {
    console.log('save');
  };

  return <input type={type} value={inputValue} onChange={handleChange} onBlur={updateValue} />;
};

export default EditableInput;
