import { TextField } from '@mui/material';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';

export default function DishTimeField() {
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <TimePicker
        disableOpenPicker
        inputFormat="HH:mm:ss"
        mask="__:__:__"
        label="With seconds"
        value={123}
        onChange={(newValue) => {}}
        renderInput={(params) => <TextField {...params} />}
      />
    </LocalizationProvider>
  );
}
