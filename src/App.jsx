import Navbar from "./components/Navbar";
import Dropdown from "./components/Dropdown";
import { Stack, Box } from "@mui/material";

const App = () => {
  return (
    <Stack>
      <Navbar />
      <Stack direction="column" gap={4} sx={{ m: 4 }}>
        <Box display="flex" gap={4}>
          <Dropdown label="Country" options={[]} onChange={() => {}} />
          <Dropdown label="City" options={[]} onChange={() => {}} />
        </Box>
      </Stack>
    </Stack>
  );
};

export default App;
