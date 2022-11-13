import { useState } from 'react';

const EditableInput = ({ index, col, type, value, onBlur }) => {
  // set initial value
  const [inputValue, setInputValue] = useState(value);

  // update input value
  const handleChange = (e: any) => {
    setInputValue(e.target.value);
  };

  // update inputValue to table when onBlur
  const handleBlur = () => {
    onBlur(index, col, inputValue);
  };

  return <input type={type} value={inputValue} onChange={handleChange} onBlur={handleBlur} />;
};

export default EditableInput;
