import React, { useState } from 'react';

const Drop = () => {
  const [selectedOptions, setSelectedOptions] = useState({
    dropdown1: 'chennai',
    dropdown2: 'punjab',
    dropdown3: 'gujarat',
    dropdown4: 'mumbai',
    dropdown5: 'delhi',
    dropdown6: 'kerala',
    dropdown7: 'bangalore',
    dropdown8: 'bangalore',
    dropdown9: 'bangalore',

    
  });

  const handleOptionChange = (event, dropdownId) => {
    const newValue = event.target.value;
    setSelectedOptions((prevSelectedOptions) => ({
      ...prevSelectedOptions,
      [dropdownId]: newValue,
    }));
  };

  const dropdownContainerStyle = {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '10px',
  };

  const dropdownStyle = {
    margin: '10px 10px',
  };

  return (
    <div style={dropdownContainerStyle}>
      {[1, 2, 3, 4, 5, 6, 7,8,9,].map((index) => (
        <select
          key={index}
          value={selectedOptions[`dropdown${index}`]}
          onChange={(event) => handleOptionChange(event, `dropdown${index}`)}
          style={dropdownStyle}
        >
          <option value="">Select an option</option>
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
          <option value="option3">Option 3</option>
        </select>
      ))}
    </div>
  );
};

export default Drop;
