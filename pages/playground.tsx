import { ReactElement } from "react";
import Navbar from "./components/Navbar";
import Layout from "./components/Layout";
import { Stack, Typography } from "@mui/material";

function App() {
  return (
    <>
      <Layout>
        <Stack
          id="main-content"
          sx={{
            width: "100%",
            height: "100%",
            alignItems: "center",
            position: "flex",
          }}
        >
          <Typography fontSize={40} color="turquoise">
            🛝 Welcome to our playground! 🃏
          </Typography>
        </Stack>
      </Layout>
    </>
  );
}

export default App;
