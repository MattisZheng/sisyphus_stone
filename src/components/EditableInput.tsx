import { useEffect, useState } from 'react';

const EditableInput = ({ index, col, type, value, onBlur }: {
  index: number;
  col: string;
  type: string;
  value: any;
  onBlur: (index: number, col: string, value: any) => void;
}) => {
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

  // 
  useEffect(() => {
    setInputValue(value);
  }, [value]);

  return <input type={type} value={inputValue} onChange={handleChange} onBlur={handleBlur} />;
};

export default EditableInput;
