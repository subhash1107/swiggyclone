import React, { useState } from 'react';

const FloatingLabelInput = () => {
  const [inputValue, setInputValue] = useState('');

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <div className="p-4">
      <div className="relative w-1/3 mx-auto border-2">
        <input
          type="text"
          value={inputValue}
          onChange={handleChange}
          className="
            peer
            
            h-10 w-full border-b-2 border-gray-300 text-gray-900 
            placeholder-transparent
            focus:outline-none focus:border-blue-500
          "
          placeholder="Enter something..."
          id="floating-input"
        />
        <label
          htmlFor="floating-input"
          className="
            absolute left-0 top-0 text-gray-500
            transition-all transform
            -translate-y-1/2 scale-100
            origin-left
            peer-placeholder-shown:scale-100
            peer-placeholder-shown:translate-y-1/2
            peer-focus:-translate-y-1/3
            peer-focus:scale-75
            pointer-events-none
          "
        >
          Enter something...
        </label>
      </div>
      <p className="mt-2 text-gray-700">You typed: {inputValue}</p>
    </div>
  );
};

export default FloatingLabelInput;
