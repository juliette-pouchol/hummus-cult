import Header from "./Header/Header";

import { Stack } from "@mui/material";

export default function Layout({ children }) {
  return (
    <Stack width="100%" height="100%" gap={5}>
      <Header />
      <main>{children}</main>
    </Stack>
  );
}
