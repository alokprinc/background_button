import { useState } from "react";
import Bar from "../components/Bar";
import "./App.css";

import Stack from "@mui/material/Stack";
function App() {
  const [screenColor, SetScreenColor] = useState("#fffff");
  return (
    <>
      <Stack
        direction={{ xs: "row", sm: "row" }}
        justifyContent="center"
        alignItems="flex-start"
        sx={{ background: screenColor, width: "100vw", height: "100vh" }}
      >
        <Bar SetScreenColor={SetScreenColor} />
      </Stack>
    </>
  );
}

export default App;
