import * as React from 'react';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { MobileDateTimePicker } from '@mui/x-date-pickers/MobileDateTimePicker';
import { LocalizationProvider } from '@mui/x-date-pickers';
import './dateSelect.scss';

interface Props {
  /**
   * Text for the label
   */
  label: string;
  /**
   * Label text color 
   */
  color?: string;
  /**
   * Label FontSize
   */
  fontSize?: number;
}

export function DateSelect(props: Props) {
  const { label, color, fontSize } = props;
  const commonStyle = { color, fontSize };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <label style={commonStyle}>{label}</label>
      <MobileDateTimePicker />
    </LocalizationProvider>
  );
}
