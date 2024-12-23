import React, { ReactElement } from "react";
import Navbar from "./components/Navbar";
import Layout from "./components/Layout";
import { Stack, Typography } from "@mui/material";

function GloryHats() {
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
          <Typography fontSize={40} color="orange">
            We're making hats for smooth brains!!
          </Typography>
          <Typography fontSize={40}>🧠🧠🧠🧠🧠🧠</Typography>
        </Stack>
      </Layout>
    </>
  );
}

export default GloryHats;
