import Autocomplete from '@mui/joy/Autocomplete';
import Input from '@mui/joy/Input';

export default function DemoAutocomplete()
{
  return (
<Autocomplete
  placeholder="Combo box"
  options={top100Films}
  sx={{ width: 300 }}
/>
  );
}
  
