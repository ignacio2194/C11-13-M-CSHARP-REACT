import React, { useState } from 'react';
import Typography from '@mui/material/Typography';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';

const AddressSelector = () => {
  const [selectedOption, setSelectedOption] = useState('');

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div>
      <Typography style={{ textAlign: 'center' }} variant="h5">Elige la dirección de envío</Typography>
      <RadioGroup style={{ display: 'flex', flexDirection: 'row' }} value={selectedOption} onChange={handleOptionChange}>
        <FormControlLabel value="option1" control={<Radio />} label="Dirección registrada" />
        <FormControlLabel value="option2" control={<Radio />} label="Otra dirección" />
      </RadioGroup>
    </div>
  );
};

export default AddressSelector;
