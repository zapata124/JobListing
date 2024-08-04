import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <Box width={"100vw"} height={"100vh"}>
      <Outlet />
    </Box>
  );
}

export default App;
