import { useState } from 'react';

function useInput() {
  const [input, setInput] = useState('');
  const onInputChange = (value) => {
    setInput(value);
  };
  return [input, onInputChange];
}

export default useInput;
